import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Donate from "./components/Donate";

function App() {
  return (
    <Routes>
      {/* Layout wraps around all routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donate" element={<Donate />} />
      </Route>
    </Routes>
  );
}

export default App;
