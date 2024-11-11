// import React from 'react'
// // import Header from './Header'


// export default function Login() {
//     const isUserLogged = localStorage.getItem('isUserLogged');
//     if (isUserLogged === true) window.location.href = '/user';
//     const handleLogin = (e) => {
//         e.preventDefault();
        
//         // Get the email and password from the input fields
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
        
//         // Authenticate the email and password with the local storage
//         const users = JSON.parse(localStorage.getItem('users')) || [];
//         const user = users.find((user) => user.email === email && user.password === password);
        
//         if (user) {
//             // Set the user logged flag and current user in local storage
//             localStorage.setItem('isUserLogged', true);
//             localStorage.setItem('currentUser', JSON.stringify(user));
            
//             // Redirect to the home page or perform any other action
//             window.location.href = '/';
//         } else {
//             // Display an error message or perform any other action
//             alert('Invalid email or password');
//         }
//     }
    
//     return (
//         <div>
//             <div className='h-screen flex justify-center items-center -mt-16'>
//                 <form onSubmit={handleLogin} className='backdrop-blur bg-cyan-700/50 p-4 rounded-xl w-96'>
//                     <div className='text-4xl flex justify-center w-full m-2'>Welcome Back!</div>
//                     <div className='flex justify-center text-xl text-gray-300 m-5'>Login to access your account</div>
//                     <label className='flex flex-col w-full p-1 -my-5' >
//                         {/* <p className='text-xl flex justify-start text-white'>Health ID:</p> */}
//                         <input type='email' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' id = 'email' placeholder='Enter your email ' />
//                         {/* <input type='number' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter 8 digit Health ID ' /> */}
//                     </label>
//                     {/* <label className='flex flex-col w-full p-1 -my-5'>
//                          <p className='text-xl flex justify-start text-white'>Phone Number:</p>
//                         <input type='number' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' placeholder='Enter phone' />
//                     </label> */}
//                     <label className='flex flex-col w-full p-1 -my-5'>
//                         {/* <p className='text-xl flex justify-start text-white'>Password:</p> */}
//                         <input type='password' className='w-full rounded-md h-12 border border-gray-600 placeholder:text-gray-600 p-2' id = 'password' placeholder='Enter password' />
//                     </label>
//                     <div className='flex justify-center'>
//                         <button className="relative mt-5 flex justify-center items-center border border-cyan-500 w-48 py-2 text-xl overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
//                             <span className="w-48 h-64 rounded rotate-[-40deg] bg-cyan-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-16 group-hover:ml-8 group-hover:mb-32 group-hover:translate-x-0"></span>
//                             <div><span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Login</span>
//                             </div>
//                         </button>
//                     </div>
//                     <div type = "submit" className='flex justify-center p-3'><span>Not a member?</span><a href='/Signup' className='text-indigo-800 hover:underline'>Signup Here</a></div>

//                 </form>
//             </div>
//         </div>

//     )
// }



// import React, { useState } from 'react';

// export default function Login() {
//   const isUserLogged = localStorage.getItem('isUserLogged');
//   if (isUserLogged === 'true') window.location.href = '/user';

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
    
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find((user) => user.email === email && user.password === password);
    
//     if (user) {
//       localStorage.setItem('isUserLogged', true);
//       localStorage.setItem('currentUser', JSON.stringify(user));
//       window.location.href = '/';
//     } else {
//       setErrorMessage('Invalid email or password');
//     }
//   };

//   const styles = {
//     container: {
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#1c1c1e',
//     },
//     form: {
//       backdropFilter: 'blur(10px)',
//       backgroundColor: 'rgba(0, 131, 143, 0.5)',
//       padding: '20px',
//       borderRadius: '16px',
//       width: '400px',
//       color: '#ffffff',
//     },
//     title: {
//       fontSize: '2rem',
//       textAlign: 'center',
//       marginBottom: '10px',
//       color: '#ffffff',
//     },
//     subtitle: {
//       textAlign: 'center',
//       fontSize: '1.25rem',
//       color: '#d1d5db',
//       marginBottom: '20px',
//     },
//     input: {
//       width: '100%',
//       height: '40px',
//       margin: '10px 0',
//       padding: '10px',
//       borderRadius: '8px',
//       border: '1px solid #4b5563',
//       backgroundColor: '#1f2937',
//       color: '#ffffff',
//     },
//     buttonContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       marginTop: '20px',
//     },
//     button: {
//       position: 'relative',
//       padding: '10px 20px',
//       fontSize: '1.25rem',
//       fontWeight: 'bold',
//       borderRadius: '8px',
//       border: '1px solid #00adb5',
//       backgroundColor: '#ffffff',
//       color: '#1c1c1e',
//       overflow: 'hidden',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//     },
//     buttonHoverSpan: {
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       backgroundColor: '#00adb5',
//       top: 0,
//       left: '-100%',
//       transform: 'rotate(-45deg)',
//       transition: 'all 0.5s ease',
//     },
//     buttonHoverText: {
//       color: '#ffffff',
//     },
//     signup: {
//       textAlign: 'center',
//       marginTop: '10px',
//       color: '#ffffff',
//     },
//     signupLink: {
//       color: '#4f46e5',
//       textDecoration: 'underline',
//       cursor: 'pointer',
//     },
//     error: {
//       color: 'red',
//       textAlign: 'center',
//       marginBottom: '10px',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleLogin} style={styles.form}>
//         <div style={styles.title}>Welcome Back!</div>
//         <div style={styles.subtitle}>Login to access your account</div>
//         {errorMessage && <div style={styles.error}>{errorMessage}</div>}
//         <input
//           type="email"
//           value={email}
//           placeholder="Enter your email"
//           style={styles.input}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <div style={{ position: 'relative' }}>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             value={password}
//             placeholder="Enter password"
//             style={styles.input}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '10px', top: '10px' }}>
//             {showPassword ? 'Hide' : 'Show'}
//           </button>
//         </div>
//         <div style={styles.buttonContainer}>
//           <button
//             type="submit"
//             style={styles.button}
//             className="login-button"
//           >
//             <span
//               style={styles.buttonHoverSpan}
//               className="login-button-hover"
//             ></span>
//             <span className="login-button-text" style={styles.buttonHoverText}>
//               Login
//             </span>
//           </button>
//         </div>
//         <div style={styles.signup}>
//           <span>Not a member? </span>
//           <a href="/Signup" style={styles.signupLink}>Signup Here</a>
//         </div>
//       </form>
//     </div>
//   );
// }



import React, { useState } from 'react';

export default function Login() {
  const isUserLogged = localStorage.getItem('isUserLogged');
  if (isUserLogged === 'true') window.location.href = '/user';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);
    
    if (user) {
      localStorage.setItem('isUserLogged', true);
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = '/';
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1c1c1e',
    },
    form: {
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(32, 34, 36, 0.8)',
      padding: '25px',
      borderRadius: '15px',
      width: '350px',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    },
    title: {
      fontSize: '2rem',
      textAlign: 'center',
      marginBottom: '15px',
      color: '#00adb5',
    },
    subtitle: {
      textAlign: 'center',
      fontSize: '1.1rem',
      color: '#d1d5db',
      marginBottom: '25px',
    },
    input: {
      width: '100%',
      padding: '12px',
      margin: '12px 0',
      borderRadius: '8px',
      border: '1px solid #00adb5',
      backgroundColor: '#333',
      color: '#ffffff',
    },
    passwordToggle: {
      position: 'absolute',
      right: '15px',
      top: '13px',
      cursor: 'pointer',
      color: '#00adb5',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '30px',
    },
    button: {
      position: 'relative',
      padding: '12px 25px',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#00adb5',
      color: '#1c1c1e',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    signup: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#d1d5db',
    },
    signupLink: {
      color: '#00adb5',
      fontWeight: 'bold',
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.title}>Welcome Back!</div>
        <div style={styles.subtitle}>Login to access your account</div>
        {errorMessage && <div style={styles.error}>{errorMessage}</div>}
        <input
          type="email"
          value={email}
          placeholder="Enter your email"
          style={styles.input}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            placeholder="Enter password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className = 'my-3'
            style={styles.passwordToggle}
          >
            {showPassword ? 'Hide' : 'Show'}
          </span>
        </div>
        <div style={styles.buttonContainer}>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </div>
        <div style={styles.signup}>
          <span>Not a member? </span>
          <a href="/Signup" style={styles.signupLink}>Signup Here</a>
        </div>
      </form>
    </div>
  );
}
