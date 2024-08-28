import Navbar from './components/navbr'
import Project from './components/project';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';
import '../src/assets/css/style.css'

import './App.css'
import Canvas from './components/canvas';
function App() {

return (
    <>
    <Canvas/>
        <div className="text-white font-['Nunito']">
            <Navbar />
            <Project />
            <Experience />
            <Contact />
            <Footer />
        </div>
    </>
    );
}

export default App;
