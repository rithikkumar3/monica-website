// server/routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const post = new Post({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  });
  
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;