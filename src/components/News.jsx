import React from 'react'
import { Fragment, useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import Particle from './Particle'
import Footer from "./footer"

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"
import { Link } from 'react-router-dom';

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
                    data-aos-duration="2000" className='text-center text-white  text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>News </span> </h1>
            </div>
            {/* <div className='flex justify-center items-center h-screen w-screen '> */}
            {/* <div className='  '>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <div className='  '>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Raclette Blueberry Nextious Level</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Ennui Snackwave Thundercats</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 lg:w-1/3">
                                <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Selvage Poke Waistcoat Godard</h1>
                                    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to='./Blank.jsx' className="text-indigo-500 inline-flex items-center">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                        <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                <circle cx="12" cy="12" r="3"></circle>
                                            </svg>1.2K
                                        </span>
                                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>6
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div> */}

            {/* starts */}
            <div className='' >

                {/* <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
    data-aos-duration="3000" className='pt-16' ><h1 className='text-center font-bold text-6xl '>OUR SERVICES</h1>
</div> */}
                {/*  */}

                {/*  */}
                <br />

                {/* <p class="lg:w-2/3 px-5 text-center mx-auto leading-relaxed text-base ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="flex flex-wrap -m-4">




                            {/* div1 starts */}
                            {/* onMouseEnter={() => { console.warn("Enter") }} onMouseLeave={() => { console.warn("Leave") }} */}

                            {/* <div className='w-[90vw] h-[55.4vh] bg-pink-500  lg:w-1/3 ' >
                <div data-aos="fade-right" data-aos-once="false" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className=" ">
                    <div className=" hover:bg-black h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                        <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '><BsCodeSlash /></span> </div>

                        <br />

                        <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3 text-black">WEBSITE DEVELOPMENT</h1>
                        <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                    </div>
                </div>
            </div> */}

                            {/* div1 ends */}

                            {/* div2 starts */}

                            <div data-aos="fade-right" data-aos-once="false" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3  ">
                                <div className=" shadow-2xl service1 h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    {/* <div className=' flex justify-center'> <span className='text-6xl text-black '><BsCodeSlash /> </span> </div> */}
                                    {/* <div className=' flex justify-center'> <span className='text-6xl text-black '><UseAnimations animation={activity} size={56} /></span> </div> */}
                                    <div className=' flex justify-center'>  </div>

                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3 text-black">WEBSITE DEVELOPMENT</h1>

                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>
                                </div>
                            </div>

                            {/* div2 ends */}

                            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="service1 h-full overflow-x: hidden;  bg-yellow-600  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">APPLICATION DEVELOPMENT</h1>
                                    <p className="leading-relaxed mb-3 text-white ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className=" service1 h-full overflow-x: hidden;  bg-yellow-600   px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3 ">WORDPRESS & SHOPIFY</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-4 -m-4">
                            <div className="p-4 lg:w-1/3">
                                <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className=" service1 h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'></div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3  text-black ">DIGITAL MARKETING</h1>
                                    <p className="leading-relaxed mb-3 text-white ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full service1  overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  text-black mb-3">SEO</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>
                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full service1 overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'>  </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  text-black mb-3 ">GRAPHIC DESIGNING</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                                    <Link to={"./Blank.jsx"} >  <button className=" relative service1_btn text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Learn More</button> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
            {/* ends */}




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