"use strict"

window.onload = init;

function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked() {
    const initialValue = document.getElementById("initialValue");
    const yearlyInterestRate = document.getElementById("yearlyInterestRate");
    const numberOfYears = document.getElementById("numberOfYears");

    let initialValueNumber = Number(initialValue.value);
    let yearlyInterestRateNumber = Number(yearlyInterestRate.value);
    let yearsNumber = Number(numberOfYears.value);

    let actualInterest = (yearlyInterestRateNumber / 100) / 365;

    let valueTotal = initialValueNumber * ((1 + actualInterest) ** (yearsNumber * 365));

    let interest = valueTotal - initialValueNumber;

    const interestEarned = document.getElementById("interestEarned");
    const futureValueTotal = document.getElementById("futureValueTotal");

    interestEarned.value = interest.toFixed(2);
    futureValueTotal.value = valueTotal.toFixed(2);
}