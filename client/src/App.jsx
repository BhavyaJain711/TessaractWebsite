import Background from "./components/Particles";
import Caraousel from "./components/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import PopUp from "./components/Popup";
import {useState} from 'react'
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
 import Card from "./components/SNT_Card.jsx";
export default function App() {
  const [gallery,setGallery]= useState(false);
  const toggleGallery = ()=> {
  gallery?setGallery(false):setGallery(true);
  }

return(<>
  {!gallery && <Navbar />}
  <Herosection />
  <Background />
  <Caraousel style={{position:'relative'}}/>
  <PopUp  func={toggleGallery}/>
  <Card />
  </>
)
  
}
