import './App.css';
import React, {useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Blank from './components/Blank';
import Right from './components/Right';
import Practicepage from './components/Practicepage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopbarMobile from './components/TopbarMobile';
import Frontpage from './components/Frontpage';

function App() {
  const [isLaptop, setIsLaptop]=useState(window.innerWidth>=768);
  useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isLaptop ? <Topbar /> : <TopbarMobile />}
      {isLaptop ?
      <BrowserRouter>
        <div className="flex h-[90vh]">
        
          <Navbar />
          <div className="flex-1 ">
            <Routes>
              <Route path="/" element={<Blank />} />
              <Route path="/blank" element={<Blank />} />
              <Route path="/practice" element={<Practicepage />} />
              
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      :""}
    </>
  );
}

export default App;
