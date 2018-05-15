function serverCommand(command) {
  fetch('http://192.168.5.1:8080/' + command)
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
})