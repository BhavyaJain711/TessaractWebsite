import React, {useState} from "react";
import '../css/Events.css';
import img from '../images/edm.jpg';
import data from '../data.json';

const Events = () => {

    // const datas = JSON.parse(data);
    const [Events, setEvents] = useState(data);
    const image_url = useState(Events.image_url);
    const registration_URL = useState(Events.registration_URL);

    if(image_url && registration_URL){
      
    }

    return ( 
        <>
        <div className="Event">
        <div className="cards">
              <ul class="cards">
          {Events.map((Events) => (
                  <li>
                    <span href="" class="card">
                      <img src="https://images.pexels.com/photos/2409038/pexels-photo-2409038.jpeg?auto=compress&cs=tinysrgb&w=600" class="card__image" alt="" />
                        <div class="card__overlay">
                          <div class="card__header">
                            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <div class="card__header-text">
                              <h3 class="card__Name">{Events.EventName}</h3>  
                              <span class="card__Club">{Events.Club}</span>          
                              <span class="card__Time">{Events.TIME}</span>
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
        </>
     );
}
 
export default Events;