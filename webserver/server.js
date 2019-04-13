var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
const Gpio = require('pigpio').Gpio;
const motor19 = new Gpio(19, {mode: Gpio.OUTPUT});


app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

//app.get('/', function (req, res) {
//	//res.send('./index.html');
//	res.sendFile(path.join(__dirname + '/index.html'));
//
//})
//
//app.get('/styles.css', function (req, res) {
//	res.sendFile(path.join(__dirname + '/styles.css'));
//
//})

function mapRange(value){
  const min = 500;
  const max = 2000;
  return value*(max-min)+min
}

app.post('/actions', function(req, res) {
  console.log(req.body);
	var pinNum = req.body.name;
  var value = req.body.value;
  console.log("Received value "+value+" for pin "+pinNum);
  var pulseWidth = mapRange(value)
  console.log("Wrote: "+pulseWidth);
  motor19.servoWrite(pulseWidth);
  res.status(204).send();

});

var server = app.listen(8081, function () {
	   var host = server.address().address
	   var port = server.address().port
	   
	   console.log("Example app listening at http://%s:%s", host, port)
})
