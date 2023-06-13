require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoute = require('./routes/posts');
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use('/posts', postRoute);

app.listen(3000, () => console.log('Server running'));
