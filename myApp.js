const express = require("express");
const app = express();

// ====== REQUIRE & USE HELMET ======
const helmet = require("helmet");

// Hide X-Powered-By header
app.use(helmet.hidePoweredBy());

// ====== USE HELMET'S FRAMEGUARD MIDDLEWARE ======
app.use(helmet.frameguard({ action: "deny" })); // Blocks ALL framing

// ====== USE HELMET'S XSSFILTER MIDDLEWARE ======
app.use(helmet.xssFilter()); // Sets "X-XSS-Protection: 1; mode=block"

// ====== USE HELMET'S NOSNIFF MIDDLEWARE ======
app.use(helmet.noSniff()); // Sets "X-Content-Type-Options: nosniff"

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
