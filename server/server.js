// require('dotenv').config();

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const postRoute = require('./routes/posts');
// const cors = require('cors');
// app.use(cors());

// app.use(bodyParser.json());

// app.use('/posts', postRoute);

// app.listen(3000, () => console.log('Server running'));


require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoute = require('./routes/posts');
const cors = require('cors');
const path = require('path'); // Add this

app.use(cors());

app.use(bodyParser.json());

app.use('/posts', postRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(5000, () => console.log('Server running'));
