const express = require("express");
const app = express();

// ====== REQUIRE & USE HELMET ======
const helmet = require("helmet");
app.use(helmet()); // Basic Helmet setup (includes hidePoweredBy by default)

app.use(helmet.hidePoweredBy()); // Explicitly hide X-Powered-By header

// ====== USE HELMET'S FRAMEGUARD MIDDLEWARE ======
app.use(helmet.frameguard({ action: "deny" })); // Blocks ALL framing

module.exports = app;
const api = require("./server.js");
app.use(express.static("public"));
app.disable("strict-transport-security");
app.use("/_api", api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
