import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-black overflow-hidden">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
