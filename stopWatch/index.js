
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

let display = document.getElementById('stopwatch');
let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');

function startStopwatch() {
    timer = setInterval(updateStopwatch, 1000);
    startStopBtn.textContent = 'Stop';
    startStopBtn.removeEventListener('click', startStopwatch);
    startStopBtn.addEventListener('click', stopStopwatch);
}

function stopStopwatch() {
    clearInterval(timer);
    startStopBtn.textContent = 'Start';
    startStopBtn.removeEventListener('click', stopStopwatch);
    startStopBtn.addEventListener('click', startStopwatch);
}

function resetStopwatch() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

startStopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
