import React from 'react'
import { Link } from 'react-router-dom';

function NavPortifólio() {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/Tecnologias"}>Tecnologias</Link>
    </nav>
  )
}

export default NavPortifólio;