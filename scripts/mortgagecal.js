"use strict"

window.onload = init;

function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = onCalculateButtonClicked;
}

function onCalculateButtonClicked() {
    const totalLoanAmouunt = document.getElementById("totalLoanAmount");
    const totalTermMonths = document.getElementById("totalTermMonths");
    const monthlyInterestRate = document.getElementById("monthlyInterestRate");

    let loanAmountNumber = Number(totalLoanAmount.value);
    let termMonthsNumber = Number(totalTermMonths.value);
    let interestRateNumber = Number(monthlyInterestRate.value);

    let actualInterest = (interestRateNumber / 100) / 12;

    let monthlyCost = loanAmountNumber * ((actualInterest * (1 + actualInterest) ** termMonthsNumber) / ((1 + actualInterest) ** termMonthsNumber - 1));

    let interestPaid = (monthlyCost * termMonthsNumber) - loanAmountNumber;
    
    const monthlyPayments = document.getElementById("monthlyPayments");
    const totalInterest = document.getElementById("totalInterest");

    monthlyPayments.value = monthlyCost.toFixed(2);
    totalInterest.value = interestPaid.toFixed(2);
}