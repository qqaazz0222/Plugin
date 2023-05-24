var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.redirect("sign/in");
});

router.get("/in", function (req, res, next) {
    res.render("sign", { title: "PLUGINSMS", type: "IN" });
});

router.post("/in", function (req, res, next) {
    res.json({ msg: "Success!" });
});

router.get("/up", function (req, res, next) {
    res.render("sign", { title: "PLUGINSMS", type: "UP" });
});

router.post("/up", function (req, res, next) {
    res.json({ msg: "Success!" });
});

module.exports = router;
