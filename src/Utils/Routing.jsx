import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Galary from '../Components/Galary';
import Contact from '../Components/Contact';
import Nagtibba from '../Components/Track/Nagtibba'
import Kedarnath from '../Components/Track/Kedarnath'
import Chopta from '../Components/Track/Chopta'

function Routing() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route path="/" element={<Navigate to="/Nagtibba" />} />
                    <Route path="Nagtibba" element={<Nagtibba />} />
                    <Route path="Kedarnath" element={<Kedarnath />} />
                    <Route path="Chopta" element={<Chopta />} />
                </Route>


                <Route path="/about" element={<About />} />
                <Route path='/galary' element={<Galary />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

        </>
    )
}

export default Routing