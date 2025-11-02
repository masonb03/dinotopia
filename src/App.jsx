import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import DinoCard from "./pages/DinoCard";

function App() {
  return (
    <div>
      <img src="../src/assets/textures/BG.jpg" alt="Background" className="fixed top-0 left-0 w-full h-full object-cover -z-10 opacity-30"/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/dino/:id' element={<DinoCard/>}/>
      </Routes>
    </div>
  )
}

export default App
