// Countdown duration (in milliseconds) - 5 minutes from now
const countdownDuration = 5 * 60 * 1000;
const targetTime = new Date().getTime() + countdownDuration;

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const message = document.getElementById("message");

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetTime - now;

  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("timer").style.display = "none";
    message.textContent = "🎉 Time’s Up!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = days.toString().padStart(2, "0");
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minutesEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}, 1000);
