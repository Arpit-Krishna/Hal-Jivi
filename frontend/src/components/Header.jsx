import React from 'react';
import './Header.css';
import logo from './assets/logo.png';
import user from './assets/user.png';

const Header = () => {
  return (
    <div className="Navbar flex justify-between mx-2 my-1 rounded-3xl">
      <div className="flex items-center">
          <div className="">
            <img src={logo} className="h-10 mx-5 my-1" alt="Hal-Jivi"/>
          </div>
          <div className="">
            <a className="mx-1" href="/">Home</a>
            <a className="mx-1" href="/about">About</a>
            <a className="mx-1" href="/customercare">Customer Care</a>
          </div>
      </div>
      <div className="mx-5 flex items-center">
      <img src={user} className="h-8 mx-1.5 my-1" alt="user"/>
        <a href="/user" className="">User</a>
      </div>
    </div>
  );
};

export default Header;