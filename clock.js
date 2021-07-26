const clock = document.querySelector(".clock");

function dispalyClock() {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hours = ("0" + hours).slice(-2);
  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}
setInterval(dispalyClock, 1000);
