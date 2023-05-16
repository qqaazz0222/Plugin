var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("main", { title: "PLUGINSMS" });
});

router.get("/api-list", function (req, res, next) {
    res.render("api-list", { title: "API 목록" });
});

router.get("/introduce", function (req, res, next) {
    res.render("introduce", { title: "소개" });
});

module.exports = router;
