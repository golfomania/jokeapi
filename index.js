var express = require("express");
var path = require("path");

var app = express();

app.use(express.static(__dirname + "public"));
app.use(express.static(path.join(__dirname, "public")));

var server = app.listen(3005, () => {
  var port = server.address().port;
  console.log(`Server started on port ${port}`);
});
