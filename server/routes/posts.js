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
      subject: 'Thank You For Signing Up', 
      text: `Hello ${req.body.firstName} ${req.body.lastName}, Thank you for signing up!` 
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
      text: `Hello ${req.body.firstName} ${req.body.lastName}, Your content is on the way!` 
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