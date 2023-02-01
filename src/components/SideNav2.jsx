import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UseAnimations from "react-useanimations";
import menu4 from 'react-useanimations/lib/menu4';
import React, { useRef, useEffect, useState } from 'react'

export default function SideNav() {

    const [side, setside] = useState()
    const [delay1, setdelay1] = useState(800)
    // const [delay2, setdelay2] = useState(800)
    // const [delay3, setdelay3] = useState(800)

    const [anim, setAnim] = useState(null)
    const [anim2, setAnim2] = useState(null)
    const [anim3, setAnim3] = useState(null)
    const [anim4, setAnim4] = useState(null)
    const [anim5, setAnim5] = useState(null)




    useEffect(() => {
        AOS.init({ duration: 800 });
        setside("fade-down")
        setdelay1(2000)
        // setdelay1(1000)
        // alert("watch our website in darkness")
    }, []);

    const pip1 = "none"
    const pip2 = "fade-down"


    console.warn(side)
    // console.warn(delay)


    const toe = useRef();
    const mit = useRef();
    const scrollHide = document.getElementById("scroll-hide")



    const toggleCart = () => {
        if (toe.current.classList.contains("-translate-x-full")) {
            toe.current.classList.remove("-translate-x-full")
            toe.current.classList.add("translate-x-0")
            setTimeout(() => {
                setside(pip1)
                // setdelay(300)
            }, [500]);


            if (scrollHide) {
                scrollHide.style.overflow = "hidden"
            }
        } else {
            if (toe.current.classList.contains("translate-x-0"))
                toe.current.classList.remove("translate-x-0")
            toe.current.classList.add("-translate-x-full")

            setside(pip2)
            // setdelay(300)

            if (scrollHide) {
                scrollHide.style.overflow = "scroll"
            }

        }
    }

    // window.addEventListener("scroll", function () {
    //     if (window.pageYOffset > 200) {
    //         mit.current.classList.remove("translate-x-0")
    //         mit.current.classList.add("translate-x-20")
    //     }
    //     else {
    //         mit.current.classList.remove("translate-x-20")
    //         mit.current.classList.add("translate-x-0")
    //     }
    // });

    window.addEventListener("wheel", function (e) {
        if (e.deltaY > 0) {
            mit.current.classList.remove("translate-x-0")
            mit.current.classList.add("translate-x-20")
        } else {
            mit.current.classList.remove("translate-x-20")
            mit.current.classList.add("translate-x-0")
        }
    })

    return (
        <>

            {/* {
                anim2 === true ? (console.warn("True")) : (console.warn("False"))
            }
            {
                anim3 === true ? (console.warn("True")) : (console.warn("False"))
            }
            {
                anim4 === true ? (console.warn("True")) : (console.warn("False"))
            } */}
            <div ref={mit} className=' z-20 fixed top-5 right-5 md:top-1/2 md:left-10 translate-x-0  md:translate-x-0 transition-transform duration-1000 ease-in-out '  >
                <button onClick={toggleCart}  >  <UseAnimations fillColor='white' strokeColor="#ffffff" animation={menu4} size={50} /></button>
            </div>

            <div ref={toe} className=' z-10  fixed -translate-x-full transition-transform duration-1000 ease-in-out ' >
                <div className="absolute  " >
                    {
                        anim5 === true ? <div className="flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[100px] opacity-10  " >Home</h1></div></div> : (console.warn("False"))
                    }
                    {
                        anim === true ? <div className="flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[100px] opacity-10  " >About</h1></div></div> : (console.warn("False"))
                    }
                    {
                        anim2 === true ? <div className="flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[60px] opacity-10  " >Services</h1></div></div> : (console.warn("False"))
                    }
                    {
                        anim3 === true ? <div className="flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[100px] opacity-10  " >Team</h1></div></div> : (console.warn("False"))
                    }
                    {
                        anim4 === true ? <div className="flex justify-center items-center h-screen w-screen" ><div   ><h1 className="text-white text-7xl md:text-9xl tracking-[60px] md:tracking-[60px] opacity-10  " >Contact</h1></div></div> : (console.warn("False"))
                    }



                </div>
                <div className=' flex flex-col text-center md:flex-row md:text-current  md:flex justify-center items-center bg-gradient-to-tl from-yellow-600 to-black w-screen h-screen ' >
                    {/* <div className='flex justify-center items-center bg-red-500 ' > */}
                    < button onMouseOver={() => {
                        setAnim5(true)
                    }} onMouseLeave={() => {
                        setAnim5(false)
                    }} data-aos={side} data-aos-duration={delay1} onClick={toggleCart} className="p-4 md:p-10 text-white " > <Link to="/" >Home</Link></ button>
                    <button onMouseOver={() => {
                        setAnim(true)
                    }} onMouseLeave={() => {
                        setAnim(false)
                    }} data-aos={side} data-aos-duration={delay1} onClick={toggleCart} className="p-4 md:p-10 text-white " ><Link to="/about" >About</Link></button>
                    <button onMouseOver={() => {
                        setAnim2(true)
                    }} onMouseLeave={() => {
                        setAnim2(false)
                    }} data-aos={side} data-aos-duration={delay1} onClick={toggleCart} className="p-4 md:p-10 text-white" ><Link to="/services" >Services</Link></button>
                    <button onMouseOver={() => {
                        setAnim3(true)
                    }} onMouseLeave={() => {
                        setAnim3(false)
                    }} data-aos={side} data-aos-duration={delay1} onClick={toggleCart} className="p-4 md:p-10 text-white" ><Link to="/team" >Team</Link></button>
                    <button onMouseOver={() => {
                        setAnim4(true)
                    }} onMouseLeave={() => {
                        setAnim4(false)
                    }} data-aos={side} data-aos-duration={delay1} onClick={toggleCart} className="p-4 md:p-10 text-white" ><Link to="/partners" >Contact</Link></button>

                </div>
            </div>
        </>
    )
}
