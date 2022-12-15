import React from 'react';
import '../css/Main.css';
import {BsInstagram,BsFacebook} from 'react-icons/bs';
function Main(){
return ( 
    <div className='backg'>
       <div className='main-head '>
        <li className='subheading'>Explore the</li>
        <li className='mainhead'>Tesseract</li>
        <li className=' tptext   '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
        <div className='socials '>
            <li className='lsoc'><BsInstagram/></li>
            <li className='lsoc'><BsFacebook/></li>
            
        </div>
         <div className='EDM'>World of Tesseract</div>
        </div>

    </div> 
);













}

export default Main;