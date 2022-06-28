import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "././components/Home";
import About from "././components/About";
import Contact from "././components/Contact";
import Service from "././components/Service";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
