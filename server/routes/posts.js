const express = require('express');
const router = express.Router();
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { marshall } = require("@aws-sdk/util-dynamodb");

const ddbClient = new DynamoDBClient({ region: "us-east-2" }); // Replace with your region

router.post('/', async (req, res) => {
  const post = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  try {
    const params = {
      TableName: "finding-joy-table", // replace with your DynamoDB table name
      Item: marshall(post),
    };
    const command = new PutItemCommand(params);
    const savedPost = await ddbClient.send(command);
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
