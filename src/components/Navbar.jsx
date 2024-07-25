import React, { useState } from 'react';
import './navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen ] = useState(false)
    
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const NavLinks = () => {
        return(
        <>
            <a href="">home</a>
            <a href="">about</a>
            <a href="">projects</a>
        </>
        )
    }

  return (
    <header>
        <nav>
        <h1>Boris.dev</h1>
        <div className={`links-container ${isOpen && "links-container-open"}`} >
            <NavLinks />
            <button className='cv'>
                Download CV
            </button>
        </div>
        <button onClick={handleOpen} className='mobile-menu-icons'>{isOpen ? <IoIosClose /> : <GiHamburgerMenu />}</button>
        </nav>

    </header>
  )
}

export default Navbar
