// import React, { useState,useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {

//     const [click,setClick] = useState(false);
//     const [button,setButton] = useState(true);

//     const handleClick = () => setClick(!click);
//     const closeMobileMenu = () => setClick(false);

//     const showButton = () => {
//         if(window.innerWidth <= 960){
//             setButton(false);
//         }
//         else{
//             setButton(true);
//         }
//     };

//     useEffect(() => {
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);
    
//     return (
//     <>
//         <nav className="navbar">
//             <div className="navbar-container">
//                 <a to="/" className = "navbar-logo">
//                     Cozy Earth <i className='fab fa-typo3'/>
//                 </a>
//                 <div className="menu-icon" onClick={ handleClick }>
//                     <i className = { click ? 'fas fa-times' : 'fas fa-bars'} />
//                 </div>
//                 <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className='nav-item'>
//                         <a to = '/' className='nav-links' onClick={closeMobileMenu}>
//                             Home
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a to = '/Cards' className='nav-links' onClick={closeMobileMenu}>
//                             Blogs 
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a to = '/' className='nav-links' onClick={closeMobileMenu}>
//                             About us 
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a to = '/' className='nav-links' onClick={closeMobileMenu}>
//                             Explore 
//                         </a>
//                     </li>
//                 </ul>
//                 {/* {Button && <Button buttonStyle={'btn--outline'}>EXPLORE</Button>} */}
//             </div>
//         </nav>
//     </>
//     )  
// }

// export default Navbar


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
function CollapsibleExample() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="md" bg="" variant="">
      <Container className='navClass'>
        <Navbar.Brand href="#home">
        <img src='images/logo.png' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#edm">EDM</Nav.Link> */}
            <Nav.Link href="#events">Events</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#schedule">Schedule</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;