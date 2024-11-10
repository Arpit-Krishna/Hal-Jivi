// import React from 'react';
// import './App.css';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Header from './components/Header';
// // import Home from './components/Home';
// import Ecommerce from './components/Ecommerce';
// import About from './components/About';
// import Customercare from './components/Customercare';
// import User from './components/User';
// import Signup from './components/SIgnup';
// import Login from './components/Login';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <BrowserRouter>               
//            <Routes>        
//               <Route path ='/' element ={<Ecommerce/>} />        
//               <Route path ='/about' element ={<About/>} />      
//               <Route path ='/customercare' element ={<Customercare/>} />    
//               <Route path ='/user' element ={<User/>} /> 
//               <Route path ='/Login' element ={<Login/>}/>   
//               <Route path ='/Signup' element ={<Signup/>}/>
//             </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Ecommerce from './components/Ecommerce';
// import About from './components/About';
// import Customercare from './components/Customercare';
// import User from './components/User';
// import Signup from './components/Signup';
// import Login from './components/Login';

// function NotFound() {
//     return (
//         <div style={{ textAlign: 'center', color: '#ffffff', padding: '50px', backgroundColor: '#1c1c1e', minHeight: '100vh' }}>
//             <h1>404 - Not Found</h1>
//             <p>The page you are looking for does not exist.</p>
//         </div>
//     );
// }

// function App() {
//     return (
//         <div className="App" style={{ backgroundColor: '#1c1c1e', color: '#ffffff', minHeight: '100vh' }}>
//             <Header />
//             <BrowserRouter>
//                 <div style={{ padding: '20px' }}>
//                     <Routes>
//                         <Route path='/' element={<Ecommerce />} />
//                         <Route path='/about' element={<About />} />
//                         <Route path='/customercare' element={<Customercare />} />
//                         <Route path='/user' element={<User />} />
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/signup' element={<Signup />} />
//                         <Route path='*' element={<NotFound />} />
//                     </Routes>
//                 </div>
//             </BrowserRouter>
//         </div>
//     );
// }
// export default App;



// window.process = {
//     env: {
//         NODE_ENV: 'development'
//     }
// };
// import React from 'react';
// import { create } from 'ipfs-http-client';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Ecommerce from './components/Ecommerce';
// import About from './components/About';
// import Customercare from './components/Customercare';
// import User from './components/User';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Footer from './components/Footer';
// function App() {
//     return (
//         <div className="App" style={{ backgroundColor: '#181818', color: '#ffffff', minHeight: '100vh' }}>
//             <Header />
//             <BrowserRouter>
//                 <div style={{ padding: '20px' }}>
//                     <Routes>
//                         <Route path='/' element={<Ecommerce />} />
//                         <Route path='/about' element={<About />} />
//                         <Route path='/customercare' element={<Customercare />} />
//                         <Route path='/user' element={<User />} />
//                         <Route path='/login' element={<Login />} />
//                         <Route path='/signup' element={<Signup />} />
//                     </Routes>
//                 </div>
//             </BrowserRouter>
//             <Footer /> {}
//         </div>
//     );
// }
// export default App;

import React from 'react';
import { create } from 'ipfs-http-client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Customercare from './components/Customercare';
import User from './components/User';
import Signup from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Ecommerce from './components/Ecommerce';
import Emandi from './components/Emandi';

const ipfsClient = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
console.log('IPFS Client:', ipfsClient);

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#181818', color: '#ffffff', minHeight: '100vh' }}>
            <Header />
            <BrowserRouter>
                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/ecom' element={<Ecommerce />} />
                        <Route path='/emandi' element={<Emandi />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/customercare' element={<Customercare />} />
                        <Route path='/user' element={<User />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
