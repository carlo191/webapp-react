import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<HomePage />} />
        
    
    </Routes>
  </BrowserRouter>
  )
}

export default App
