
import Background from "./components/Particles";
// import Caraousel from "./components/Carousel";
import Home from "./pages/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar_1.js';
import './css/App.css';
import Events from "./components/Events";
import Secondpage from './components/Secondpage.js';
// import About from "./components/About";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Background from "./components/Particles";
import EventPage from "./pages/EventPage";

export default function App() {
  

return(

<>
  <Navbar />
<Background />
  <div className="app">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<EventPage />} />
  </Routes>
</BrowserRouter>
  
  </div>
</>
)
  
}
