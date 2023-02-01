import React from 'react'
import SideNav from './SideNav'
import Btn from './Btn'
// import 'bootstrap/dist/css/bootstrap.min.css';

import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"

import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { BsCodeSlash, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Teamus() {
    return (
        // <div className='w-screen h-screen bg-black' >
        <div>
            <div className='  '>
                <SideNav />
                <div className='absolute' >
                    <Btn />
                </div>

                <div className='bg-black h-screen'>
                    <h1 className='text-center text-white pt-64 text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>OUR TEAM</span> </h1>
                </div>

                <section className="  bg-yellow-600 text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                        </div>
                        <div className="z-10 flex flex-wrap -m-4">
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/600x360" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/601x361" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/603x363" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/602x362" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/605x365" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://dummyimage.com/606x366" />
                                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


            </div>
            <div className='  flex justify-center pt-10 pb-10 pr-5 pl-5 md:pl-0 md:pr-0' >
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
            {/* Footer starts */}
            <div className='h-auto w-auto'>
                <div className='h-1/2 w-screen pt-14 pb-14 grid justify-center bg-yellow-600' >
                    <div className='text-center' >
                        {/* <p className='text-3xl'> HashStackDeveloper</p>
                   <p className='text-2xl'>Main Akbar Market Canal Bank Housing ibn-e-saeed Block Lahore, Pakistan</p>
                   <P>hashstackdeveloper@gmail.com</P> */}
                        <div className=''><img src="" alt="" /></div>
                    </div>
                    <br />
                    <div className='grid justify-center' >
                        <div className='grid' >
                            <input type="text" placeholder='Email' />
                            <br />
                            <textarea type="text" placeholder='Your Message' />
                            {/* <div> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div> */}
                            <br />

                        </div>
                        <div className=' text-center inline bg-blue-600 ' >
                            <button>Button</button>
                        </div>
                    </div>
                    <br />
                    <div className='flex justify-around' >
                        <div><SiGmail /></div>
                        <div >< BsFacebook /></div>
                        <div><RiInstagramFill /></div>
                        <div><BsTwitter /></div>
                        <div><BsLinkedin /></div>
                    </div>

                </div>




            </div>
            {/* Footer ends */}
        </div>

    )
}