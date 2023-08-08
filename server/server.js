require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const ddbClient = new DynamoDBClient({ region: "us-east-2" });

app.use(cors({
  origin: '*'
}));
app.use(bodyParser.json());

app.post('/save-optin-user', async (req, res) => {
  const post = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    ref: req.body.ref
  };

  try {
    const params = {
      TableName: "finding-joy-table", // replace with DynamoDB table name
      Key: {
        "email": post.email
      },
      Item: marshall(post),
    };
    const command = new PutItemCommand(params);
    const savedPost = await ddbClient.send(command);
    
    // Send email after saving the post
    let transporter = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
        user: process.env.YOUR_EMAIL, 
        pass: process.env.YOUR_PASSWORD 
      }
    });

    let mailOptions = {
      from: process.env.YOUR_EMAIL, 
      to: req.body.email, 
      subject: 'Thank You for Joining Will I Ever Be Happy? Finding Joy Amidst Depression and Anxiety', 
      html: `
    <p>Hello ${req.body.firstName} ${req.body.lastName},</p>
    <p>I hope this email finds you well and filled with anticipation for the upcoming Happiness Summit! I wanted to take a moment to express my sincere gratitude for signing up and becoming a part of this incredible journey towards finding true happiness.</p>
    <p>First and foremost, thank you for your trust in our online summit. We understand that your time is valuable, and we are truly honored that you have chosen to invest it in our event.</p>
    <p>I want to emphasize how thrilled I am to have such an esteemed group of 22 experts joining us to share their wisdom and insights on happiness. Their diverse backgrounds and expertise will provide a rich tapestry of knowledge, offering you a comprehensive understanding of the many facets of happiness.</p>
    <p>Together, we will explore strategies, tools, and perspectives that can empower you to cultivate lasting happiness in your life.</p>
    <p>The summit will be a transformative experience, offering you the opportunity to gain invaluable insights, practical advice, and actionable steps. Our experts will guide you through a range of topics, including mindfulness, gratitude, relationships, personal growth, and much more.</p>
    <p>With their guidance, you will be equipped with the tools to unlock your own happiness potential and create a fulfilling life. Please mark your calendars with the summit dates: August 21st - 30th</p>
    <p>Remember, if you know someone that can benefit from this summit, make sure to send them this <a href="https://www.findingjoysummit.net">link</a>.</p>
    <p>In the coming days, you will receive further communication from us regarding the event schedule, access details, and any additional resources that will assist you on this happiness journey.</p>
    <p>If you would like to purchase the package without date and time restrictions, as well as receive a free ticket to my 3-week workshop, “Grooving into Happiness”, please <a href="https://www.findingjoysummit.net/thankyou">click here</a>.</p>
    <p>Wishing you joy and happiness.</p>
  `
};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
    });

    res.json({savedPost});
  } catch (err) {
    res.json({ message: err });
  }
});

app.post('/save-thankyou-user', async (req, res) => {
  const vipMember = {
    fullName: req.body.fullName,
    email: req.body.email,
  };

  try {
    // Stripe payment processing
    const { amount, id } = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'VIP Pass',
      payment_method: id,
      confirm: true
    });

    if (payment.status !== "succeeded") {
      return res.json({ message: 'Payment failed', success: false });
    }

    const vipParams = {
      TableName: "vip-table", // replace with DynamoDB table name
      Item: marshall(vipMember),
    };
    const vipCommand = new PutItemCommand(vipParams);
    const savedVipMember = await ddbClient.send(vipCommand);

    let transporter = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
        user: process.env.YOUR_EMAIL, 
        pass: process.env.YOUR_PASSWORD 
      }
    });

    let mailOptions = {
      from: process.env.YOUR_EMAIL, 
      to: req.body.email, 
      subject: 'Thank You For Getting Your VIP Pass', 
      html: `
    <p>Hello ${req.body.fullName},</p>
    <p>Thank you for purchasing the Finding Joy V.I.P. package!!! I'm tickled pink that you have made a decision toward transformation!!! You have an exclusive seat to an amazing lineup! You will be receiving a link to this spectacular collection of expert speakers. This link will contain the entire Summit and will never expire! You will receive this link on August 21st.</p>
    <p>In addition, You will also be receiving a link for my upcoming 3-week seminar: "Grooving Into Happiness" that is set to launch in October as part of the VIP package!!!</p>
    <p>I'm so happy you have decided to take this journey with us!!!!</p>
  `
};

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
    });

    res.json({ message: 'Payment successful', success: true, savedVipMember });

  } catch (err) {
    res.json({ message: err, success: false });
  }
});

app.get('/healthz', function (req, res) {
  res.status(200).send("<h1>OK</h1>");
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
