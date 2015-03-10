
/*
 * GET home page.
 */

exports.index = function(req, res){
    console.log("ua:"+req.headers['user-agent']+".........ip:"+req._remoteAddress+"\r\n");
    res.json({"a":"1"});


};
exports.set = function(req, res){
    res.render('a', {
        layout: false
    });
};
exports.do = function(req, res){
    res.render('b', {
        layout: false
    });
};