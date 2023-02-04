import { Link, useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import React from "react";
import UseAnimations from "react-useanimations";
import menu4 from 'react-useanimations/lib/menu4';
import React, { useRef, useEffect, useState } from 'react'
// import img1 from "../images/WhatsApp_Image_2023-01-12_at_3.05.36_PM-removebg-preview.png"
// import Particle from './Particle2'


export default function SideNav() {
    const data = useLocation()
    console.warn(data.pathname)

    useEffect(() => {
        AOS.init({ duration: 800 });

    }, []);
    const toe = useRef();
    const mit = useRef();
    const scrollHide = document.getElementById("scroll-hide")



    const toggleCart = () => {
        if (toe.current.classList.contains("-translate-x-full")) {
            toe.current.classList.remove("-translate-x-full")
            toe.current.classList.add("translate-x-0")
            setTimeout(() => {
            }, [500]);


            if (scrollHide) {
                scrollHide.style.overflow = "hidden"
            }
        } else {
            if (toe.current.classList.contains("translate-x-0"))
                toe.current.classList.remove("translate-x-0")
            toe.current.classList.add("-translate-x-full")
            if (scrollHide) {
                scrollHide.style.overflow = "scroll"
            }

        }
        // setcolor1(!color1)
    }



    window.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            mit.current.classList.remove("translate-x-0")
            mit.current.classList.add("translate-x-20")
        } else {
            mit.current.classList.remove("translate-x-20")
            mit.current.classList.add("translate-x-0")
        }
    })
    const [first, setfirst] = useState("default")
    // const [color1, setcolor1] = useState("true")
    // const [color2, setcolor2] = useState("white")


    console.warn(first)


    return (
        <>


            <div ref={mit} className=' z-20 fixed top-5 right-5 md:top-1/2 md:left-10 translate-x-0  md:translate-x-0 transition-transform duration-1000 ease-in-out '  >
                <button onClick={toggleCart}  >  <UseAnimations fillColor='white' strokeColor="#ffffff" animation={menu4} size={50} /></button>
            </div>

            <div ref={toe} className=' z-10  fixed -translate-x-full transition-transform duration-1000 ease-in-out ' >
                <div className="absolute  " >
                    {
                        // first === "default" && <div className=" z-10 flex justify-center items-center  h-screen w-screen" ><div  ><h1 className="text-white text-7xl md:text-7xl tracking-[60px] md:tracking-[40px] opacity-10 transition-transform duration-1000  " >Stack Developers</h1></div></div>
                        // first === "default" && <div className=" z-10 flex justify-center items-center  h-screen w-screen" ><div  ><img alt="" src={img1} className="text-white text-7xl md:text-9xl  transition-transform duration-1000  " /></div></div>
                    }
                    {
                        first === "home" && <div className=" z-10 flex justify-center items-center  h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[80px] opacity-10 transition duration-1000  cursor-not-allowed " >Home</h1></div></div>
                    }
                    {
                        first === "about" && <div className=" z-10 flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[80px] opacity-10  transition-transform duration-1000 cursor-not-allowed " >About</h1></div></div>
                    }
                    {
                        first === "services" && <div className=" z-10 flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[80px] opacity-10  transition-transform duration-1000 cursor-not-allowed " >Services</h1></div></div>
                    }
                    {
                        first === "team" && <div className=" z-10 flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[80px] opacity-10  transition-transform duration-700 cursor-not-allowed " >Team</h1></div></div>
                    }
                    {
                        first === "partners" && <div className=" z-10 flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[80px] opacity-10  transition-transform duration-700 cursor-not-allowed " >Contact</h1></div></div>
                    }


                </div>

                <div className='  flex flex-col text-center md:flex-row md:text-current  md:flex justify-center items-center bg-gradient-to-tl from-yellow-600 to-black w-screen h-screen ' >
                    {/* <Particle /> */}
                    {/* starts 1 */}

                    <div className="hidden md:block" >
                        {data.pathname === "/" ? <div onMouseOver={() => {
                            setfirst("home")
                        }} className="  flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl text-white" >01</span>
                            <Link className=" z-20 no-underline text-black" to="/" >
                                <button

                                    onClick={toggleCart} className=" text-4xl md:text-5xl  font-serif font-[500]" > Home</ button>
                            </Link>
                        </div> : <div onMouseOver={() => {
                            setfirst("home")
                        }} className="  flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl " >01</span>
                            <button

                                onClick={toggleCart} className="z-20 text-4xl md:text-5xl  font-serif font-[500]" > <Link className="no-underline text-white" to="/" >Home</Link></ button>
                        </div>}

                    </div>
                    <div className="hidden md:block" >
                        {data.pathname === "/about" ? <div className="ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl text-white " >02</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("about")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/about" >About Us</Link></ button>
                        </div> : <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl  " >02</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("about")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/about" >About Us</Link></ button>
                        </div>}


                    </div>

                    <div className="hidden md:block" >
                        {data.pathname === "/services" ? <div className=" ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl text-white " >03</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("services")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/services" >Services</Link></ button>
                        </div> : <div className="ml-0 md:ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl " >03</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("services")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/services" >Services</Link></ button>
                        </div>}


                    </div>
                    <div className="hidden md:block" >

                        {data.pathname === "/team" ? <div className=" ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl text-white " >04</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("team")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/team" >Team</Link></ button>
                        </div> : <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl " >04</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("team")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/team" >Team</Link></ button>
                        </div>}

                    </div>

                    <div className="hidden md:block" >
                        {data.pathname === "/partners" ? <div className=" ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl text-white " >05</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("partners")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/partners" >Contact</Link></ button>
                        </div> : <div className="ml-0 md:ml-10 flex flex-col justify-start items-start" >
                            <span className="z-20 font-mono text-xl " >05</span>
                            <button
                                onMouseEnter={() => {
                                    setfirst("partners")
                                }}
                                onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/partners" >Contact</Link></ button>
                        </div>}
                    </div>



                    {/* <div className=" ml-10 flex flex-col justify-start items-start" >
<span className="z-20 font-mono text-xl " >06</span>
<button
    onMouseEnter={() => {
        setfirst("about")
    }}
    onClick={toggleCart} className=" z-20  text-white text-5xl  font-serif font-[500]  " > <Link className="no-underline text-white" to="/about" >Events</Link></ button>
</div> */}

                    {/* ends 1*/}


                    {/* starts 2 */}
                    <div className="flex-col  justify-start items-center text-center " >
                        <div className="block md:hidden" >
                            {data.pathname === "/" ? <div onMouseOver={() => {
                                setfirst("home")
                            }} className="  flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl text-white" >01</span>
                                <Link className=" z-20 no-underline text-black" to="/" >
                                    <button onClick={toggleCart} className=" text-4xl md:text-5xl  font-serif font-[500]" > Home</ button>
                                </Link>
                            </div> : <div onMouseOver={() => {
                                setfirst("home")
                            }} className="  flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl " >01</span>
                                <button

                                    onClick={toggleCart} className="z-20 text-4xl md:text-5xl  font-serif font-[500]" > <Link className="no-underline text-white" to="/" >Home</Link></ button>
                            </div>}

                        </div>
                        <div className="block md:hidden" >
                            {data.pathname === "/about" ? <div className="ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl text-white " >02</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("about")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/about" >About Us</Link></ button>
                            </div> : <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl  " >02</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("about")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/about" >About Us</Link></ button>
                            </div>}

                        </div>

                        <div className="block md:hidden" >

                            {data.pathname === "/services" ? <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl text-white " >03</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("services")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/services" >Services</Link></ button>
                            </div> : <div className="ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl " >03</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("services")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/services" >Services</Link></ button>
                            </div>}
                        </div>


                        <div className="block md:hidden" >

                            {data.pathname === "/team" ? <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl text-white " >04</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("team")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/team" >Team</Link></ button>
                            </div> : <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl " >04</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("team")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/team" >Team</Link></ button>
                            </div>}

                        </div>
                        <div className="block md:hidden" >

                            {data.pathname === "/partners" ? <div className=" ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl text-white " >05</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("partners")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-black" to="/partbers" >Contact</Link></ button>
                            </div> : <div className="ml-0 md:ml-10 flex flex-col justify-start items-start" >
                                <span className="z-20 font-mono text-xl " >05</span>
                                <button
                                    onMouseEnter={() => {
                                        setfirst("partners")
                                    }}
                                    onClick={toggleCart} className=" z-20  text-white text-4xl md:text-5xl font-serif font-[500]  " > <Link className="no-underline text-white" to="/partners" >Contact</Link></ button>
                            </div>}

                        </div>


                        {/* <div className=" ml-10 flex flex-col justify-start items-start" >
<span className="z-20 font-mono text-xl " >06</span>
<button
    onMouseEnter={() => {
        setfirst("about")
    }}
    onClick={toggleCart} className=" z-20  text-white text-5xl  font-serif font-[500]  " > <Link className="no-underline text-white" to="/about" >Events</Link></ button>
</div> */}
                    </div>
                    {/* ends 2 */}
                </div>
            </div>
        </>
    )
}
