import React from 'react';
import rect from '../rect.svg';
import "../index.css"

export default function Image() {
    const images = Array(30).fill(rect); 
    const images2 = Array(31).fill(rect); 

    return (
      <div className="flex-col w-full ml-auto mt-0 border-2 rounded-xl px-6 bg-white mt-4">
      <div><p className='font-semibold text-2xl pt-4'>Apr 2024 - Jun 2024</p></div>
      <div className='flex gap-10'>
      <div  className="leet grid grid-cols-5 grid-rows-6 gap-2 h-40 w-30 pt-4 pb-4 " >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <div className="leet grid grid-cols-5 grid-rows-6 gap-2 h-44 w-30 pt-4 pb-4">
        {images2.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        ))}
      </div>
      <div className="leet grid grid-cols-5 grid-rows-6 gap-2 h-40 w-30 pt-4 pb-4">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
        ))}
        </div>
      </div>
  <div className="flex gap-1 items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#86efac" className="bi bi-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#22c55e" className="bi bi-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#16a34a" className="bi bi-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
  </svg>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#14532d" className="bi bi-square-fill" viewBox="0 0 16 16">
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
  </svg>
  <p className="font-serif text-slate-500 pl-2">Questions</p>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#22c55e" className="bi bi-star-fill ml-6 border-2 rounded-md" style={{padding:'1px'}} viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
  <p className="font-serif text-slate-500 pl-2">POTD question</p>
 </div>
 <div className="flex gap-4 items-center mt-4 pb-2">
  <p className="font-serif text-slate-500 text-sm">Current Streak: <span className='text-black font-semibold'>0</span></p>
  <p className="font-serif text-slate-500 text-sm">Max Streak: <span className='text-black font-semibold'>0</span></p>
  <p className="font-serif text-slate-500 text-sm">Global Max Streak: <span className='text-black font-semibold'>25</span></p>
 </div>

      </div>
    );
}
