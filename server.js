var express = require('express');
var app = express();
var accountService = require('./services/account');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// Account
app.post('/api/account', accountService.create);
app.get('/api/account/:accountID', accountService.fetch);
app.put('/api/account/:accountID', accountService.update);

app.listen(8080);
