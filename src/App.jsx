import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import SingleDino from "./pages/SingleDino";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/dino/:id' element={<SingleDino/>}/>
      </Routes>
    </div>
  )
}

export default App
