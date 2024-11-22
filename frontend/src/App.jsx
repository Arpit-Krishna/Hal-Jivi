import React from 'react';
import { create } from 'ipfs-http-client';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Customercare from './components/Customercare';
import User from './components/User';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
import Ecommerce from './components/Ecommerce';
import Emandi from './components/Emandi';
import MSP from './components/MSP';

const ipfsClient = create({ url: 'https://ipfs.infura.io:5001/api/v0' });
console.log('IPFS Client:', ipfsClient);

function App() {
    return (
        <div className="App" style={{ backgroundColor: '#121212', color: '#121212', minHeight: '100vh' }}>
            <Header />
            <BrowserRouter>
                <div style={{ padding: '20px' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/ecom' element={<Ecommerce />} />
                        <Route path='/emandi' element={<Emandi />} />
                        <Route path='/msp' element={<MSP />} />
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
