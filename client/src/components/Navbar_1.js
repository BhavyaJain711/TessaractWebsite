import {React,useState} from 'react';
// import immg from '../img/tess.png'
import '../css/Navbar_1.css';
// import { Link } from "react-router-dom";
function Navbar(){ 
   const hamburgerr = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")
  const [switchToggled, setSwitchToggled] = useState(false)
  const ToggleSwitch = () => {
    switchToggled ? setSwitchToggled(false) : setSwitchToggled(true)
    if (switchToggled === true) {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    } else {
      hamburgerr.classList.toggle("active")
      navMenu.classList.toggle("active")
    }
  }
   return (
   <div className='navbar-main'>
    
     <div className='logo' >Logo</div>
         <div className='links'>
             <ul className='nav-menu'>
               <li className='nav-item'><a href="#">Home</a></li>
               <li className='nav-item'><a href='#edm'>EDM</a></li>
               <li className='nav-item'><a href='#'>Gallery</a></li>
               <li className='nav-item'><a href='#eve'>Events</a></li>
               <li className='nav-item'><a href='#'>Schedule</a></li>
               <li className='nav-item'><a href='#about'>About</a></li>
            
              </ul>
        </div>
      <div className="hamburger" onClick={ToggleSwitch}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    
     </div> 
   );
}
export default Navbar;