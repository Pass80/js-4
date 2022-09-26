const display = document.getElementById('display');

function incrementOne() {
    display.innerHTML = +display.innerHTML + 1;
}
function decrementOne() {
    display.innerHTML = +display.innerHTML - 1;
}
function incrementTen() {
    display.innerHTML = +display.innerHTML + 10;
}
function decrementTen() {
    display.innerHTML = +display.innerHTML - 10;
}
function incrementHundred() {
    display.innerHTML = +display.innerHTML + 100;
}
function decrementHundred() {
    display.innerHTML = +display.innerHTML - 100;
}

function multiply() {
    display.innerHTML = +display.innerHTML * 2;
}

function reset() {
    display.innerHTML = 0;
}
