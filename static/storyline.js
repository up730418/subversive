function serverCommand(command) {
  fetch('http://' + window.location.hostname + ':8080/' + command);
}

window.addEventListener('load', () => {
  
  turnOnAlarm.addEventListener('click', ()=> {
    serverCommand("alarm");
  });
  
  elevatorOn.addEventListener('click', ()=> {
    serverCommand("servoClock");
    serverCommand("servoClock");
    serverCommand("elevator");
  });
  if(document.getElementById("fakeNewsbtn")){
   fakeNewsbtn.addEventListener('click', ()=> {
	 serverCommand("screen");
   });
  }
  if(document.getElementById("fakeNewsClose")){
   fakeNewsClose.addEventListener('click',()=> {
	  serverCommand("screen");
   });
  }  
//  servoAnti.addEventListener('click', ()=> {
//    serverCommand("servoAntiClock");
//  })
  if(document.getElementById("liveCamera")){
    liveCamera.src = 'http://' + window.location.hostname + ':8300/image.jpg';
  }
});

