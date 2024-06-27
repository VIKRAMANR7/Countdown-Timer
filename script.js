let startTime; // to keep track of the start time
let stopwatchInterval; // to keep track of the interval
let elapsedPauseTime = 0; // to keep track of the elapsed time while stopped
const pauseCountdown = document.querySelector(".pause");
const playCountdown = document.querySelector(".play");
const resetCountdown = document.querySelector(".reset");

function startTimer() {
  if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPauseTime;
    stopwatchInterval = setInterval(formatTime, 10); // update every millisecond
  }
}

function pauseTimer() {
  clearInterval(stopwatchInterval); // stop the interval
  elapsedPauseTime = new Date().getTime() - startTime; // calculate elapsed paused time
  stopwatchInterval = null; // reset the interval variable
}

function resetTimer() {
  pauseTimer(); // stop the interval
  elapsedPauseTime = 0; // reset the elapsed paused time variable
  document.querySelector(".stopwatch").innerHTML = "00:00:00";
}

function formatTime() {
  let elapsedTime = new Date().getTime() - startTime;
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");
  const displayTime = `${minutes} : ${seconds} : ${milliseconds}`;
  document.querySelector(".stopwatch").innerHTML = displayTime;
}

playCountdown.addEventListener("click", startTimer);
pauseCountdown.addEventListener("click", pauseTimer);
resetCountdown.addEventListener("click", resetTimer);
