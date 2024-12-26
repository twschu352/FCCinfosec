var express = require('express');
var app = express();
// app.disable('x-powered-by');

var helmet = require('helmet');
// app.use(helmet.contentSecurityPolicy({
//     directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc:["'self'"] }
//   }));

app.use(helmet.hidePoweredBy());






module.exports = app;
var api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});