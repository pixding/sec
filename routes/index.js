
/*
 * GET home page.
 */
var noteMod = require('../models');
var dateFormat = require('dateformat');
exports.index = function(req, res){
    var ip=req.headers['x-real-ip'] || req.headers['x-forwarded-for']||req.ip;
    var createDate = dateFormat(new Date(), "yyyy-mm-dd");
    var ua = req.headers["user-agent"];
    var referer = req.headers["referer"];
    var obj = {
        ip:ip,createDate:createDate,ua:ua,referer:referer
    };
    noteMod.insert(obj,function(err,result){
        if(err){
            console.log("error:"+ip);
        }
    })
    res.json({"a":"1"});

};


