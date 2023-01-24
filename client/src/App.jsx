import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar_1.js';
import './css/App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
export default function App() {
  

return(

<>
  <Navbar />
  <div className="app">
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/gallery" element={<Home />} />
  </Routes>
</BrowserRouter>
  
  </div>
</>
)
  
}
