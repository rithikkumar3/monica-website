const express = require('express');
const router = express.Router();
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Add Stripe
const ddbClient = new DynamoDBClient({ region: "us-east-2" });// Replace with your region


router.post('/save-optin-user', async (req, res) => {
  const post = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    ref: req.body.ref
  };

  try {
    const params = {
      TableName: "finding-joy-table", // replace with DynamoDB table name
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
      text: `Hello ${req.body.firstName} ${req.body.lastName}, I hope this email finds you well and filled with anticipation for the upcoming Happiness Summit! I wanted to take a moment to express my sincere gratitude for signing up and becoming a part of this incredible journey towards finding true happiness.

      First and foremost, thank you for your trust in our online summit. We understand that your time is valuable, and we are truly honored that you have chosen to invest it in our event. Your participation will undoubtedly contribute to making this summit a resounding success.
      
      I want to emphasize how thrilled I am to have such an esteemed group of 21 experts joining us to share their wisdom and insights on happiness. Their diverse backgrounds and expertise will provide a rich tapestry of knowledge, offering you a comprehensive understanding of the many facets of happiness. Together, we will explore strategies, tools, and perspectives that can empower you to cultivate lasting happiness in your life.
      
      The summit will be a transformative experience, offering you the opportunity to gain invaluable insights, practical advice, and actionable steps. Our experts will guide you through a range of topics, including mindfulness, gratitude, relationships, personal growth, and much more. With their guidance, you will be equipped with the tools to unlock your own happiness potential and create a fulfilling life.
      Please mark your calendars with the summit dates:  XXXXXXX
       In the coming days, you will receive further communication from us regarding the event schedule, access details, and any additional resources that will assist you on this happiness journey.
      If you would like to purchase the package without date and time restrictions, please click the link below. 
      XXXXXXX
      
      Wishing you anticipation and happiness` 
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

router.post('/save-thankyou-user', async (req, res) => {
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
      text: `Hello ${req.body.fullName}, Thank you for purchasing the Finding Joy V.I.P. package!!! I'm tickled pink that you have made a decision toward transformation!!! You have an exclusive, seat to an amazing lineup! You will be receiving a link to this spectacular collection of expert speakers in the next 2 weeks. This link will contain the entire Summit and will never expire! 

      You will also be receiving daily links starting on XXXX to the daily summit speakers, as the part of the regular registration to the summit. These daily links will include 2 to 3 speakers, included in your VIP collection. 
      
      In addition, You will also be receiving a link for my upcoming 3 day seminar: XXXXX that is set to launch on XXXXX as part of the VIP package!!! 
      
      I'm so happy you have decided to take this journey with us!!!!` 
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

module.exports = router;