import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./pages/Hero"
import CJenis from "./pages/CJenis";
import LJenis from "./pages/LJenis";
import Tentang from "./pages/Tentang";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="">
      <Navbar/>
      <main className="">
        <Routes>  
          <Route path="/" element={<Hero />} />
          <Route path="/CariJenis" element={<CJenis />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/LihatJenis" element={<LJenis />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
