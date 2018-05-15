function serverCommand(command) {
  fetch('http://' + window.location.hostname + ':8080/' + command)
}

window.addEventListener('load', () => {
  
  turnOnAlarm.addEventListener('click', ()=> {
    serverCommand("speak");
  })
  elevator.addEventListener('click', ()=> {
    serverCommand("servoClock");
  })
//  servoAnti.addEventListener('click', ()=> {
//    serverCommand("servoAntiClock");
//  })
  liveCamera.src = 'http://' + window.location.hostname + ':8300/image.jpg'
})