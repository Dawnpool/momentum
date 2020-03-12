const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function addZero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}

function getTime() {
    const date = new Date();
    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());
    const seconds = addZero(date.getSeconds());
    clockTitle.innerText = hours + ":" + minutes + ":" + seconds;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();