const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    // later we'll implement email handling logic here

    res.json({ message: 'Subscription successful!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
