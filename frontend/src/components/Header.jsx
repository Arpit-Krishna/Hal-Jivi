import React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import user from './assets/user.png';

const Header = () => {
  return (
    <div className="Navbar flex justify-between mx-3 my-4 rounded-3xl">
      <div className="flex items-center">
          <div className="">
            <a href='/'> 
            <img src={logo} className="h-10 mx-5 my-1" alt="Hal-Jivi"/>
            </a>
          </div>
          <div className="">
            <a className="mx-2" href="/">Home</a>
            <a className="mx-2" href="/ecom">E-Commerce</a>
            <a className="mx-2" href="/about">About</a>
            <a className="mx-2" href="/customercare">Customer Care</a>
          </div>
      </div>
      <div className="mx-5 flex items-center">
      <a href='/user'>
      <img src={user} className="h-8 mx-1.5 my-1" alt="user"/></a>
        <a href="/user" className="">User</a>
      </div>
    </div>
  );
};

export default Header;