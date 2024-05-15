import React from 'react';
import './style/Header.css';
import logo from './assets/logo.png';
import user from './assets/user.png';
import search from './assets/search.gif';

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
            {/* <a className="mx-2" href="/ecom">E-Commerce</a> */}
            <a className="mx-2" href="/about">About</a>
            <a className="mx-2" href="/customercare">Customer Care</a>
          </div>
      </div>
      <div className="mx-5 flex items-center">
        <div>
          <input className="Search_box color-black mx-1 my-2 px-1 py-1 rounded-lg" type="text" placeholder=" Search " name="" id="" />
          <button className="bg-transparent hover:bg-yellow-300 font-bold py-2 px-2 my-1 mx-1 rounded-full"><img src={search} alt="Search"/></button>
        </div>
      <a href='/user'>
      <img src={user} className="h-8 mx-1.5 my-1" alt="user"/></a>
        <a href="/user" className="">User</a>
      </div>
    </div>
  );
};

export default Header;