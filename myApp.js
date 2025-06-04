const express = require('express');
const app = express();
const helmet = require('helmet');

//mounting helmet framegard
app.use(helmet.frameguard({action: 'deny'}));

//mounting helmet middleware with hide poweredby
app.use(helmet.hidePoweredBy());










































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
