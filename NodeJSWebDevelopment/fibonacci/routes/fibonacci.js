var express = require("express");
var router = express.Router();

var math = require("../math");

router.get("/", function (req, res, next) {
  if (req.query.fibonum) {
    //Calculate diectly on this server
    var num = parseInt(req.query.fibonum);
    if (isNaN(num)) {
      res.render("fibonacci", {
        title: "Calculate Finonacci numbers",
        fibonum: undefined
      });
    } else {
      res.render("fibonacci", {
        title: "Calculate Finonacci numbers",
        fibonum: num,
        fiboval: math.fibonacci(num)
      });
    }
  } else {
    res.render("fibonacci", {
      title: "Calculate Finonacci numbers",
      fibonum: undefined
    });
  }
});

module.exports = router;
