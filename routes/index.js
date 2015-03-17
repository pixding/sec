//var noteMod = require('../models');
/*
 * GET home page.
 */

exports.index = function(req, res){
    var proxy_ip=req.headers['x-real-ip'] || req.headers['x-forwarded-for']
    if(proxy_ip) {
        console.log("proxy:" + proxy_ip);
    }
    if(req.ip) {
        console.log(req.ip);
    }
    //console.log("ua:"+req.headers['user-agent']+".........ip:"+req._remoteAddress+"\r\n");
    res.json({"a":"1"});


};