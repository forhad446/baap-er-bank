const btn = document.getElementById('btn-withdraw');
btn.addEventListener('click',function(){
    // take the input value for set the withdraw money
    const withdrawMoney_str = document.getElementById('withdrawMoney');
    const withdrawMoney = parseFloat(withdrawMoney_str.value);
    // check empty or not number input
    if(isNaN(withdrawMoney)){
        alert("something else ");
        withdrawMoney_str.value = '';
        return;
    }else if(withdrawMoney < 0){
        alert("minimum withdraw required");
        withdrawMoney_str.value = '';
        return;
    }
    // take the current withdraw amount
    const current_withdraw_amount_str = document.getElementById('current_withdraw_amount');
    const current_withdraw_amount = parseFloat(current_withdraw_amount_str.innerText);
    
    // clear the input value for set new value
    withdrawMoney_str.value = '';

    // take the current balance 
    const current_total_amount_str = document.getElementById('current_total_amount');
    const current_total_amount = parseFloat(current_total_amount_str.innerText);
    if(withdrawMoney > current_total_amount){
        alert("can't withdraw more money");
        return;
    }
    // update current withdraw balance
    const updateWithdraw = withdrawMoney + current_withdraw_amount;
    current_withdraw_amount_str.innerText = updateWithdraw.toFixed(2);
    // update current total balance
    const update_current_total = current_total_amount - withdrawMoney;
    current_total_amount_str.innerText = update_current_total;
})