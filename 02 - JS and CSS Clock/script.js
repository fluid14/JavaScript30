const handSecond = document.querySelector(".hand.second-hand");
const handMinute = document.querySelector(".min-hand");
const handHour = document.querySelector(".hour-hand");
handSecond.style.transformOrigin = "center right"
handMinute.style.transformOrigin = "center right"

// Set time 12:00
const divClock = document.querySelector(".clock");
divClock.style.transform = "rotate(90deg)";

function clock() {
    setTimeout("clock()", 1000)
    let currentDate = new Date();
    handSecond.style.transform = `rotate(${currentDate.getSeconds() * 6}deg)`;
    handMinute.style.transform = `rotate(${currentDate.getMinutes() * 6}deg)`;
    handHour.style.transform = `rotate(${currentDate.getHours() * 15}deg)`;
}

clock();

// Bonus Style
handSecond.style.backgroundColor = "red";
handSecond.style.height = "3px";
handHour.style.transformOrigin = "center right"
handHour.style.backgroundColor = "#fff";