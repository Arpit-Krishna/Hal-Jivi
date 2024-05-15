import React from 'react'
// import Header from './Header'
import './style/Login.css'

export default function Login() {
    function renderError(message){
        document.getElementById('sign_in_error').innerHTML = message;
    }
    
    function submitHandler(e){
        e.preventDefault();
        console.log('hello from custom event handler',e);
    
        const email = document.getElementById('sign_in_email').value;
        const password = document.getElementById('sign_in_password').value;
    
        console.log(email,password);
    
        const authData = JSON.parse(localStorage.getItem('auth')) || [];
    
        let userFound = false;
        let password_from_auth='';
        for (const userObj of authData){
            if (userObj.email === email){
                userFound = true;
                password_from_auth = userObj.password;
            }
            else if (userObj.number === email){
                userFound = true;
                password_from_auth = userObj.password;
            }
        }
        if (!userFound){
            alert("Email or Phone Number not found. Please SignUp first");
            return;
        }
        if (password != password_from_auth){
            alert("Incorrect password. Please try again");
        }
        else{
            localStorage = localStorage.setItem
        }
        const phoneInputField = document.querySelector("#contact");
        const phoneInput = window.intlTelInput(phoneInputField, {
            utilsScript:"https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
    
        
    
        console.log("Entered email:", email);
        console.log("Entered password:", password);
    
    }

    return (
        <div className='login'>
        <div className="wrapper">
        <form className="login-form-container" id="login-form-container-id">
            
            <h1>Login</h1>
            <div className="input-box">
                <input type='text' placeholder="Email or Phone Number" for="sign_in_email" 
                name="sign_in_email" id="sign_in_email" required/>
                <i className='bx bxs-user'></i>
            </div>
            <div className="input-box">
                <input type='password' placeholder="Password" for="sign_in_password" 
                name="sign_in_password" id="sign_in_password" required/>
                <i className='bx bxs-lock-alt' ></i>
            </div>
            <button type='submit' onClick={(e)=>submitHandler(e)} className="btn" id="login-btn">Login</button>

            <div id="sign_in_error"></div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forget password?</a>
            </div>
            
            <div className="register-link">
                <p>Don't have an account? <a href='/signup'>Register</a></p>
            </div>
        </form>
    </div>
    </div>

    )
}
