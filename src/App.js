import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
