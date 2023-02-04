import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { GoDeviceMobile } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaChartLine } from "react-icons/fa";
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
import "../style/main.css"
import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import { BsCodeSlash } from "react-icons/bs";

import img6 from "../images/image3.jpeg"
import SideNav from './SideNav'
import Footer from "../components/footer"
import Particle from './Particle'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';






export default function All() {
    useEffect(() => {
        AOS.init({ duration: 800 });


    }, []);
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    // const location = useLocation()
    // const toe = useRef();
    // const scrollHide = document.getElementById("scroll-hide")



    // const toggleCart = () => {
    //     if (toe.current.classList.contains("-translate-x-full")) {
    //         toe.current.classList.remove("-translate-x-full")
    //         toe.current.classList.add("translate-x-0")
    //         if (scrollHide) {
    //             scrollHide.style.overflow = "hidden"
    //         }
    //     } else {
    //         if (toe.current.classList.contains("translate-x-0"))
    //             toe.current.classList.remove("translate-x-0")
    //         toe.current.classList.add("-translate-x-full")
    //         if (scrollHide) {
    //             scrollHide.style.overflow = "scroll"
    //         }

    //     }
    // }

    return (

        <div className=' overscroll-y-none ' >
            <SideNav />
            <div className='absolute' >
                <Btn />
                <Particle />
            </div>


            {/* SideNav Button starts */}
            {/* <div className=' z-20 fixed top-1/2 left-10' >
                <button onClick={toggleCart} className='text-purple-600' >Click</button>
            </div> */}
            {/* SideNav Button ends */}



            {/* SideNav starts */}
            {/* <div ref={toe} className=' z-10 fixed -translate-x-full transition-transform duration-1000 ease-in-out ' >
                <div className=' flex flex-col text-center md:flex-row md:text-current  md:flex justify-center items-center bg-red-500 w-screen h-screen ' >
                    
                    <button onClick={toggleCart} className="p-5 md:p-10" > <Link to="/" >Home</Link></button>
                    <button onClick={toggleCart} className="p-5 md:p-10" ><Link to="/about" >About</Link></button>
                    <button onClick={toggleCart} className="p-5 md:p-10" ><Link to="/services" >Services</Link></button>
                    <button onClick={toggleCart} className="p-5 md:p-10" ><Link to="/team" >Team</Link></button>
                    <button onClick={toggleCart} className="p-5 md:p-10" ><Link to="/partners" >Partners</Link></button>

                </div>
            </div> */}
            {/* SideNav ends */}



            {/* Main starts*/}

            <div className='h-[100vh] bg-black flex justify-center items-center ' >
                {/* <Particle /> */}
                <div className="   visible bg-black "  >
                    <span className=' block md:hidden text-center text-yellow-600  text-4xl  font-bold pl-2 pr-2 md:pl-0 md:pr-0 '  >LET'S JOIN</span>
                    <span className=' block md:hidden text-center text-white  text-2xl font-bold mt-4 pl-2 pr-2 md:pl-0 md:pr-0 '  >  The  New Universe Of Technology</span>
                    <span className=' hidden md:block text-center text-white  text-2xl font-bold pl-2 pr-2 md:pl-0 md:pr-0 '  > <span className='  text-2xl md:text-5xl   text-yellow-600 font-bold'>LET'S JOIN</span> The  New Universe Of Technology</span>
                    <p className='text-center text-white mt-4 text-xl'> We Develop Innovative <span className='text-yellow-600'> &</span> Creative Product <span className='text-yellow-600'> &</span> Services That Provide Total Communication <span className='text-yellow-600'> &</span> Information Solution</p>
                    <div className=' text-center mt-12 relative '>
                        <button className="  relative focus:outline-none text-white  bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 font-bold">learn More</button>
                        <button className=" relative text-black hover:text-stone-50 bg-white  focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2   dark:hover:bg-black focus:outline-none dark:focus:ring-blue-800 font-bold">Contact Us</button>
                        {/* <button className="  relative focus:outline-none text-white  bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 font-bold">About Us</button> */}
                    </div>


                </div>
            </div>
            {/* Main  ends*/}



            {/* About starts */}

            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                data-aos-duration="3000" className='pt-16' >  <div className="flex justify-center items-center text-5xl md:text-6xl " > <span className="    " ><hr className=" w-14 md:w-20  border-2 border-yellow-600 " /></span> About <span className="" ><hr className="  w-14 md:w-20 border-2  border-yellow-600 " /></span> </div> </div>
            <div className=' overflow-x: hidden; flex justify-center items-center align-middle ' >
                <section className="text-gray-600 body-font ">
                    <div className="   container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000" className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex items-center  justify-center  ">
                            <img className="object-cover object-center rounded" alt="hero" src={img7} />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center ">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-600">HASHSTACKDEVELOER
                            </h1>
                            <p className="mb-4 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                            {/* <div className="flex justify-center"> */}
                            {/* <button className="inline-flex text-white bg-yellow-600 border-2 py-2 px-6  hover:bg-white hover:border-yellow-600 hover:text-black rounded text-lg">About Us</button> */}
                            <Link to={"/about"} >
                                <button className="  relative focus:outline-none text-white  bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 font-bold">About Us</button>
                            </Link>
                            {/* <button className='bg-black text-white' >Hello</button> */}

                            {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
                            {/* <button type="submit" class="inline-block px-6 py-2 border-2 border-yellow-600 text-white bg-yellow-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                                    Subscribe
                                </button> */}
                            {/* </div> */}
                        </div>
                    </div>
                </section>
            </div>
            {/* About ends */}



            {/* Services starts */}
            <div className='' >

                {/* <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" className='pt-16' ><h1 className='text-center font-bold text-6xl '>OUR SERVICES</h1>
                </div> */}
                {/*  */}
                <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" className='pt-16' >  <div className="flex justify-center items-center text-5xl md:text-6xl " > <span className="    " ><hr className=" w-14 md:w-20  border-2 border-yellow-600 " /></span>Services <span className="" ><hr className="  w-14 md:w-20 border-2  border-yellow-600 " /></span></div>
                </div>

                {/*  */}
                <br />

                <p class="lg:w-2/3 px-5 text-center mx-auto leading-relaxed text-base ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">

                        <div className="flex flex-wrap -m-4">

                            <div data-aos="fade-right" data-aos-once="false" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    {/* <div className=' flex justify-center'> <span className='text-6xl text-black '><BsCodeSlash /> </span> </div> */}
                                    {/* <div className=' flex justify-center'> <span className='text-6xl text-black '><UseAnimations animation={activity} size={56} /></span> </div> */}
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '><BsCodeSlash /></span> </div>

                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3 text-black">WEBSITE DEVELOPMENT</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full overflow-x: hidden;  bg-yellow-600  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin  '>< GoDeviceMobile /> </span> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3">APPLIACTION DEVELOPMENT</h1>
                                    <p className="leading-relaxed mb-3 text-white ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full overflow-x: hidden;  bg-yellow-600   px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '>< HiShoppingBag /> </span> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-black mb-3 ">WORDPRESS & SHOPIFY</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>


                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-4 -m-4">
                            <div className="p-4 lg:w-1/3">
                                <div data-aos="fade-right" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className="h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '><FaChartLine /> </span> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3  text-black ">DIGITAL MARKERTING</h1>
                                    <p className="leading-relaxed mb-3 text-white ">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '><GiMagnifyingGlass /> </span> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  text-black mb-3">SEO</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>

                                </div>
                            </div>
                            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000" className="p-4 lg:w-1/3">
                                <div className="h-full overflow-x: hidden; bg-yellow-600 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <div className=' flex justify-center'> <span className='text-6xl text-black animate-spin '>< FaPencilAlt /> </span> </div>
                                    <br />

                                    <h1 className="title-font sm:text-2xl text-xl font-medium  text-black mb-3 ">GRAPHIC DESIGNING</h1>
                                    <p className="leading-relaxed mb-3 text-white">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>




            </div>
            {/* Services ends */}



            {/* Team starts */}
            <div className=''>
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-20">

                            {/* <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                                data-aos-duration="3000" className='' ><h1 className='text-center font-bold text-6xl '>OUR TEAM</h1>
                            </div> */}
                            {/*  */}
                            <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                                data-aos-duration="3000" className='pt-16' >  <div className="flex justify-center items-center text-5xl md:text-6xl " > <span className="    " ><hr className=" w-14 md:w-20  border-2 border-yellow-600 " /></span>Team <span className="" ><hr className="  w-14 md:w-20 border-2  border-yellow-600 " /></span></div>
                            </div>
                            {/*  */}
                            <br /><br />
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base pt-10">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                        </div>
                        <div class="flex flex-wrap -m-2">
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 bg-yellow-600 border p-4 rounded-lg relative">
                                    <img alt="team" class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Holden Caulfield</h2>
                                        <p class="text-white">UI Designer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 bg-yellow-600 border p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Henry Letham</h2>
                                        <p class="text-white">CTO</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 border bg-yellow-600 p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/88x88" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Oskar Blinde</h2>
                                        <p class="text-white">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 border bg-yellow-600 p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                                        <p class="text-white">DevOps</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 border bg-yellow-600 p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/94x94" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Martin Eden</h2>
                                        <p class="text-white">Software Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 border bg-yellow-600  p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/98x98" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Boris Kitua</h2>
                                        <p class="text-white">UX Researcher</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 bg-yellow-600 border p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/100x90" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Atticus Finch</h2>
                                        <p class="text-white">QA Engineer</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 bg-yellow-600 border p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Alper Kamu</h2>
                                        <p class="text-white">System</p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                                <div data-aos="flip-down" data-aos-duration="2000" class="h-full flex items-center border-gray-200 bg-yellow-600 border p-4 rounded-lg relative ">
                                    <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98" />
                                    <div class="flex-grow">
                                        <h2 class="text-gray-900 title-font font-medium">Rodrigo Monchi</h2>
                                        <p class="text-white">Product Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Team ends */}
            <br />
            {/* Parallex effect starts */}

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
            {/* Parallex effect ends */}
            <br />
            {/* Counter starts */}
            <div className='' >
                <section className="text-gray-600 body-font  md:h-[100vh] ">
                    <div className="container px-5 py-24 mx-auto">

                        {/*  */}

                        <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000" className=' pt-16 md:pt-0' >  <div className="flex justify-center items-center text-5xl md:text-6xl " > <span className="    " ><hr className=" w-14 md:w-20  border-2 border-yellow-600 " /></span> Counter <span className="" ><hr className="  w-14 md:w-20 border-2  border-yellow-600 " /></span></div>
                        </div>
                        {/*  */}
                        <div className="flex flex-col text-center w-full mb-20">
                            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1> */}

                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> <br /><br /> Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                        </div>


                        <div className="flex flex-wrap -m-4 text-center">
                            <div className="  p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" relative border-2 bg-yellow-600 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">
                                        <CountUp end={100} redraw={true}>
                                            {({
                                                countUpRef, start
                                            }) => (
                                                <VisibilitySensor onChange={start} delayedcall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>K</h2>
                                    <p className="leading-relaxed text-white">Downloads</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" relative border-2 bg-yellow-600 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">    <CountUp end={100} redraw={true}>
                                        {({
                                            countUpRef, start
                                        }) => (
                                            <VisibilitySensor onChange={start} delayedcall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>K</h2>
                                    <p className="leading-relaxed text-white">Users</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" relative border-2 bg-yellow-600 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">    <CountUp end={100} redraw={true}>
                                        {({
                                            countUpRef, start
                                        }) => (
                                            <VisibilitySensor onChange={start} delayedcall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></h2>
                                    <p className="leading-relaxed text-white">Files</p>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                                <div className=" relative border-2 bg-yellow-600 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-gray-900 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                    <h2 className="title-font font-medium text-3xl text-gray-900">    <CountUp end={100} redraw={true}>
                                        {({
                                            countUpRef, start
                                        }) => (
                                            <VisibilitySensor onChange={start} delayedcall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp></h2>
                                    <p className="leading-relaxed text-white">Places</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Counter ends */}

            {/* Testimonials starts */}

            {/* Testimonials ends */}

            {/* testimonial 2 starts */}

            <div className='bg-white h-[100vh] flex ' >



                {/* <AwesomeSlider className='bg-white  ' bullets={false} interval={1000} infinite={true} autoplay={true} startup={true} buttons={true} >
                    <div style={{ background: "white" }} >  <section class="text-gray-600 body-font">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                                
                                <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="  text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section></div>
                    <div style={{ background: "white" }} >  <section class="text-gray-600 body-font">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                               
                                <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="  text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section></div>
                    <div style={{ background: "white" }}  >  <section class="text-gray-600 body-font">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            
                                <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="  text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section></div>
                    <div style={{ background: "white" }} >  <section class="text-gray-600 body-font">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                               
                                <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                <p class="  text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>
                    </section></div>
                </AwesomeSlider> */}

                <AutoplaySlider
                    play={true}
                    cancelOnInteraction={false} // should stop playing on user interaction
                    interval={5000}
                    bullets={false}
                    fillParent={false}
                    buttons={false}
                >

                    <div style={{ background: "none" }} >
                        <div style={{ background: "none" }} >  <section class="  text-gray-600 body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                                    <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                    <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                    <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                    <p class="  text-gray-500">Senior Product Designer</p>
                                </div>
                            </div>
                        </section></div>
                    </div>
                    <div style={{ background: "none" }} >
                        <div style={{ background: "white" }} >  <section class="text-gray-600 body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                                    <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                    <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                    <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                    <p class="  text-gray-500">Senior Product Designer</p>
                                </div>
                            </div>
                        </section></div>
                    </div>
                    <div style={{ background: "none" }} >
                        <div style={{ background: "none" }} >  <section class="text-gray-600 body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                                    <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                    <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                    <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                    <p class="  text-gray-500">Senior Product Designer</p>
                                </div>
                            </div>
                        </section></div>
                    </div>
                    <div style={{ background: "none" }} >
                        <div style={{ background: "none" }} >  <section class="text-gray-600 body-font">
                            <div class="container px-5 py-10 mx-auto">
                                <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">

                                    <img alt="testimonial" class="w-32 h-32 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={img6}></img>
                                    <p class="leading-relaxed text-lg">Edison  cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
                                    <span class="inline-block h-1 w-10 rounded bg-yellow-600 mt-8 mb-6"></span>
                                    <h2 class="  text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                                    <p class="  text-gray-500">Senior Product Designer</p>
                                </div>
                            </div>
                        </section></div>
                    </div>
                </AutoplaySlider>
            </div>


            {/* testimonial 2 ends */}

            {/* Footer starts */}
            <Footer />
            {/* Footer ends */}


        </div >
    )
}
