var express = require("express");
var path = require("path");
var router = express.Router();


router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
    
  });

router.get("/portfolio", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/portfolio.html"));

})

router.get("/images/:name", function(req, res) {
    let image = req.params.name;
    console.log(image);
    res.sendFile(path.join(__dirname, `${image}`));
})


  module.exports = router;