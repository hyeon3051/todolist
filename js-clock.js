const clock = document.querySelector(".js-clock"),
    clockTitle = clock.querySelector("h1")

function setTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    clockTitle.innerText = `${hour>10 ? hour: `0${hour}`}:
        ${minute>10 ? minute : `0${minute}`}:${second>10 ? second : `0${second}`}`
}

function init() {
    setTime();
    setInterval(setTime, 1000);
}

init()