var express = require('express');
var app = express();
var accountService = require('./services/account');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 8080));

app.use(bodyParser.json());

// Account
app.get('/', function(req, res){
  res.send("hello");
});
app.post('/api/account', accountService.create);
app.get('/api/account/:accountID', accountService.fetch);
app.put('/api/account/:accountID', accountService.update);

app.listen(app.get('port'), function() {
  console.log('Node up and running on port %d Captain!', app.get('port'));
});
