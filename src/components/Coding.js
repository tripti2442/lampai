import React from 'react'
import "../index.css"
import practice from '../practice2.svg'
import comp from '../comp.svg'
import code from '../code.svg'
import trivia from '../trivia.svg'

export default function Coding() {
  return (
    <>
    
    <div className="p-6 bg-white rounded-l-lg flex flex-col space-y-5" id="div1">
      <div className="w-full h-10 flex pl-4 bg-purple-300 ml-6 rounded-3xl"><img src={code} className="border-2 rounded-full bg-purple-500 w-8 p-1 mt-1 mb-1" ></img><p className="px-4 py-2 text-slate-500 font-bold">Coding Problems</p></div>
      <div className="w-full h-10 flex pl-4 bg-purple-300 ml-6 rounded-3xl"><img src={comp} className="border-2 rounded-full bg-purple-500 w-8 p-0.5 mt-1 mb-1"></img><p className="px-4 py-2 text-slate-500 font-bold">100 Days DSA Sprint</p></div>
      <div className="w-full h-10 flex pl-4 bg-purple-300 ml-6 rounded-3xl"><img src={practice} className="border-2 rounded-full bg-purple-500 w-8 p-0.5 mt-1 mb-1"></img><p className="px-4 py-2 text-slate-500 font-bold">Coding Assessments</p></div>
      <div className="w-full h-10 flex pl-4 bg-purple-300 ml-6 rounded-3xl"><img src={trivia} className="border-2 rounded-full bg-purple-500 w-8 p-0.5 mt-1 mb-1"></img><p className="px-4 py-2 text-slate-500 font-bold">Coding Trivia</p></div>
    </div>
    <div className="p-6 bg-white rounded-r-lg flex flex-col space-y-5" id="div2">
      <button className="w-[20vh] h-10 flex pl-4 ml-10 border-2 border-blue-600 rounded-3xl flex justify-center items-center"><p className="text-blue-700 font-semibold  font-serif  pr-4 ">Start Now</p></button>
      <button className="w-[20vh] h-10 flex pl-4 ml-10 border-2 border-blue-600 rounded-3xl flex justify-center items-center"><p className="text-blue-700 font-semibold  font-serif  pr-4 ">Start Now</p></button>
      <button className="w-[20vh] h-10 flex pl-4 ml-10 border-2 border-blue-600 rounded-3xl flex justify-center items-center"><p className="text-blue-700 font-semibold  font-serif  pr-4 ">Start Now</p></button>
      <button className="w-[20vh] h-10 flex pl-4 ml-10 border-2 border-blue-600 rounded-3xl flex justify-center items-center"><p className="text-blue-700 font-semibold  font-serif  pr-4 ">Start Now</p></button>
    </div>
    
    </>
  )
}
