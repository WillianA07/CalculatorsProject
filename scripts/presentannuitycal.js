"use strict"

window.onload = init;

function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked() {
    const fixedPaymentAmount = document.getElementById("fixedPaymentAmount");
    const interestRate = document.getElementById("interestRate");
    const numberOfPeriods = document.getElementById("numberOfPeriods");

    let paymentAmountNumber = Number(fixedPaymentAmount.value);
    let interestRateNumber = Number(interestRate.value);
    let periodNumber = Number(numberOfPeriods.value);

    let actualInterest = (interestRateNumber / 100) / 12;

    let presentValue = paymentAmountNumber * ((1 - (1 / ((1 + actualInterest) ** periodNumber))) / actualInterest);

    const totalPresentValue = document.getElementById("totalPresentValue");

    totalPresentValue.value = presentValue.toFixed(2);
}