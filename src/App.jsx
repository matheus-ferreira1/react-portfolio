import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="font-inter">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
