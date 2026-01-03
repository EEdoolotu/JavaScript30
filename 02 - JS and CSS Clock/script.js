const hourHand = document.querySelector(".hand.hour-hand")
const minHand = document.querySelector(".hand.min-hand")
const secHand = document.querySelector(".hand.second-hand")

const now = new Date()
const seconds = now.getSeconds();
const minutes = now.getMinutes();
const hours = now.getHours();


let secs = ((seconds / 60) * 360 ) + 90
let mins = ((minutes / 60) * 360 ) + 90
let minuteOffSet = (minutes / 60) * 30;
let hrs = ((hours / 12) * 360 ) + minuteOffSet + 90

setInterval(function() {
    secs += 6;
    mins += (6 / 60);
    hrs += (30 / 3600)

    secHand.style.transform = `rotate(${secs}deg)`;
    minHand.style.transform = `rotate(${mins}deg)`;
    hourHand.style.transform = `rotate(${hrs}deg)`;
}, 1000);