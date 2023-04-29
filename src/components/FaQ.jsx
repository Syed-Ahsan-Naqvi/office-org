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
            {/* <div className='flex justify-center items-center h-screen w-screen '> */}
            <div className=' h-screen w-screen '>
                <div>
                    <div id="accordionFlushExample">
                        <div
                            class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 class="mb-0" id="flush-headingOne">
                                <button
                                    class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                    <span
                                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-6 w-6">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                class="!visible border-0"
                                data-te-collapse-item
                                data-te-collapse-show
                                aria-labelledby="flush-headingOne"
                                data-te-parent="#accordionFlushExample">
                                <div class="px-5 py-4">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the
                                    <code>.accordion-flush</code> class. This is the first item's
                                    accordion body.
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 class="mb-0" id="flush-headingTwo">
                                <button
                                    class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-collapse-collapsed
                                    data-te-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Accordion Item #2
                                    <span
                                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-6 w-6">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                class="!visible hidden border-0"
                                data-te-collapse-item
                                aria-labelledby="flush-headingTwo"
                                data-te-parent="#accordionFlushExample">
                                <div class="px-5 py-4">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the
                                    <code>.accordion-flush</code> class. This is the second item's
                                    accordion body. Let's imagine this being filled with some actual
                                    content.
                                </div>
                            </div>
                        </div>
                        <div
                            class="rounded-none border border-b-0 border-l-0 border-r-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 class="mb-0" id="flush-headingThree">
                                <button
                                    class="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                    type="button"
                                    data-te-collapse-init
                                    data-te-collapse-collapsed
                                    data-te-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Accordion Item #3
                                    <span
                                        class="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="h-6 w-6">
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </span>
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                class="!visible hidden"
                                data-te-collapse-item
                                aria-labelledby="flush-headingThree"
                                data-te-parent="#accordionFlushExample">
                                <div class="px-5 py-4">
                                    Placeholder content for this accordion, which is intended to
                                    demonstrate the
                                    <code>.accordion-flush</code> class. This is the third item's
                                    accordion body. Nothing more exciting happening here in terms of
                                    content, but just filling up the space to make it look, at least
                                    at first glance, a bit more representative of how this would look
                                    in a real-world application.
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Fragment>
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)}>
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2}>
                            <AccordionHeader onClick={() => handleOpen(2)}>
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                               
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3}>
                            <AccordionHeader onClick={() => handleOpen(3)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 4}>
                            <AccordionHeader onClick={() => handleOpen(4)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                             
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 5}>
                            <AccordionHeader onClick={() => handleOpen(5)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                
                                hello world
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 6}>
                            <AccordionHeader onClick={() => handleOpen(6)}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                            
                                hello world
                            </AccordionBody>
                        </Accordion>
                    </Fragment> */}
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