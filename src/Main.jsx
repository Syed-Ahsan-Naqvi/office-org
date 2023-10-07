import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import All from "./components/All"
import About from "./components/About"
import Services from "./components/Services"
import Team from "./components/Team"
import Partners from "./components/Partners"
import FaQ from "./components/FaQ"
import News from "./components/News"
import team3 from "./images/image3-removebg-preview.png"



import { Helmet } from "react-helmet";

const HelloWOrld = "kasjdnaksjndkjasndkasnjkd"

export default function Main() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hashstackdevelopers</title>
                <link rel="canonical" href="./images/arooj.png" />
                <link rel="icon" type="image/png" href={team3} />
                <meta name='description' content={HelloWOrld} />

            </Helmet>


            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<All />} ></Route>
                    <Route path='/about' element={<About />} ></Route>
                    <Route path='/services' element={<Services />} ></Route>
                    <Route path='/team' element={<Team />} ></Route>
                    <Route path='/contact' element={<Partners />} ></Route>
                    <Route path='/faq' element={<FaQ />} ></Route>
                    <Route path='/news' element={<News />} ></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}
