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
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar() {
  function myfunc(event) {
    const links = document.querySelectorAll(".search");
    const clickedLink = event.currentTarget;
  
    links.forEach(link => {
      if (link === clickedLink) {
        link.style.color = "#a855f7"; 
      } else {
        
        link.style.color = ""; 
      }
    });
  }
  return (
    <div className="w-56 h-[90vh] border-r-4 ">
      <ul className="px-4 py-4">
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl " onClick={myfunc}><img src={home} className="mt-1.5"></img><p>Home</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={explore} className="mt-1.5"/><p>Explore</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={learn} className="mt-1.5"/><p>Learn</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={achieve} className="mt-1.5"/><p>Achieve</p></Link>
        <Link to="/practice" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={practice} className="mt-1.5"/><p>Practice</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={projects} className="mt-1.5"/><p>Projects</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={career} className="mt-1.5"/><p>Career</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={mentorship} className="mt-1.5"/><p>Mentorship</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={blogs} className="mt-1.5"/><p>Blogs</p></Link>
        <Link to="/blank" className="search flex space-x-2 ml-4 text-center p-2 text-slate-400 font-bold font-serif text-xl" onClick={myfunc}><img src={community} className="mt-1.5"/><p>Community</p></Link>
      </ul>
      <div className="h-10 w-10 bg-purple-600 rounded-full ml-[90px] border-4 absolute  z-1"></div>
      <div className="h-20 bg-purple-600 rounded-3xl m-2 mt-4 "></div>
      <div className="bg-purple-200 mx-2 rounded-3xl">
      <div className='text-center font-semibold'>Connect with us</div>
      <div className="flex space-x-2 mt-3 p-2 pb-0">
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
