import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Header from './components/Header'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {

  return (
    <div id='home'>
      <Header />
      <Nav />
      <Banner />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
