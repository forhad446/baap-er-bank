const btn_deposit = document.getElementById('btn-deposit');
btn_deposit.addEventListener('click',function(){
    // take input value for deposit
    const depositMoney = document.getElementById('depositMoney');
    const deposit = parseFloat(depositMoney.value);
    
    // check the input value is NaN
    if(isNaN(deposit)){
        alert("something is else");
        depositMoney.value = '';
        return;
    }else if(deposit < 0){
        alert("minimum deposit required");
        depositMoney.value = '';
        return;
    }
    // take current deposit balance
    const current_deposit_amount = document.getElementById('current_deposit_amount');
    const currentDeposit = parseFloat(current_deposit_amount.innerText);
    // update deposit balance
    const updateDepositAmount = currentDeposit + deposit;
    current_deposit_amount.innerText = updateDepositAmount.toFixed(2);
    // clear the input box for set new value
    depositMoney.value = '';

    // current total amount
    const current_total_amount_str = document.getElementById('current_total_amount');
    const current_total_amount = parseFloat(current_total_amount_str.innerText);
    // update current total balance
    const update_current_total = current_total_amount + deposit;
    current_total_amount_str.innerText = update_current_total;

})