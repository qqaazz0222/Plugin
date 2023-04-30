var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "PLUGINSMS" });
});

router.get("/api", function (req, res, next) {
    res.render("api", { title: "API 목록" });
});

module.exports = router;
