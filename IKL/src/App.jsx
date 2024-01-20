import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/core/header/Header'
import Home from './components/core/home/Home'
import Footer from './components/core/footer/Footer'
import Leadership from './components/main/leadership/Leadership'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
