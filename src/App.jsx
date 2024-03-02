
// import { react } from '@vitejs/plugin-react';

// import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
  

function App() {
  

  return (

   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/> }/>
    </Routes>
   </BrowserRouter>

  )
}

export default App
