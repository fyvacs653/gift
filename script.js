const timer = document.querySelector(".timer");
const hoursElement = timer.querySelector(".hours");
const minutesElement = timer.querySelector(".minutes");
const secondsElement = timer.querySelector(".seconds");


// Получаем текущую дату
const now = new Date();

// Определяем дату окончания: завтра в 18:00
const target = new Date(now);
target.setDate(now.getDate() + 1); // завтра
target.setHours(18, 0, 0, 0); // 18:00:00

const addZero = (time) => time < 10 ? `0${time}` : time; 

const updateTimer = () => {
    const currentTime = new Date();
    const diff = target - currentTime;

    if (diff <= 0) {
        clearInterval(timerInterval);
        console.log("⏰ Время вышло!");
        return;
    }

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    if(!hoursElement || !minutesElement || !secondsElement) return;
    hoursElement.innerText = addZero(hours);
    minutesElement.innerText = addZero(minutes);
    secondsElement.innerText = addZero(seconds);
}
updateTimer();
// Обновляем таймер каждую секунду
const timerInterval = setInterval(updateTimer, 1000);
