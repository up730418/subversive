const PythonShell = require('python-shell');
const express = require('express');
const app = express();
const port = 8080;
var fs = require('fs');
var lame = require('lame');
var Speaker = require('speaker');

let options = {
	  mode: 'text',
	  pythonPath: 'path/to/python',
	  pythonOptions: ['-u'],
	  scriptPath: 'scripts/',
	  args: ['value1', 'value2', 'value3']
};

app.get('/servoClock', async (req, res) => {

  PythonShell.run('scripts/servo2.py', function (err, results) {
	  if (err) {
	   console.log(err);
	  }
	 	// results is an array consisting of messages collected during execution
   		console.log('results: %j', results);
	  res.sendStatus(200);
  });
});

app.get('/servoAntiClock', async (req, res) => {

  PythonShell.run('scripts/servo.py', function (err, results) {
	  if (err) {
	   console.log(err);
	  }
	 	// results is an array consisting of messages collected during execution
   		console.log('results: %j', results);
	  res.sendStatus(200);
  });
});

app.get('/speak', async (req, res) => {
  //sudo apt-get install libasound2-dev (for speaker library to work)
	fs.createReadStream('sounds/UptownFunk.mp3')
	  .pipe(new lame.Decoder())
	  .on('format', function (format) {
		      this.pipe(new Speaker(format));
		    });
	res.sendStatus(200);
});

app.use(express.static('static'));

app.listen(port, (err) => {
  if (err) {
    console.error('error', err);
   } else {
      console.error(`app listening on port ${port}`);
					      }
});

