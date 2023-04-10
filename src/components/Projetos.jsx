import { Link } from "react-router-dom";
import svgImage from '../assets/logo.svg'
import Projeto from './ProjetosData'

 function Projetos (){
    return (
     
        <div className='flex flex-col h-screen w-screen bg-black ' >
            <header className=' flex justify-between pt-7 pl-5 pr-5  p-1 bg-blue-900'>
                <div className='flex gap-7 '  >
                    <img src={svgImage} className='w-8 md:w-12 md:h-12'/>
                    <h1 className='text-white text-1xl md:text-2xl font-fira-sans pt-6 animate-bounce'>ESTER ROCHA</h1>
                </div>
                <div className='flex gap-7'>
                <Link to={"/"} 
                    className='text-white hover:text-black font-fira-sans text-1xl md:text-2xl'>Home</Link>
                    <Link to={"/Tecnologias"} 
                    className='text-white hover:text-black font-fira-sans text-1xl md:text-2xl'>Techs</Link>
                    </div>
            </header>
          
            <ul className='flex flex-col h-full w-full items-center gap-4 overflow-auto px-5 pb-5' >
            <h1 className="text-white text-2xl md:text-4xl mt-5 font-fira-sans">PROJECTS</h1>
              {Projeto.map((projetos) => (
                <li className="text-white  flex flex-col justify-end items-start
                               border-8 p-5 rounded-2xl border-blue-900" key={projetos.nome}>
               <div className="flex  gap-3 font-fira-sans"> 
               <h3 className="text-4xl mt-3 mb-3 gap-2">{projetos.nome}</h3> 
                </div>
                <p className="text-1xl md:text-2xl max-w-max">{projetos.descricao}</p>
                <img className=' 'src={projetos.imagem}  />
                <a className=" bg-blue-900 hover:text-black font-fira-sans text-2xl md:text-3xl 
                                 rounded-3xl px-6 pr-6 pt-2 pb-2 mt-7 " href={projetos.href} target="_blanck">Olhar</a>
                </li>
              ))}
            </ul>
          
    </div>
    )
 }

 export default Projetos