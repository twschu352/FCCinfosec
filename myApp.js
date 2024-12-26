import express from 'express';
import { hidePoweredBy } from 'helmet';
const app = express();

app.use(hidePoweredBy());










































export default app;
import api from './server.js';
app.use(static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
