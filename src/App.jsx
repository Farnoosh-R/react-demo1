import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index/Index'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Aboutus from './pages/Aboutus/Aboutus'

function App() {
  

  return (
    <BrowserRouter basename="/react-demo1">
      <Navbar />
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/aboutus' element={<Aboutus />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
