const express = require('express');
const router = express.Router();
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");
const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQUARE_ACCESS_TOKEN;
const paymentsApi = new SquareConnect.PaymentsApi();
const nodemailer = require('nodemailer');
const squareClient = require('../services/squareClient');


const ddbClient = new DynamoDBClient({ region: "us-east-2" }); // Replace with your region

router.post('/', async (req, res) => {
  const post = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    ref: req.body.ref
  };

  try {
    const params = {
      TableName: "finding-joy-table", // replace with your DynamoDB table name
      Item: marshall(post),
    };
    const command = new PutItemCommand(params);
    const savedPost = await ddbClient.send(command);
    
    // Send email after saving the post
    let transporter = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
        user: process.env.YOUR_EMAIL, // replace with your Yahoo email
        pass: process.env.YOUR_PASSWORD // replace with your Yahoo password
      }
    });

    let mailOptions = {
      from: process.env.YOUR_EMAIL, // sender address
      to: req.body.email, // list of receivers
      subject: 'Thank You For Signing Up', // Subject line
      text: `Hello ${req.body.firstName} ${req.body.lastName}, Thank you for signing up!` // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
    });
    
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post('/process-payment', async (req, res) => {
  const requestParams = {
    source_id: req.body.nonce, // nonce is provided by Square Payment Form
    amount_money: {
      amount: 100, // $1.00 charge
      currency: 'USD'
    },
    idempotency_key: req.body.idempotency_key, // ensure this is unique for each payment
  };

  try {
    const response = await paymentsApi.createPayment(requestParams);
    res.status(200).json({
      'title': 'Payment Successful',
      'result': response
    });
  } catch(error) {
    console.log('Error processing payment:', error);
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});

module.exports = router;
