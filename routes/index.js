var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("main", { title: "PLUGINSMS" });
});

router.get("/api-list", function (req, res, next) {
    const apiName = [
        "BulkSMSOnline",
        "aligo",
        "EasySendSMS",
        "Bulkgate",
        "ForwardValueSMS",
        "SOLAPI",
        "Twilio",
        "Nexmo",
        "cheapSMS",
        "D7networks",
        "Telnyx",
        "SMSto",
        "clickatell",
        "Releans",
        "SENDSMSGATE",
        "CheapGlobalSms",
        "BSG",
        "TrueDialog",
        "BulkSmsPlans",
        "VONAGE",
        "messente",
        "plivo",
        "gatewayapi",
        "amazon pinpoint",
        "whois hosting",
        "sendinblue",
        "bandwidth",
        "sinch",
    ];
    const apiURL = [
        "bulksmsonline.com",
        "smartsms.aligo.in",
        "easysendsms.com",
        "bulkgate.com",
        "forwardvaluesms.com",
        "cheapsms.com",
        "d7networks.com",
        "telnyx.com",
        "sms.to",
        "clicksend.com",
        "releans.com",
        "sendsmsgate.comen",
        "cheapglobalsms.com",
        "bsg.world/",
        "truedialog.com",
        "zitasms.com",
        "bulksmsplans.com",
        "vonage.kr",
        "messente.com",
        "plivo.com",
        "gatewayapi.com",
        "docs.aws.amazon.com",
        "hosting.whois.co.kr",
        "developers.sendinblue.com",
        "bandwidth.com",
        "community.sinch.com",
    ];
    res.render("api-list", {
        title: "API 목록",
        apiName: apiName,
        apiURL: apiURL,
    });
});

router.get("/api-compare", function (req, res, next) {
    const apiList = [
        "BulkSMSOnline",
        "aligo",
        "EasySendSMS",
        "Bulkgate",
        "ForwardValueSMS",
        "SOLAPI",
        "Twilio",
        "Nexmo",
        "cheapSMS",
        "D7networks",
        "Telnyx",
        "SMSto",
        "clickatell",
        "Releans",
        "SENDSMSGATE",
        "CheapGlobalSms",
        "BSG",
        "TrueDialog",
        "BulkSmsPlans",
        "VONAGE",
        "messente",
        "plivo",
        "gatewayapi",
        "amazon pinpoint",
        "whois hosting",
        "sendinblue",
        "bandwidth",
        "sinch",
    ];
    res.render("api-compare", { title: "API 비교", apiList: apiList });
});

router.get("/introduce", function (req, res, next) {
    res.render("introduce", { title: "소개" });
});

module.exports = router;
