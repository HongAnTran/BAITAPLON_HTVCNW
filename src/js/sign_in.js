const inputEmail = document.getElementById('customer_email');

if (inputEmail){
    inputEmail.addEventListener('blur', function(e) {

        const email = e.target.value;
        const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailReg.test(email) && email.length > 0){
            document.getElementById('customer_email').classList.remove('error');
            document.querySelector('.message-error').style.display = 'none';
          
        }
        else{
            document.getElementById('customer_email').classList.add('error');
            document.querySelector('.message-error').style.display = 'block';
        }
    
    })
}


const inputEmailRegister = document.getElementById('customer_email-register');

if(inputEmailRegister){
    inputEmailRegister.addEventListener('blur', function(e) {

        const email = e.target.value;
        const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailReg.test(email) && email.length > 0){
            document.getElementById('customer_email').classList.remove('error');
            document.querySelector('.message-error').style.display = 'none';
          
        }
        else{
            document.getElementById('customer_email').classList.add('error');
            document.querySelector('.message-error').style.display = 'block';
        }
    
    })
    
}
