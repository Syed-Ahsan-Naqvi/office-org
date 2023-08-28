import React from 'react'
import SideNav from './SideNav'
import Btn from './Btn'

import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"
// import Particle from './Particle'
// import Particle2 from './Particle2'

import Footer from "../components/footer"

import Particle from './Particle'


export default function Contact() {
    return (
        // <div classNameNameNameName='w-screen h-screen bg-black' >
        <div className='overflow-hidden' >
            <SideNav />
            <div className='absolute' >
                <Btn />
                <Particle />

            </div>

            <div className='bg-black h-screen flex justify-center items-center '>
                <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className=' text-white text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>CONTACT US </span> </h1>
                {/* <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=650&amp;height=350&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
            </div>

            <section className="text-gray-600 body-font relative">

                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className=" w-[100vw] h-[80vh] md:h-[100vh] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        {/* <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe> */}
                        <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4152.534509326045!2d8.261345145567763!3d49.9904460696626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sObere%20Zahlbacher%20Stra%C3%9Fe%2056%20%20City%20Mainz%20%2F55131%20%2F%20%20Stat%20%2FRheinland-Pfalz%20%20Germany!5e0!3m2!1sen!2s!4v1692173051610!5m2!1sen!2s" width="100%" height="100%" frameborder="0" ></iframe>


                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">

                            <div className="lg:w-1/2 px-6">
                                <h2 className=" hidden md:block title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className=" hidden md:block mt-1">Obere Zahlbacher Straße 56 City Mainz /55131 / Stat /Rheinland-Pfalz, Germany  </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">COUNTRY</h2>
                                <p className="leading-relaxed">Germany</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 ">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">hashstackdevelopers.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+49 173 3819311</p>
                            </div>
                        </div>


                    </div>
                    <div className=" mt-24 md:mt-auto w-[100vw] h-[80vh] md:h-[100vh] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        {/* <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe> */}
                        <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.7477887511473!2d-1.1738901111491706!3d52.969344538902966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c19367680e57%3A0xf6c384a213e4b0d4!2s318%20Radford%20Rd%2C%20Nottingham%20NG7%205GP%2C%20UK!5e0!3m2!1sen!2s!4v1692173200874!5m2!1sen!2s" width="100%" height="100%" frameborder="0" ></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className=" hidden md:block title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className=" hidden md:block mt-1">318 RADFORD Road Nottingham NG75GP, Uk </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">COUNTRY</h2>
                                <p className="leading-relaxed">United Kingdom</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">hashstackdevelopers.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+44 7405 000045</p>
                            </div>
                        </div>


                    </div>
                    {/* <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div> */}




                </div>
            </section>
            <section className="text-gray-600 body-font relative">
                <div className="container px-2 md:px-5  mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" w-[100vw] h-[80vh] md:h-[100vh] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className=" hidden md:block title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className=" hidden md:block mt-1">HashStack Developers, Mian Akber Market ibn-e-Saeed Block Canal Bank Housing Society, Harbanspura, Lahore</p>
                            </div>
                            <div className="lg:w-1/2 px-6 md:px-0  mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">COUNTRY</h2>
                                <p className="leading-relaxed">Pakistan</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 ">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">hashstackdevelopers@gmail.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+92 300 1678560</p>
                            </div>
                        </div>


                    </div>
                    {/* <div className=" mt-24 md:mt-auto w-[100vw] h-[80vh] md:h-[100vh] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

                        <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className=" hidden md:block title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className=" hidden md:block mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs ">COUNTRY</h2>
                                <p className="leading-relaxed">United Kingdom</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 ">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">example@email.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>


                    </div> */}


                </div>

            </section>

            <div>
                <div className='flex justify-center  ' >

                    {/* <div className="lg:w-1/2 md:w-1/2 bg-white flex  flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"> */}
                    <div className="lg:w-1/2 md:w-1/2 bg-white flex  flex-col  px-3 md:p-px  w-full md:py-8 mt-24 ">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Deliver</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </div>


            {/* <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className=" w-[100vw] h-[80vh] md:h-[100vh] lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe className="absolute inset-0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?&amp;hl=en&amp;q=hashstack developers &amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="100%" frameborder="0"></iframe>
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className=" hidden md:block title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className=" hidden md:block mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <p className="text-indigo-500 leading-relaxed">example@email.com</p>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section> */}

            <div className=' mt-24 md:mt-auto flex justify-center pt-10 pb-10 pr-5 pl-5 md:pl-0 md:pr-0 items-center md:h-[100vh] ' >
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

            {/* footer starts */}

            <div className='h-auto w-auto'>


                <Footer />




            </div>

            {/* footer ends */}


        </div>


    )
}
