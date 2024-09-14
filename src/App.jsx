import Acheivements from "./components/Acheivements"
import Certificates from "./components/Certificates"
import Education from "./components/Education"
import Header from "./components/Header"
import Internship from "./components/Internship"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="container mx-auto p-6 bg-white text-gray-800">
        <Header />
        <Education />
        <Internship />
        <Skills />
        <Projects />
        <Acheivements />
        <Certificates />
    </div>
  )
}

export default App
