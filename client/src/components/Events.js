import React from "react";
import '../css/Events.css';
import img from '../images/edm.jpg';
import img2 from '../images/Ideathon.jpg';

const Events = () => {
    return ( 
        <>
<div className="Event" id="eve">
<div className="cards">
<ul class="cards">
  <li>
    <span href="" class="card">
      <img src={img} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div class="card__header-text">
            <h3 class="card__title">EDM night</h3>  
            <span class="card__tagline">Feel that wave of EDM night</span>          
            <span class="card__status">15/1/2023</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
        Lntore ipsum quasi aut a quaerat. Asperiores, 
        </p>
      </div>
    </span>      
  </li>
  <li>
    <a href="" class="card">
      <img src={img2} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>         
          <div class="card__header-text">
            <h3 class="card__title">Ideathon </h3>
            <span class="card__tagline">Uleash you idea</span>
            <span class="card__status">14/1/2023</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/oYiTqum.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div class="card__header-text">
            <h3 class="card__title">Photobooth</h3>
            <span class="card__tagline">Lorem ipsum dolor sit amet consectetur</span>            
            <span class="card__status">S-path</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img src="https://i.imgur.com/2DhmtJ4.jpg" class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                 
          <div class="card__header-text">
            <h3 class="card__title">Tess Fair</h3>
            <span class="card__tagline">Save some cravings for fast food</span>
            <span class="card__status">16/1/2023</span>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <span href="" class="card">
      <img src={img} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
          <div class="card__header-text">
            <h3 class="card__title">EDM night</h3>  
            <span class="card__tagline">Feel that wave of EDM night</span>          
            <span class="card__status">15/1/2023</span>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet 
        consectetur adipisicing elit.
        Lntore ipsum quasi aut a quaerat. Asperiores, 
        </p>
      </div>
    </span>      
  </li>    
</ul>
</div>
</div>
        </>
     );
}
 
export default Events;