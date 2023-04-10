import React from 'react';
import { Link } from "react-router-dom";


import svgImage from '../assets/logo.svg'
import JavaScript from '../assets/javascript.svg'
import Node from '../assets/node.svg'
import ReactIcon from '../assets/react.svg';
import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import TailwindIcon from '../assets/tailwind.svg'
import Postgresql from '../assets/postgresql.svg'

function Tecnologias() {
  return (
    <div className='flex flex-col  h-screen w-screen bg-black' >
            <header className=' flex justify-between pt-7 pl-5 pr-5  p-1 bg-blue-900'>
                <div className='flex gap-7 '  >
                    <img src={svgImage} className='w-8 md:w-12 md:h-12'/>
                    <h1 className='text-white text-1xl md:text-2xl font-fira-sans pt-6 animate-bounce'>ESTER ROCHA</h1>
                </div>
                <div className='flex gap-7'>
                <Link to={"/"} 
                    className='text-white hover:text-black font-fira-sans text-1xl md:text-2xl'>Home</Link>
                    <Link to={"/Projetos"} 
                    className='text-white hover:text-black font-fira-sans text-1xl md:text-2xl'>Projects</Link>
                    </div>
            </header>
          <ul className='flex flex-col h-full w-full items-center gap-4 overflow-auto px-5 pb-5' >
          <h1 className="text-white text-2xl md:text-4xl mt-5 font-fira-sans">TECHS</h1>
          <div className='flex'>
            <img src={JavaScript}></img>
            <img src={Node}></img>
            <img src={ReactIcon}></img>
            <img src={HTML}></img>
            <img src={CSS}></img>
            <img src={TailwindIcon}></img>
            <img src={Postgresql}></img>
          </div>
          </ul>
    </div>
    
  )
}

export default Tecnologias;