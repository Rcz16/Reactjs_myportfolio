import Header from './components/Header'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import About from './components/About'
import Skills from './components/Skills'
import Designs from './components/Designs'
import Projects from './components/Projects'
import Cta from './components/Cta'

export default function App() {

  return (
    <>
    <Header/>
    <div className="relative">
        <Hero/>
        <About className="sticky top-0 h-screen" />
    </div>
    <Experiences/>
    <Skills/>
    <Projects/> 
    <Cta/>
    </>
  );
}

