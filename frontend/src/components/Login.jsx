import React from 'react'
// import Header from './Header'


export default function Login() {
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

                </form>
            </div>
        </div>

    )
}
