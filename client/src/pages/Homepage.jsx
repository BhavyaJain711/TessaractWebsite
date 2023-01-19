import Background from "../components/Particles";
import Caraousel from "../components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUp from "../components/Popup";
import { useState } from "react";
import Herosection from "../components/Herosection";
import Navbar from "../components/Navbar_1";
import "../css/App.css";
import Events from "../components/Events";
import Secondpage from "../components/Secondpage";
import About from "../components/About";
//this is for making the routes

export default function Homepage(){
     const [gallery,setGallery]= useState(false);
  const toggleGallery = ()=> {
  gallery?setGallery(false):setGallery(true);
  }
return(
<>
  <Navbar />
  <div className="app">
  <Herosection />
  <Secondpage />
  <Background />
  <Caraousel style={{position:'relative'}}/>
  <PopUp  func={toggleGallery}/>
  <Events />
  <About />
  </div>
</>
)

}