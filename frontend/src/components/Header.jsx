// import React from 'react';
// import './Header.css';
// import logo from './assets/logo.png';
// import user from './assets/user.png';
// import search from './assets/search.gif';

// const Header = () => {
//   return (
//     <div className="Navbar flex justify-between mx-3 my-4 rounded-3xl">
//       <div className="flex items-center">
//           <div className="">
//             <a href='/'> 
//             <img src={logo} className="h-10 mx-5 my-1" alt="Hal-Jivi"/>
//             </a>
//           </div>
//           <div className="">
//             <a className="mx-2" href="/">Home</a>
//             {/* <a className="mx-2" href="/ecom">E-Commerce</a> */}
//             <a className="mx-2" href="/about">About</a>
//             <a className="mx-2" href="/customercare">Customer Care</a>
//           </div>
//       </div>
//       <div className="mx-5 flex items-center">
//         <div>
//           <input className="Search_box color-black mx-1 my-2 px-1 py-1 rounded-lg" type="text" placeholder=" Search " name="" id="" />
//           <button className="bg-transparent hover:bg-yellow-300 font-bold py-2 px-2 my-1 mx-1 rounded-full"><img src={search} alt="Search"/></button>
//         </div>
//       <a href='/user'>
//       <img src={user} className="h-8 mx-1.5 my-1" alt="user"/></a>
//         <a href="/user" className="">User</a>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import './style/Header.css';
import logo from './assets/logo.png';
import user from './assets/user.png';
import search from './assets/search.gif';

const Header = () => {
  return (
    <div className="Navbar flex justify-between items-center mx-3 my-3 px-4 rounded-3xl bg-gray-800 shadow-lg">
      <div className="flex items-center">
        <div>
          <a href='/'> 
            <img src={logo} className="h-10 mx-5" alt="Hal-Jivi" />
          </a>
        </div>
        <div className="text-white">
          <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/">Home</a>
          <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/ecom">E-Commerce</a>
          <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/emandi">E-Mandi</a>
          <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/about">About</a>
          <a className="mx-2 hover:text-[#00adb5] transition-colors" href="/customercare">Customer Care</a>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <input 
            className="Search_box bg-gray-700 text-white placeholder-gray-400 mx-1 my-2 px-2 py-1 rounded-lg border border-gray-600 focus:outline-none focus:ring focus:ring-[#00adb5]" 
            type="text" 
            placeholder="Search" 
          />
          <button className="absolute right-0 top-0 mt-2 mr-2 bg-transparent hover:bg-[#00adb5] rounded-full p-1">
            <img src={search} alt="Search" className="h-6" />
          </button>
        </div>
        <a href='/user' className="flex items-center text-white mx-2">
          <img src={user} className="h-8" alt="User" />
          <span className="ml-1 hover:text-[#00adb5] transition-colors">User</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
