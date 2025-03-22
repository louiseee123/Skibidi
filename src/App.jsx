import Navbar from './assets/navbar'
import Footer from './assets/footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Services from './pages/Services'
import {Routes , Route} from 'react-router-dom'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/services' element={<Services />}/>
      </Routes>
      <Footer/>
    </div>
      </>
  )
}

export default App
