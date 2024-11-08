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

    const isUserLogged = localStorage.getItem('isUserLogged');
    if (isUserLogged === true) window.location.href = '/user';
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Get the email and password from the input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Authenticate the email and password with the local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);
        
        if (user) {
            // Set the user logged flag and current user in local storage
            localStorage.setItem('isUserLogged', true);
            localStorage.setItem('currentUser', JSON.stringify(user));
            
            // Redirect to the home page or perform any other action
            window.location.href = '/';
        } else {
            // Display an error message or perform any other action
            alert('Invalid email or password');
        }
    }
    
    return (
        <div>
            <div className='h-screen flex justify-center items-center -mt-16'>
                <form onSubmit={handleLogin} className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96'>
                    <div className='text-4xl flex justify-center w-full m-2'>Welcome Back!</div>
                    <div className='flex justify-center text-xl text-gray-300 m-5'>Login to access your account</div>
                    <label className='flex flex-col w-full p-1 -my-5' >
                        {/* <p className='text-xl flex justify-start text-white'>Health ID:</p> */}
                        <input type='email' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' id = 'email' placeholder='Enter your email ' />
                        {/* <input type='number' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter 8 digit Health ID ' /> */}
                    </label>
                    {/* <label className='flex flex-col w-full p-1 -my-5'>
                         <p className='text-xl flex justify-start text-white'>Phone Number:</p>
                        <input type='number' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter phone' />
                    </label> */}
                    <label className='flex flex-col w-full p-1 -my-5'>
                        {/* <p className='text-xl flex justify-start text-white'>Password:</p> */}
                        <input type='password' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' id = 'password' placeholder='Enter password' />
                    </label>
                    <div className='flex justify-center'>
                        <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                            <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
                            </div>
                        </button>
                    </div>
                    <div type = "submit" className='flex justify-center p-3'><span>Not a member?</span><a href='/Signup' className='text-indigo-800 hover:underline'>Signup Here</a></div>


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
