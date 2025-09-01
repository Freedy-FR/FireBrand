import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/donate">Donate</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h1>Welcome to FireBrand Church</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<h1>Events page coming soon</h1>} />
        <Route path="/gallery" element={<h1>Gallery page coming soon</h1>} />
        <Route path="/donate" element={<h1>Donation page coming soon</h1>} />
      </Routes>
    </div>
  );
}

export default App;
