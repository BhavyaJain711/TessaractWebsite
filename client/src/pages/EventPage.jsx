import React, {useState} from "react";
import '../css/Events.css';
import img from '../images/edm.jpg';
import data from '../FinalSNTdata.json';

const EventPage = () => {

    // const datas = JSON.parse(data);
    const Events=data;

    return ( 
        <>
<div className="Event">
<div className="cards">
      <ul class="cards">
  {Events.map((Events) => (
        <li>
          <span href="" class="card">
            <img src={img} class="card__image" alt="" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div class="card__header-text">
                    <h3 class="card__Name">{Events.eventName}</h3>  
                    <span class="card__Club">{Events.club}</span>          
                    <span class="card__Time">{Events.time}</span>
                  </div>
                </div>
                <div className="Button">
                  <button className="Register_button">Register Now</button>
                </div>
            </div>
          </span>      
        </li>
      ))}
    </ul>
  </div>  
</div>
{/* <div className="check">
  {Events.map((Events) => (
      <div className="check">
        {Events.eventName}
      </div>
  ))}
</div> */}
        </>
     );
}
 
export default EventPage;