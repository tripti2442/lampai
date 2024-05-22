import React,{useState} from 'react';
import search from '../search.svg';
import mech from '../mech.jpg';
import comp from '../comp.avif';
import fin from '../fin.avif';
import quiz from '../quiz.png';
import code from '../code.jpg';
import product from '../product.jpg';
import cased from '../case.jpg';
import '../index.css'
import practice from '../practice2.svg'
import Coding from './Coding'

export default function Practice() {
  const [showAdditionalDiv, setShowAdditionalDiv] = useState(false);
  function myfunc2(){
      /*let ele=document.getElementById("expand");
      ele.innerHTML="<em>hi</em>";*/
      setShowAdditionalDiv(!showAdditionalDiv);
  }
  function myfunc(){
    
  }
  return (
    <div className="p-4 h-full overflow-y-auto">
      <p className="text-slate-400 font-bold font-serif">Let's Rock!</p>
      <p className="text-slate-400 font-mono">Practice regularly to achieve perfection</p>
      <div className="mt-4 flex items-center bg-white w-full p-2 rounded-xl">
        <button type="submit" className="bg-white p-2">
          <img src={search} alt="search icon" className="pl-2" />
        </button>
        <input type="text" className="pl-4 flex-grow border-0" style={{ boxShadow: 'none' }} placeholder="Search Problems" />
      </div>
      
      <p className="font-bold text-xl py-4">Exclusive Assessments</p>
      <div className="flex justify-around">
        <div className="w-54 bg-white rounded-2xl">
          <img src={mech} className="h-48 rounded-t-2xl" alt="Mechanical" />
          <p className="p-4 font-bold text-lg">
            <span>Mechanical</span><br />Engineering
          </p>
        </div>
        <div className="w-54 bg-white rounded-2xl">
          <img src={comp} className="h-48 rounded-t-2xl" alt="Computer" />
          <p className="p-4 font-bold text-lg">
            <span>Computer</span><br />Programming
          </p>
        </div>
        <div className="w-54 bg-white rounded-2xl">
          <img src={fin} className="h-48 rounded-t-2xl" alt="Financial" />
          <p className="p-4 font-bold text-lg">
            <span>Financial</span><br />Analysis
          </p>
        </div>
      </div>
      <p className="font-bold text-xl py-4">All Assessments</p>
      <div className="grid grid-cols-2 space-x-6 space-y-6 mr-6 ">
    
        <div className=" bg-white h-48 rounded-2xl ml-7 mt-6">
          <p className="p-4 font-bold text-lg">
            <span></span><br />Quizzes
          </p>
          <div className="assess flex bg-purple-300 p-4 rounded-b-2xl" style={{boxShadow:"0px 0px 2px #a21caf, 0 0 25px #f0abfc, 0 0 5px #f5d0fe" }}>
          <button id="read1" className="read ml-8 flex space-x-2" onClick={myfunc}><img src={practice} className='ml-1 mt-auto mb-2'></img><p>Practice</p></button>
          <img src={quiz} className="h-20 rounded-full ml-auto mr-6  " alt="quiz" />
          </div>
        </div>
        
        <div className=" bg-white h-48 rounded-2xl">
          <p className="p-4 font-bold text-lg">
            <span></span><br />Coding
          </p>
          <div className="assess flex bg-purple-300 p-4 rounded-b-2xl " style={{boxShadow:"0px 0px 2px #a21caf, 0 0 25px #f0abfc, 0 0 5px #f5d0fe" }}>
          <button id="read2" className="read ml-8 flex space-x-2" onClick={myfunc2}><img src={practice} className='ml-1 mt-auto mb-2'></img><p>Practice</p></button>
          <img src={code} className="h-20 w-20 rounded-full ml-auto mr-6 " alt="code" />
          </div>
        </div>
        {showAdditionalDiv && 
          <Coding/>
        }
        
        <div className=" bg-white h-48 rounded-2xl">
          <p className="p-4 font-bold text-lg">
            <span>Case</span><br />Study
          </p>
          <div className="assess flex bg-purple-300 p-4 rounded-b-2xl" style={{boxShadow:"0px 0px 2px #a21caf, 0 0 25px #f0abfc, 0 0 5px #f5d0fe" }}>
          <button id="read3" className="read ml-8 flex space-x-2" onClick={myfunc}><img src={practice} className='ml-1 mt-auto mb-2'></img><p>Practice</p></button>
          <img src={cased} className="h-20 rounded-full  ml-auto mr-6 " alt="case" />
          </div>
        </div>
        
        <div className=" bg-white h-48 rounded-2xl">
          <p className="p-4 font-bold text-lg">
            <span>Product</span><br />Teardown
          </p>
          <div className="assess flex bg-purple-300 p-4 rounded-b-2xl" style={{boxShadow:"0px 0px 2px #a21caf, 0 0 25px #f0abfc, 0 0 5px #f5d0fe" }}>
          <button id="read4" className="read ml-8 flex space-x-2" onClick={myfunc}><img src={practice} className='ml-1 mt-auto mb-2'></img><p>Practice</p></button>
          <img src={product} className="h-20 rounded-full ml-auto mr-6 " alt="product" />
          </div>
        </div>

      </div>
    </div>
  );
}
