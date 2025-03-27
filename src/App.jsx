import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Routing from './Utils/Routing';

function App() {

  return (
    <>
      <NavBar />
      <Routing />
      <Footer />
    </>
  )
}

export default App
