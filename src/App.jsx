import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './pages/About'
import '@fortawesome/fontawesome-free/css/all.css';
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <>
     
    
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      </>
  )
}

    

export default App
