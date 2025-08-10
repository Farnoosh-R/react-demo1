import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index/Index'

function App() {
  

  return (
    <BrowserRouter basename="/react-demo1">
    <Routes>
      <Route path='/' element={<Index />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
