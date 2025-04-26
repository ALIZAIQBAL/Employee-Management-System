import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
//         {/* <Route path="/login" element={<Login />} />
//       
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/checkout" element={<Checkout />} /> */}
//    </Routes>

//     </>
  )
}

export default App
