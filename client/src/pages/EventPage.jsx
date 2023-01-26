import React, {useState} from "react";
import '../css/Events.css';
import img from '../images/edm.jpg';
import data from '../FinalSNTdata.json';

const EventsPage = () => {

    // const datas = JSON.parse(data);
    const [Events, setEvents] = useState(data);
    const image_url = useState(Events.image_url);
    const registration_URL = useState(Events.registration_URL);

    if(image_url && registration_URL  ){
      
    }

    return ( 
        <>
        <div className="Event">
        <div className="cards">
              <ul class="cards">
          {Events.map((Events) => {
              let validInput=Events.image&&Events.registration;
                 return(validInput&&<li>
                    <span href="" class="card">
                      <img src={Events.image}  class="card__image" alt="image" />
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
                            <button className="Register_button"><a href={Events.registration} target="_blank">Register Now</a></button>
                          </div>
                      </div>
                    </span>      
                  </li>)
                })}
              </ul>
            </div>  
          </div>
        </>
     );
}
 
export default EventsPage;