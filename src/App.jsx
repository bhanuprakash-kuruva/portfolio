import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import EducationTimeline from "./components/Career";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import ExtraCurricular from "./components/Extra";
import WorkExperience from "./components/WorkExperience";

const App = () => {
  return (
    <Router> {/* ✅ Removed basename */}
      <Routes>
        <Route path="/" element={<><Header /><Hero /><Skills /><EducationTimeline /><Projects /><WorkExperience/><Certifications/><ExtraCurricular/><Contact /><Footer /></>} />
        <Route path="/projects" element={<><Header/><Projects/><Footer/></>}/>
        <Route path="/about" element={<><Header /><Hero /><Skills /><EducationTimeline /><Projects /><Contact /><Footer /></>}/>
        <Route path="/contact" element={<><Header/><Contact/><Footer/></>}/>
        <Route path="/career" element={<><Header/><EducationTimeline/><Footer/></>}/>
        <Route path="/skills" element={<><Header/><EducationTimeline/><Skills/><Footer/></>}/>
        <Route path="/certifications" element={<><Header/><Certifications/><Footer/></>}/>
        <Route path='/work' element={<><Header/><WorkExperience/><Footer/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
