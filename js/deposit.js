function getInputFieldValueById(inputFieldId) {
    const inputValue = document.getElementById(inputFieldId);
    const previousValueString = inputValue.value;
    const newDepositValue = parseFloat(previousValueString);
    inputValue.value = '';
    return newDepositValue;
}

function getTextElementValueById(elemnetId) {
    const getElementDoposit = document.getElementById(elemnetId);
    const getElemnetDopositString = getElementDoposit.innerText;
    const textElementValue= parseFloat(getElemnetDopositString);
    return textElementValue;
}

function setTextElementValueById(elemnetId, newValue) {
    const getElenentField = document.getElementById(elemnetId);
    getElenentField.innerText = newValue;
}


document.getElementById('btn-deposit').addEventListener('click', function () {
    
    const newDepositAmount= getInputFieldValueById('deposit-field');

    const textDepositAmount = getTextElementValueById('deposit-total');

    const depositElimentTotal = textDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', depositElimentTotal);

    
    const previousBalance = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalance + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})