import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Fys from './components/Fys'
import Sys from './components/Sys'
import Tys from './components/Tys'
import Events from './components/Events'


const App = () => {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Fys' element={<Fys />} />
                <Route path='/Sys' element={<Sys />} />
                <Route path='/Tys' element={<Tys />} />
                <Route path='/Events' element={<Events />} />
            </Routes>
        </div>
    )
}

export default App