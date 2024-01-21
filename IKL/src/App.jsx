import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/core/header/Header'
import Home from './components/core/home/Home'
import Footer from './components/core/footer/Footer'
import Leadership from './components/main/leadership/Leadership'
import Help from './components/main/help/Help'
import Contact from './components/main/contact/Contact'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
