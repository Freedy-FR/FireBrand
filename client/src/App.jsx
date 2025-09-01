import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";

function App() {
  return (
    <Routes>
      {/* Layout wraps around all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Welcome to FireBrand Church</h1>} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;
