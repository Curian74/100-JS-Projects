const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const timer = document.querySelector('.timer');

let isRunning = false;
let timeLeft = 1500; // 25 minutes in seconds
let timerId = null;

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

const countdown = () => {
    if (timeLeft === 0) {
        clearInterval(timerId);
        alert('Time is up!');
        return;
    }
    timeLeft--;
    timer.textContent = formatTime(timeLeft);
}

startBtn.addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    timerId = setInterval(countdown, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    isRunning = false;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    isRunning = false;
    timeLeft = 1500;
    timer.textContent = formatTime(timeLeft);
});