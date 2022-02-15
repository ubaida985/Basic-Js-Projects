let days = document.getElementById("#days")
let hours = document.getElementById("#hours")
let minutes = document.getElementById("#minutes")
let seconds = document.getElementById("#seconds")

function getNextYearDate() {
    let nextYearDate = new Date(currentDate.getFullYear() + 1, 00, 01, 00, 00, 00, 00);
    return nextYearDate;
}

function getMilliSeconds() {
    this.currentDate = new Date();
    let nextYearDate = getNextYearDate();
    let milliSeconds = nextYearDate - currentDate;
    return milliSeconds;
}

function calculateValues() {
    let value = getMilliSeconds()

    let milliSeconds = value % 1000;
    value /= 1000;


    let days = Math.floor(value / 3600 / 24);
    let hours = Math.floor(value / 3600) - days * 24;
    let minutes = Math.floor(value / 60) - ((hours + days * 24) * 3600) / 60;
    let seconds = Math.floor(value) - minutes * 60 - hours * 3600 - days * 24 * 3600;


    setValues(days, hours, minutes, seconds);
}

function setValues(days, hours, minutes, seconds) {
    (this.days).innerHTML = days;
    (this.hours).innerHTML = hours;
    (this.minutes).innerHTML = minutes;
    (this.seconds).innerHTML = seconds;
}

setInterval(calculateValues, 1);