const express = require("express");
const app = express();

// Your code starts here
const helmet = require("helmet");

// Use helmet middleware
app.use(helmet());

// Your code ends here

// Existing code provided by the course
// Your code starts here
const helmet = require("helmet");

// Use helmet middleware
app.use(helmet());
// Your code ends here

// Existing code provided by the course
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
