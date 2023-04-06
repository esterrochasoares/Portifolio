import React from 'react'
import { Link } from 'react-router-dom'

import svgImage from '../assets/logo.svg'
import Git from '../assets/git.svg'
import Linkedin from '../assets/linkedin.svg'



function Home() {
  return (
    < div className='flex flex-col justify-center h-screen w-screen bg-black'>
      <header className=' flex justify-between mt-7 ml-5 mr-5 p-1'>
        <div className='flex gap-7 '  >
          <img src={svgImage} className='w-8 md:w-12 md:h-12'/>
          <h1 className='text-white text-1xl md:text-2xl font-fira-sans pt-6 animate-bounce'>ESTER ROCHA</h1>
        </div>
        <div className='flex gap-7'>
          <Link to={"/Projetos"} 
          className='text-white hover:text-blue-900 font-fira-sans text-1xl md:text-2xl'>Projects</Link>
          <Link to={"/Tecnologias"} 
          className='text-white hover:text-blue-900 font-fira-sans text-1xl md:text-2xl'>Techs</Link>
        </div>
      </header>

      <main className=' flex h-full w-full overflow-auto  p-10'>
        <ul className='flex flex-col justify-center m-5 gap-10'>
          <a href='https://github.com/esterrochasoares' className=' h-10 w-10 ' target='_blank'>
            <img src={Git} className="shrink-0" /> </a>
          <a href='https://www.linkedin.com/in/ester-rocha-soares-9301671b0' target='_blank'>
            <img src={Linkedin} className=' shrink-0 ' /> </a>
        </ul>
        <div>
          <p className='text-white font-fira-sans max-w-lg '>
            <strong className='text-xl md:text-4xl text-blue-900'
            >Olá, meu nome é Ester Rocha e sou desenvolvedora full stack.</strong>  <br/>
            <span className='text-white text-xl md:text-4xl'
            > Além disso, gosto muito de jogos de lógica, que são uma forma divertida de desafiar minha mente. 
            Também adoro aprender sobre tecnologia e estar sempre atualizada sobre as últimas tendências do mercado. 
            Estou animada em utilizar minhas habilidades 
            e conhecimentos para desenvolver soluções tecnológicas criativas e eficazes.</span>
          </p>
        </div>

      </main>
    </div>


  )
}

export default Home;