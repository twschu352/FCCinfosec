const express = require("express");
const app = express();

// ====== REQUIRE & USE HELMET ======
const helmet = require("helmet");

// ====== USE HELMET'S HSTS MIDDLEWARE ======
const ninetyDaysInSeconds = 90 * 24 * 60 * 60; // 90 days in seconds
app.use(
  helmet.hsts({
    maxAge: ninetyDaysInSeconds,
    force: true, // Enforces HTTPS even on the initial request
  })
);

// ====== DISABLE DNS PREFETCHING ======
app.use(helmet.dnsPrefetchControl()); // Disables DNS prefetching

// ====== DISABLE CLIENT-SIDE CACHING ======
app.use(helmet.noCache()); // Sets several anti-caching headers

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
