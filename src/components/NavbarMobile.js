import React from 'react'
import home from "../home.svg"
import explore from "../explore.svg"
import learn from "../learn.svg"
import achieve from "../achieve.svg"
import practice from "../practice.svg"
import projects from "../projects.svg"
import career from "../career.svg"
import mentorship from "../mentorship.svg"
import blogs from "../blogs.svg"
import community from "../community.svg"
import insta from "../insta.webp"
import youtube from "../youtube.webp"
import linkedin from "../linkedin.png"
import whatsapp from "../whatsapp.jpg"
import discord from "../discord.png"
import { Link ,Navigate } from "react-router-dom";
import "../index.css";
import Blank from './Blank';
import PracticepageMobile from './PracticepageMobile';

export default function NavbarMobile() {
  const [goToBlank, setGoToBlank]=React.useState(false);
  const [goToPractice, setGoToPractice]=React.useState(false);
  if(goToBlank){
    return <Blank/>
    /*return <Navigate to="/blank"/>;*/
  }
  if(goToPractice){
    return <PracticepageMobile/>
    /*return <Navigate to="/practice"/>;*/
  }

  
  return (
    <div className="w-[100vw] h-[90vh] border-r-4 ">
      <ul className="px-4 py-4">
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl " onClick={()=>{setGoToBlank(true)}}><img src={home} className="mt-1.5"></img><p>Home</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={explore} className="mt-1.5"/><p>Explore</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={learn} className="mt-1.5"/><p>Learn</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={achieve} className="mt-1.5"/><p>Achieve</p></button>
        <button id="prac" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToPractice(true)}}><img src={practice} className="mt-1.5"/><p>Practice</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={projects} className="mt-1.5"/><p>Projects</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={career} className="mt-1.5"/><p>Career</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={mentorship} className="mt-1.5"/><p>Mentorship</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={blogs} className="mt-1.5"/><p>Blogs</p></button>
        <button className="blank search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={()=>{setGoToBlank(true)}}><img src={community} className="mt-1.5"/><p>Community</p></button>
      </ul>
     
      <div className="bg-purple-200 mx-2 rounded-3xl">
      <div className='text-center font-semibold'>Connect with us</div>
      <div className="flex space-x-2 mt-3 p-2 pb-0 justify-center">
        <button className="w-8 h-8 mx-1"><img src={whatsapp}></img></button>
        <button className="w-8 h-8"><img src={linkedin}></img></button>
        <button className="w-8 h-8"><img src={insta}></img></button>
        <button className="w-10 h-10"><img src={discord}></img></button>
        <button className="w-10 h-10"><img src={youtube}></img></button>
        </div>
      </div>
    </div>
  )
}
