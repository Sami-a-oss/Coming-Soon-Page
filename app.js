const launchingTime = new Date("30 april 2050 00:00:00").getTime();

const day = document.querySelector("#day");
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

const x = setInterval(() => {
  const now = new Date().getTime();

  const diff = launchingTime - now;

  const seconds = Math.floor(diff/1000);
  const minutes = Math.floor(seconds/60);
  const hours = Math.floor(minutes/60);
  const days = Math.floor(hours/24);

  day.innerText = days;
  hour.innerText = hours % 24;
  minute.innerText = minutes % 60;
  second.innerText = seconds % 60;

  if(diff < 0) {
    clearInterval(x);
    day.innerText = "00";
    hour.innerText = "00";
    minute.innerText ="00";
    second.innerText = "00";
  }

}, 1000);
