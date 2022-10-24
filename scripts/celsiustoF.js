"use strict"

window.onload = init;

function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked() {
    const celsiusTempField = document.getElementById("celsiusTempField");
    
    let cTempNumber = Number(celsiusTempField.value);

    let convertedTemp = (cTempNumber * 1.8) + 32;

    const fahrenTempField = document.getElementById("fahrenTempField");

    fahrenTempField.value = convertedTemp;
}