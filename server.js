const PythonShell = require('python-shell');
const express = require('express');
const app = express();
const port = 8080;
const fs = require('fs');
const lame = require('lame');
const Speaker = require('speaker');
const WebSocketServer = require("ws").Server
const wss = new WebSocketServer({port:3434});

let options = {
	  mode: 'text',
	  pythonPath: 'path/to/python',
	  pythonOptions: ['-u'],
	  scriptPath: 'scripts/',
	  args: ['value1', 'value2', 'value3']
};

app.get('/servoClock', async (req, res) => {

  PythonShell.run('./scripts/servo2.py', function (err, results) {
	  if (err) {
	   console.log(err);
	  }
	 	// results is an array consisting of messages collected during execution
   		console.log('results: %j', results);
	  res.sendStatus(200);
  });
});

app.get('/servoAntiClock', async (req, res) => {

  PythonShell.run('./scripts/servo.py', function (err, results) {
	  if (err) {
	   console.log(err);
	  }
	 	// results is an array consisting of messages collected during execution
   		console.log('results: %j', results);
	  res.sendStatus(200);
  });
});

app.get('/alarm', async (req, res) => {
  //sudo apt-get install libasound2-dev (for speaker library to work)
	fs.createReadStream('./sounds/alarm.mp3')
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
		      this.pipe(new Speaker(format));
		    });
	res.sendStatus(200);
});

app.get('/elevator', async (req, res) => {
  //sudo apt-get install libasound2-dev (for speaker library to work)
	fs.createReadStream('sounds/elevator.mp3')
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
		      this.pipe(new Speaker(format));
		    });
	res.sendStatus(200);
});

app.get('/screen', async (req, res) => {
  //sudo apt-get install libasound2-dev (for speaker library to work)
  wss.broadcast('change', 'screen')
  res.sendStatus(200);
});

app.use(express.static('./static'));

app.listen(port, (err) => {
  if (err) {
    console.error('error', err);
   } else {
    console.log(`app listening on port ${port}`);
					      }
});

wss.broadcast = function broadcast(message, room){
	wss.clients.forEach(function(client){ 
		if(room == client.protocol){
			client.send(JSON.stringify([{message: message}]))
		}
	});
};
