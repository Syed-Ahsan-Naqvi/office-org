import React from 'react'
import { Fragment, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import Particle from './Particle'
import Footer from "../components/footer"
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"

export default function Example() {
    useEffect(() => {
        AOS.init({ duration: 800 });


    }, []);
    const [open, setOpen] = useState(1);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

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
            <div className='flex justify-center items-center h-screen w-screen '>
                <div>
                    <Fragment>
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5}>
                            <AccordionHeader onClick={() => handleOpen(5)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 6}>
                            <AccordionHeader onClick={() => handleOpen(6)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                {/* We&apos;re not always in the position that we want to be at.
                            We&apos;re constantly growing. We&apos;re constantly making mistakes.
                            We&apos;re constantly trying to express ourselves and actualize our
                            dreams. */}
                                hello world
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
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