var express = require("express");
const Realm = require("realm");
const app = new Realm.App({ id: "ccapartmentplatform-udteh" });

var router = express.Router();

router.post("/loginMongoDB",function(req,res){
});


router.get("/",function(req,res){
    res.render("login/loginstart");
});


router.post("/",function(req,res,next){
    var email = req.body.LogEMail;
    var password = req.body.LogPasswort;

    console.log(email);
    console.log(password);

    res.render("home/SHome");
});

module.exports = router;