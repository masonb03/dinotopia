import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import DinoCard from "./pages/DinoCard";
import PageWrapper from "./components/PageWrapper";

import './styles/App.css';

function App() {

  const location = useLocation();
  return (
    <div>
      <div className="background"></div>
        <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/catalog" element={<PageWrapper><Catalog /></PageWrapper>} />
              <Route path="/dino/:id" element={<PageWrapper><DinoCard /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
    </div>
  );
}


export default App;

