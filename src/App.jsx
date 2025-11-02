import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import DinoCard from "./pages/DinoCard";
import './styles/App.css';

function App() {
  return (
    <div>
      <div className="background"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/dino/:id" element={<DinoCard />} />
      </Routes>
    </div>
  );
}


export default App;

