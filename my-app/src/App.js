import { Routes, Route} from "react-router-dom";

import Hero from "./pages/Hero"
import CJenis from "./pages/CJenis";
import LJenis from "./pages/LJenis";
import Tentang from "./pages/Tentang";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="flex flex-row">
      <Navbar/>
      <main className="min-h-screen w-full font-display">
        <Routes>  
          <Route path="/" element={<Hero />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/LihatJenis" element={<LJenis />} />
          <Route path="/CariJenis" element={<CJenis />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
