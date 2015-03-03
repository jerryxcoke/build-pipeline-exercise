var express = require("express");
var calculate = require("./calculate");
var app = express();

app.get('/add', function(req, res) {
    var asd = calculate.add(req.query);
    res.send(asd.toString());
    
});

app.listen(process.env.PORT, function() {
    console.log('Server started in the port: ', process.env.PORT);
});
	
	
	