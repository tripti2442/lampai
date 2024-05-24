import React, { useState } from 'react';
import company_logo from '../company_logo.png';
/*import '../App.css';*/
import bell from '../bell.svg';
import acc from '../acc.svg';
import menu from '../menu.svg';
import NavbarMobile from './NavbarMobile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Navbar';
import Blank from './Blank';
import Practicepage from './Practicepage';
import PracticepageMobile from './PracticepageMobile';

export default function TopbarMobile() {
  const [showMenu, setShowMenu] = useState(false);

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div className=' topbar bg-white flex items-center px-6 py-3'>
        <div className='left flex items-center space-x-3 justify-start'>
          <img id='company_logo' className='w-10 h-10' src={company_logo} alt="Company Logo" />
          <p className='font-bold'>
            <span className='text-purple-600 text-3xl'>wiZ</span>
            <span className='text-black text-3xl'>e</span>
          </p>
        </div>
        <div className='right flex items-center space-x-2 justify-center ml-auto'>
          <img id='bell' className='border-2 border-purple-600 rounded-3xl p-2 hover:bg-purple-100 cursor-pointer' src={bell} alt="bell Logo" />
          <img className='border-2 border-purple-600 rounded-3xl p-2 hover:bg-purple-100 cursor-pointer' id='acc_logo' src={acc} alt="Account Logo" />
          <button onClick={handleMenuClick}><img className='border-2 border-purple-600 rounded-3xl p-2 hover:bg-purple-100 cursor-pointer' id='menu_logo' src={menu} alt="Menu Logo" /></button>
        </div>
      </div>
      <hr />
      {showMenu && (
        
          
            <NavbarMobile />
            
             
      )}
    </>
  );
}
