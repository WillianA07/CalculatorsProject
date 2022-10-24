"use strict"

window.onload = init;

function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked() {
    const fahrenTempField = document.getElementById("fahrenTempField");
    
    let fTempNumber = Number(fahrenTempField.value);

    let convertedTemp = (fTempNumber - 32) * (5/9);

    const celsiusTempField = document.getElementById("celsiusTempField");

    celsiusTempField.value = convertedTemp;
}