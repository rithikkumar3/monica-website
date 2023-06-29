const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.SQUARE_ACCESS_TOKEN; 

module.exports = new SquareConnect.PaymentsApi();