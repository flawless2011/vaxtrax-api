var express = require('express');
var app = express();
var accountService = require('./services/account');
var bodyParser = require('body-parser');
var googleAuth = require('./middleware/googleAuth');

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Length, X-Requested-With, Content-Type, Authorization');
  if(req.method === 'OPTIONS'){
    res.status(200).send();
  }
  else {
    next();
  }
});

app.use('/', googleAuth.authenticate);

// Account
app.post('/api/account', accountService.create);
app.get('/api/account/:accountID', accountService.fetch);
app.put('/api/account/:accountID', accountService.update);

app.listen(app.get('port'), function() {
  console.log('Node up and running on port %d Captain!', app.get('port'));
});
