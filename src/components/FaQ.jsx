import React from 'react'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import Particle from './Particle'
import Footer from "../components/footer"
// import {
//     Accordion,
//     AccordionHeader,
//     AccordionBody,
// } from "@material-tailwind/react";

import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
export default function Example() {
    useEffect(() => {
        AOS.init({ duration: 800 });


    }, []);
    // const [open, setOpen] = useState(1);

    // const handleOpen = (value) => {
    //     setOpen(open === value ? 0 : value);
    // };

    return (

        <div>
            <div className='absolute' >
                <Btn />
                <Particle />


            </div>
            <div className='bg-black h-[100vh] flex justify-center items-center '>
                <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='text-center text-white  text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>FAQ' s </span> </h1>
            </div>
            {/* <div className='flex justify-center items-center h-screen w-screen '> */}
            <div className='  '>
                <div>

                    {/* <h2>Animated Accordion</h2> */}
                    {/* <p>Click on the buttons to open the collapsible content.</p> */}

                    <button class="accordion">Section 1</button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button class="accordion">Section 2</button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <button class="accordion">Section 3</button>
                    <div class="panel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <div className='  flex justify-center pt-10 pb-10 pr-5 pl-5 md:pl-0 md:pr-0  items-center md:h-[100vh] ' >
                <div >
                    <div className='block md:hidden' >
                        <img data-aos="fade-up" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" src={img8} alt="" />
                        {/* <img src={img3} alt="" /> */}
                    </div>
                    <div className='hidden md:block '>
                        <div className='flex' >
                            <img data-aos="fade-right" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={img7} alt="" />
                            <img data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" src={img5} alt="" />

                        </div>
                    </div>
                </div>
            </div >
            <div className='h-auto w-auto'>

                <Footer />
            </div>
        </div>

    );
}