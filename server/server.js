require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
const DB_URI    = "mongodb+srv://joywithmonica:Lolaluke8@users.nhuvcwz.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());

mongoose.connect(process.env.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to DB!')) 
    .catch(err => console.log(err));

app.use('/posts', postRoute);

app.listen(3000, () => console.log('Server running'));


// mongodb+srv://joywithmonica:Lolaluke8@users.nhuvcwz.mongodb.net/?retryWrites=true&w=majority