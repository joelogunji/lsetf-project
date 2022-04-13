import React from 'react'
import Home from "./Components/Home/Home"
import Participants from "./Components/Participants/Participants"
import About from "./Components/About/About"
import ContactUs  from "./Components/Contact/Contact"
import Navbar from "./Components/Navbar/Navbar"
import Website from "./Components/Website/Website"
import GlobalStyle from "./GlobalStyle"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <GlobalStyle/>
        <Navbar/>
        <Website/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/participants' element={<Participants/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
