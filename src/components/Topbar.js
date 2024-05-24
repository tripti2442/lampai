import React from 'react';
import company_logo from '../company_logo.png';
/*import '../App.css';*/
import bell from '../bell.svg';
import acc from '../acc.svg';
import menu from '../menu.svg';

export default function Topbar() {
  return (
    <>
    
    <div className='topbar bg-white flex items-center px-6 py-3'>
    <div className='left flex items-center space-x-3 justify-start'>
      <img id='company_logo' className='w-10 h-10' src={company_logo} alt="Company Logo" />
      <p className='font-bold'>
        <span className='text-purple-600 text-3xl'>wiZ</span>
        <span className='text-black text-3xl'>e</span>
      </p>
    </div>
    <div className='right flex items-center space-x-5  justify-center ml-auto'>
      <img id='bell' className='border-2 border-purple-600 rounded-3xl p-2 hover:bg-purple-100 cursor-pointer ' src={bell} alt="bell Logo" />
      <button className='w-32 flex items-center justify-around space-x-3 border-2 border-purple-600 rounded-3xl p-2 hover:bg-purple-100'><span id='account' className="font-serif  " >Account</span><span ><img className='border-2 border-purple-600 rounded-3xl p-1' id='acc_logo' src={acc} alt="Account Logo" /></span></button>
      <button className='w-32 flex items-center justify-around space-x-3 border-2 border-purple-600 rounded-3xl p-2.5 hover:bg-purple-100'><span id='menu'  className="font-serif  ">Menu</span><span><img id='menu_logo' src={menu} alt="Menu Logo" /></span></button>
    </div>
    </div>
    <hr></hr>
    </>
  );
}
