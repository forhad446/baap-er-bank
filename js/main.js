const btn = document.getElementById('btn-submit');
btn.addEventListener('click',function(){
    const dbEmail = "forhad@gmail.com";
    const dbpwd = "forhad";

    const userEmail = document.getElementById('userEmail');
    const email = userEmail.value;
    const userPassword = document.getElementById('userPassword');
    const pwd = userPassword.value;
    
    if(email === dbEmail && pwd === dbpwd){
        window.location.href = 'bank.html';
    }else{
        alert('password or email is incorrect, please try Again.!')
    }
})