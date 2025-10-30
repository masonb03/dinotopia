import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import SingleDino from "./pages/SingleDino";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/library' element={<Library/>}/>
        <Route path='/dino/:id' element={<SingleDino/>}/>
      </Routes>
    </div>
  )
}

export default App
