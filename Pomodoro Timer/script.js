const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');

let remainTime = 1500;
let isRunning = false;
let timerId = undefined;

const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, '0')}: ${sec.toString().padStart(2, '0')}`
}

const countdown = () => {
    if (remainTime === 0) {
        clearInterval(timerId);
        alert("Time's up")
    }
    remainTime--;
    timer.textContent = formatTime(remainTime);
}

startBtn.addEventListener('click', () => {
    if (isRunning) return;
    timerId = setInterval(countdown, 1000);
    isRunning = true;
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(timerId);
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    remainTime = 1500;
    isRunning = false;
    timer.textContent = formatTime(remainTime)
});