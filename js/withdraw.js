document.getElementById('btn-withdraw').addEventListener('click', function () {
    
    const previousWithdrewInput = getInputFieldValueById('withdraw-field');
    const withdrawElementTotal = getTextElementValueById('withdraw-total');
    const withdrawTotalAmount = withdrawElementTotal + previousWithdrewInput;
    setTextElementValueById('withdraw-total', withdrawTotalAmount);

    const newBalanceAmount = getTextElementValueById('balance-total');
    const balanceTotalAmount = newBalanceAmount - previousWithdrewInput;
    setTextElementValueById('balance-total', balanceTotalAmount);
})