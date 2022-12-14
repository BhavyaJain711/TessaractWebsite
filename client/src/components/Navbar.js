import React, { useState,useEffect } from 'react';
// import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {

    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <a to="/" className = "navbar-logo">
                    Tesseract <i className='fab fa-typo3'/>
                </a>
                <div className="menu-icon" onClick={ handleClick }>
                    <i className = { click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a to = '/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a to = '/Cards' className='nav-links' onClick={closeMobileMenu}>
                            Blogs 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a to = '/' className='nav-links' onClick={closeMobileMenu}>
                            About us 
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a to = '/' className='nav-links' onClick={closeMobileMenu}>
                            Explore 
                        </a>
                    </li>
                </ul>
                {/* {Button && <Button buttonStyle={'btn--outline'}>EXPLORE</Button>} */}
            </div>
        </nav>
    </>
    )  
}

export default Navbar