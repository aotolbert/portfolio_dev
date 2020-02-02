var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// Import routes and give the server access to them.
var routes = require("./routes/htmlRoutes");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
