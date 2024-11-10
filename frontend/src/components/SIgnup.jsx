import React, { useState, useEffect } from 'react';
import './style/Signup.css'; // Assuming your CSS is in the same directory
// import 'boxicons/css/boxicons.min.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '',
    inputImage: null,
  });

  const [signUpError, setSignUpError] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('hello from custom event handle', e);

    const { firstName, lastName, contact, email, password, confirmPassword, inputImage } = formData;

    console.log(firstName, lastName, contact, email, password, confirmPassword, inputImage);

    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } 
    else {
      let authData = JSON.parse(localStorage.getItem('auth')) || [];
      let userFound = false;
      for (let userObj of authData) {
        if (userObj.number === contact) {
          alert('Phone Number already exists. Please Sign In instead');
          userFound = true;
    
        } 
        else if (userObj.email === email) {
          alert('Email already exists. Please Sign In instead');
          userFound = true;
        }
      }
      if (!userFound) {
        const userDetails = {
          'number' : contact,
          'email' : email,
          'password' : password,
        };
        authData.push(userDetails);
        localStorage.setItem('auth', JSON.stringify(authData));
        setFormData({
          firstName: '',
          lastName: '',
          contact: '',
          email: '',
          password: '',
          confirmPassword: '',
          inputImage: null,
        });
        // window.location.href = 'index.html';
      }
    }
  };

  useEffect(() => {
    const form = document.getElementById('signup-form-container-id');
    form.addEventListener('submit', submitHandler);
    return () => {
      form.removeEventListener('submit', submitHandler);
    };
  }, []);

  return (
    <div className='signup'>
        <div className="register">
            <h1>REGISTER</h1>
            <form className="signup-form-container" id="signup-form-container-id" onSubmit={submitHandler}>
                <div className="input-box">
                    <input type="text" placeholder="First Name" name="firstName" id='first_name' value={formData.firstName} onChange={handleChange} required />
                    <input type="text" placeholder="Last Name" name="lastName" id='last_name' value={formData.lastName} onChange={handleChange} required />
                </div>

                <div className="contact-box">
                    <div className="container">
                        <div id="sender">
                          <input type="tel" placeholder="Phone Number" name="contact" id="contact" value={formData.contact} onChange={handleChange} required />
                          <i className="bx bxs-phone"></i>
                          <div id="recaptcha-container"></div>
                          <input type="button" id="send" value="Send" />
                        </div>
                        <div id="verifier" style={{ display: 'none' }}>
                          <input type="text" id="verificationcode" placeholder="OTP Code" />
                          <input type="button" id="verify" value="Verify" />
                          <div className="p-conf">Number Verified</div>
                          <div className="n-conf">OTP Error</div>
                        </div>
                    </div>
                </div>

                <div className="input-box">
                <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                <i className="bx bxs-envelope"></i>
                </div>
                <div className="input-box">
                <input type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} required />
                <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="input-box">
                <input type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="imageInput">
                <h4 id="tex">Profile Picture: </h4>
                <label htmlFor="img">Upload</label>
                <input type="file" accept="image/*" id="img" name="inputImage" onChange={handleChange} required />
                </div>
                <button type="submit" className="signup-btn" id="signup-btn">Register</button>

                <div id="sign_up_error">{signUpError}</div>

                <div className="back-login">
                <a>Have already an account ?</a>
                <a href="/login">Login here</a>
                </div>
            </form>
        </div>
    </div>
  );
}

export default SignUp;
