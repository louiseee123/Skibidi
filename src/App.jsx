import Navbar from './assets/navbar'
import Footer from './assets/footer'
import Profile from './pages/Profile'
import Browse from './pages/Browse'
import Home from './pages/Home'
import About from './pages/About'
import {Routes , Route} from 'react-router-dom'

function App() {

  return (  
    <>
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/browse' element={<Browse />}/>
      <Route path='/about' element={<About />}/>
      </Routes>
      <Footer/>
    </div>
      </>
  )
}

export default App
