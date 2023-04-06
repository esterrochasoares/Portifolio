import { Link } from "react-router-dom";
import svgImage from '../assets/logo.svg'

 function Projetos (){
    return (
        <div className='flex flex-col  h-screen w-screen bg-black' >
            <header className=' flex justify-between mt-7 ml-5 mr-5 p-1'>
                <div className='flex gap-7 '  >
                    <img src={svgImage} className='w-8 md:w-12 md:h-12'/>
                    <h1 className='text-white text-1xl md:text-2xl font-fira-sans pt-6 animate-bounce'>ESTER ROCHA</h1>
                </div>
                <div className='flex gap-7'>
                <Link to={"/"} 
                    className='text-white hover:text-blue-900 font-fira-sans text-1xl md:text-2xl'>Home</Link>
                    <Link to={"/Tecnologias"} 
                    className='text-white hover:text-blue-900 font-fira-sans text-1xl md:text-2xl'>Techs</Link>
                    </div>
            </header>
        </div>
    )
 }

 export default Projetos