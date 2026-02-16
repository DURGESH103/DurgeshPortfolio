import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Certifications from './pages/Certifications';
import AboutDetails from './pages/AboutDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/about-details" element={<AboutDetails />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
