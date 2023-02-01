import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import All from "./components/All"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Partners from "./components/Partners"


export default function Main() {

    return (
        <>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<All />} ></Route>
                    <Route path='/about' element={<About />} ></Route>
                    <Route path='/services' element={<Services />} ></Route>
                    <Route path='/team' element={<Team />} ></Route>
                    <Route path='/partners' element={<Partners />} ></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}
