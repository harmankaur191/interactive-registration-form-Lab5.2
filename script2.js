const usernameInput = document.getElementById('username');
const email = document.getElementById('email');
const password =document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.getElementById('submitBtn');
const signupForm = document.getElementById('signupForm');
const formGroupSignUp = document.getElementsByClassName('form-group-signup');
const passwordCheckBox = document.getElementById('show-password');
let storedUsername;



usernameInput.addEventListener('input',function(event){
    event.preventDefault();
        if(!validField(usernameInput)){
            console.log("False")
            return
        }else{
             console.log("True")
           
            storedUsername = usernameInput.value;
             console.log(storedUsername);
            return
        }

});

email.addEventListener('input',function(event){
    event.preventDefault();
    if(!validField(email)){
        return
    }
});

password.addEventListener('input',function(event){
    event.preventDefault();
    if(!validField(password)){

        return
    }
});

//console.log(password.value);
confirmPassword.addEventListener('input',function(event){
    event.preventDefault();
    if(password.value!==this.value){
        console.log(password.value);
        const errorConfirmPassword = this.nextElementSibling;
        errorConfirmPassword.textContent = "Password does not Match";
        confirmPassword.classList.remove ('valid');
        confirmPassword.classList.add('invalid')
        return
    }else{
        const errorConfirmPassword = this.nextElementSibling;
        errorConfirmPassword.textContent = ""
        console.log("Passwords Match");
        confirmPassword.classList.remove ('invalid');
        confirmPassword.classList.add('valid')
    }

});

passwordCheckBox.addEventListener('click',function(event){
    showPassword(event);

});


signupForm.addEventListener('input',(event)=>{
    event.preventDefault();
    
    

});


function validField(targetInput){
    if(!targetInput.validity.valid || targetInput.validity.valueMissing){
        const valid_error = targetInput.nextElementSibling;

        valid_error.textContent = targetInput.validationMessage; 
        targetInput.classList.remove("valid");
        targetInput.classList.add("invalid");
        targetInput.focus();
    
        return false
        
    }else{
        console.log("no error.");
         const valid_error = targetInput.nextElementSibling;

        valid_error.textContent = targetInput.validationMessage; 
        targetInput.classList.remove("invalid");
        targetInput.classList.add("valid");
        targetInput.nextSibling.textContent = "";

        return true
    }
}

function showPassword(event){
    if(password.type==='password'){
        
        password.type="text";
        console.log(password.type);
    
    }
    else{
        password.type="password";
        console.log(password.type);
    }
}


submitBtn.addEventListener('click',submitFormFn)

function submitFormFn(event){
    event.preventDefault();
    console.log("sumbit button");
  //  let storedUsername = localStorage.getItem("username");
    if(localStorage.getItem("username")===null){
        localStorage.clear();
        console.log("sumbit button");
        console.log(usernameInput.value);
        localStorage.setItem('username',usernameInput.value);
       signupForm.reset();
    }else{
        console.log("Loading username from storage:", localStorage.getItem('username'))
        usernameInput.value=localStorage.getItem("username");
        return
    }
};

document.addEventListener('DOMContentLoaded',()=>{

    const savedName = localStorage.getItem('username');
    if(savedName){
        console.log("Found name:",savedName);
        const user=document.getElementById('username');
        user.value = savedName;
    }else{
        console.log("No name found in localStorage.")
    }

});