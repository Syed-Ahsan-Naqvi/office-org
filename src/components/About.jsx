import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Particle from './Particle'
import img3 from "../images/image3.jpeg"
import SideNav from './SideNav'
import Btn from "./Btn"

import img1 from "../images/hash1.jpeg"
import img2 from "../images/hash2.jpeg"
import img12 from "../images/hash3.jpeg"
import img10 from "../images/hash4.jpeg"
import img9 from "../images/hash5.jpeg"
import img4 from "../images/hash6.jpeg"
import img13 from "../images/hash7.jpeg"
import img14 from "../images/hash8.jpeg"
import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"
import Footer from "../components/footer"
// import { SiGmail } from "react-icons/si";
// import { RiInstagramFill } from "react-icons/ri";
// import { BsCodeSlash, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
// import PhotoAlbum from "react-photo-album";


export default function About() {
    useEffect(() => {
        AOS.init({ duration: 800 });


    }, []);



    // const photos = [
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 500, height: 500 },
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 1200, height: 500 },
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 500, height: 500 },
    //     // { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 800, height: 1000 },
    // ];

    // const pics = [
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 800, height: 600 },
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 1600, height: 900 },
    //     { src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg", width: 1600, height: 900 },
    // ];


    return (
        // <div className='w-screen h-screen bg-black' >
        <div>
            <div className=''>
                <div className='relative z-20' >
                    <SideNav />
                </div>
                <div className='absolute' >
                    <div className='absolute z-10' >
                        <Btn />
                    </div>
                    <Particle />
                </div>


                <div className='bg-black h-[100vh] flex justify-center items-center '>
                    <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='text-center text-white  text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>ABOUT US </span> </h1>
                </div>
                <section className="  text-gray-600 body-font">

                    <div className=' ' >
                        {/* <Particle2 /> */}




                        <div className=" container mx-auto flex px-5 py-24 items-center justify-center flex-col">

                            <img data-aos="flip-left" data-aos-easing="ease-out-cubic"
                                data-aos-duration="3000" className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={img3} />
                            <div className="text-center lg:w-2/3 w-full">
                                <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to HashStack Developers!</h1>
                                <p data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className="mb-8 leading-relaxed">

                                    HashStack Developers where innovation meets technology seamlessly. We are not just a software company, We are the architects of digital solutions that are redefining industries. Our team is dedicated to turning ideas into reality by creating custom software that helps businesses face the challenges of tomorrow. With our ongoing commitment to excellence and a passion for pushing the boundaries, we are experts at turning content into cutting-edge applications. At HashStack Developers, we believe that code not only works flawlessly, but also enriches the user experience.
                                    Join us on a journey of creativity, technology and infinity. Your vision is our guide.

                                </p>
                                {/* <div data-aos="fade-up" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000" className="flex justify-center">
                                    <button data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="  relative focus:outline-none text-white  bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-700 font-bold" >Button</button>
                                    <button data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="  relative focus:outline-none text-white  bg-yellow-600 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300  rounded-lg text-xl px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 font-bold">Button</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>



                {/* <div data-aos="flip-down" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='mt-40'><h1 className='text-center font-bold text-6xl mt-10 '>OUR TEAM</h1>
                </div> */}

                {/*  */}
                <div data-aos="zoom-in" data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000" className='pt-16' >  <div className="flex justify-center items-center text-5xl md:text-6xl " > <span className="    " ><hr className=" w-14 md:w-20  border-2 border-yellow-600 " /></span> Gallery <span className="" ><hr className="  w-14 md:w-20 border-2  border-yellow-600 " /></span></div>
                </div>
                {/*  */}

                {/* <section className="  text-gray-600 body-font">
                    <div className="  container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">CH Haseeb Mehmood</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/421x261" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Muhammad Mateen  Imran</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Syed Ahsan Naqvi</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Syed Haris Mehmood</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$18.40</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Muhammad Junaid</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a href='/' className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
                                </a>
                                <div className="mt-4">
                                    <h3 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                    <p data-aos="flip-down" data-aos-easing="ease-out-cubic"
                                        data-aos-duration="1000" className="mt-1">$18.40</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="   text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Welcome to HashStack Developers Gallery</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Visual response for HashStack developers. Our gallery is a pixel symphony that reveals the alchemy of creativity and technology. Get an in-depth picture of our software company where innovation happens.</p>
                        </div>
                        <div className=" flex flex-wrap -m-4">
                            <div className="lg:w-1/4 sm:w-1/2 p-4 ">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img1} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">THE INDEPENDENCE DAY</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Independence Day</h1> */}
                                        <p className="leading-relaxed">Happy Independence Day! On this special day, we celebrate the spirit of freedom and the sacrifices of countless people who fought tirelessly for the freedom of our country. This is the time to reflect.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2   p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img2} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">THE NEW YEAR DAY</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">When the clock strikes midnight and the calendar turns over a new page, we wake up at the start of a new year filled with hope and potential. The New Year is a time of renewal and new beginnings, setting new goals and embracing new experiences.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img12} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">THE QUAID DAY</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">Quaid Day, also known as Quaid Azam Day, is a holy holiday to commemorate the extraordinary life and leadership of Pakistan's founding father, Muhammad Ali Jinnah.</p>
                                    </div>
                                </div>
                            </div>
                            {/* starts 1 */}
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img4} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">RAMADAN KAREEM</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">Ramadan is a holy and holy month celebrated by Muslims all over the world. This is a time for spiritual reflection, self-discipline, and more commitment. During the month of Ramadan, Muslims fast from morning to evening without eating or drinking.</p>
                                    </div>
                                </div>
                            </div>
                            {/* ends 1 */}
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img9} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">Eid Milad Un Nabi</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">Eid Milad un-Nabi, also known as Mawlid al-Nabi or the Prophet's Birthday, is a joyous occasion celebrated by Muslims to honor and commemorate the birth of the Prophet Muhammad (peace be upon him). It is a time of spiritual reflection, gratitude, and expressions of love for the Prophet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img10} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">THE ALLAMA IQBAL DAY</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">Allama Iqbal Day commemorates the poet, philosopher and intellectual Dr. It is a day to honor and honor Allama Muhammad Iqbal.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img13} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">HASHSTACK SERVICES</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">HashStack Developers, where innovation merges seamlessly with technology. We're not just a software house; we're architects of digital solutions that redefine industries.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img14} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-base title-font font-medium text-indigo-500 mb-1">THE HASHSTACK</h2>
                                        {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                        <p className="leading-relaxed">HashStackDevelopers is a combination of innovation and performance. Our expert team produces digital solutions according to your needs. Join us to bring your ideas to life and stay one step ahead of technological developments.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img1} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="lg:w-1/4 sm:w-1/2 p-4">
                                <div className="flex relative w-full h-[430px] sm:h-[60vh] ">
                                    <img alt="gallery" className="absolute inset-0 w-full h-full " src={img1} />
                                    <div className="px-8 py-10 relative  w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </section>
                {/* 
                <section className='px-5 hidden md:block '  >
                    <PhotoAlbum layout="rows" photos={photos} />
                    <br />
                    <PhotoAlbum layout="rows" photos={photos} />
                </section>
 */}


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
            {/* Footer starts */}
            <div className='h-auto w-auto'>


                <Footer />



            </div>
            {/* Footer ends */}
        </div>

    )
}