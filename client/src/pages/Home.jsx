import { useState } from 'react';
import Herosection from '../components/Herosection'
import Secondpage from '../components/Secondpage'
import Events from "../components/Events";
import About from "../components/About";
import Background from "../components/Particles";
import Caraousel from "../components/Carousel";
import PopUp from "../components/Popup";
function Home() {
    const [gallery,setGallery]= useState(false);
  const toggleGallery = ()=> {
  gallery?setGallery(false):setGallery(true);
  }
  return (
    <>
    <Herosection />
  <Secondpage />
  <Background />
  {/* <Caraousel style={{position:'relative'}}/> */}
  <PopUp  func={toggleGallery}/>
  <Events />
  {/* <About /> */}
    </>
  )
}

export default Home