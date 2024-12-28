import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import EducationTimeline from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Hero /><Skills /><EducationTimeline /><Projects /><Contact /><Footer /></>} />
        <Route path="/projects" element={<><Header/><Projects/><Footer/></>}/>
        <Route path="/about" element={<><Header /><Hero /><Skills /><EducationTimeline /><Projects /><Contact /><Footer /></>}/>
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
        <Route path="/career" element={<><Header/><EducationTimeline/><Footer/></>}/>
        <Route path="/skills" element={<><Header/><EducationTimeline/><Skills/><Footer/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
