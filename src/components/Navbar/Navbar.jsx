import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faCaretDown } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='nav'>
        <header>
            <nav>
                <ul className="nav-links">
                    <div className='logo-container'>
                      <FontAwesomeIcon icon={faPlay} className='logo' size='xl'/>
                    </div>
                    <div className='nav-container'>
                      Product
                      <FontAwesomeIcon className='caretDown' icon={faCaretDown}/>
                    </div>
                    <div className='nav-container'>
                      Key Features
                    </div>         
                    <div className='nav-container'>
                      Applications
                      <FontAwesomeIcon className='caretDown' icon={faCaretDown}/>
                    </div>      
                    <div className='nav-container'>
                      Why Wetrack
                      <FontAwesomeIcon className='caretDown' icon={faCaretDown}/>
                    </div>  
                    <div className='nav-container'>
                      Careers
                    </div>   
                    <div className='nav-container'>
                      Pricing
                    </div>        
                </ul>
            </nav>
            <nav className='nav-back'>
                <ul className="nav-links">
                    <div className='nav-black-button'>Try for Free</div>
                    <div className='nav-white-button'>Login In</div>
                    <div className='nav-dot-container'>
                      <div className='nav-dot'></div>
                    </div>
                    <div className='nav-dot-container'>
                      <div className='nav-dot'></div>
                    </div>
                    <div className='nav-dot-container'>
                      <div className='nav-dot'></div>
                    </div>
                </ul>
            </nav>

        </header>
    </div>
  )
}

export default Navbar