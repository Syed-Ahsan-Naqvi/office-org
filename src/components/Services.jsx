import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import SideNav from './SideNav';

// import wal1 from "../images/wal1.avif"
import ser1 from "../images/ser1.jpeg"
import ser2 from "../images/ser2.jpeg"
import ser3 from "../images/ser3.jpeg"
import ser4 from "../images/ser4.jpeg"
import ser5 from "../images/ser5.jpeg"
import ser7 from "../images/ser7.jpeg"
import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"




import Footer from "../components/footer"

import Particle from './Particle'


export default function ServicesPage() {
    useEffect(() => {
        AOS.init({ duration: 800 });


    }, []);
    return (
        <>

            {/* <div className='w-screen h-screen bg-black' > */}
            <div >
                <div className='  '>
                    <SideNav />
                    <div className='absolute' >
                        <div className="text-yellow-600" >
                            <Btn />
                            <Particle />
                        </div>
                    </div>


                    <div className='bg-black h-[100vh] flex justify-center items-center '>
                        <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className='text-center text-white  text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>OUR SERVICES</span> </h1>
                    </div>




                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">

                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">Welcome to HashStack Developers Services</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hello! At HashStack Developers, we are committed to moving your business forward. Our services range from web development and mobile applications to software solutions, ensuring you are always at the forefront of innovation. Experience seamless UI/UX design, powerful security and strategic guidance on your digital journey. Let's turn your ideas into reality together.</p>
                            </div>

                            <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-yellow-600">Website Development</h1>
                                    <div className="leading-relaxed">Our team is skilled in designing and building user-friendly and responsive web applications that offer a great user experience. With HashStackDevelopers, your online presence will be both visible and functional.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">30+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5+</h2>
                                    <p className="leading-relaxed">Active Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">25+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.8</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser3} alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">Application Development</h1>
                                    <div className="leading-relaxed">Harness the power of mobile technology with our expertise in creating interactive and effective mobile apps. Whether iOS, Android or cross-platform, HashStackDevelopers makes your app stand out in the crowded app environment.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4+</h2>
                                    <p className="leading-relaxed">Active Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">16+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.7</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser2} alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-yellow-600">Wordpress & Shopify</h1>
                                    <div className="leading-relaxed">Learn the power of WordPress and Shopify with HashStackDevelopers. Our team specializes in creating beautiful, functional websites in the world's most popular content management systems. From custom themes and plugins to seamless eCommerce integration, we take your online presence to new heights.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">30+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">3+</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">27+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.8</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser7} alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">Digital Marketing</h1>
                                    <div className="leading-relaxed">Dynamic digital marketing solutions from HashStackDevelopers. Our strategy covers search engine optimization, social media, content creation and analytics to ensure your online presence shines and delivers real results. Learn the power of a tailored marketing plan that connects, connects and moves your business forward.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">50+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">30+</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.8</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser4} alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-yellow-600">Search Engine Optimization</h1>
                                    <div className="leading-relaxed">HashStack developers know SEO. We optimize your digital presence to reach the top search rankings, drive organic growth and increase your reach. Manage search results and connect with your audience like never before.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5+</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">15+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.7</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser1} alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-gray-900">Graphics Designing</h1>
                                    <div className="leading-relaxed">Graphic design capabilities of HashStackDevelopers. We produce visual solutions that attract, communicate and enhance your brand. Let's bring your vision to life with visual design</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">50+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">10+</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">40+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4.9</h2>
                                    <p className="leading-relaxed">Service Ranking</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className=" relative object-cover object-center w-full h-full" src={ser5} alt="stats" />
                            </div>
                        </div>
                    </section>


                </div>
                <div className='  flex justify-center pt-10 pb-10 pr-5 pl-5 md:pl-0 md:pr-0 items-center md:h-[100vh] ' >
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
        </>
    )
}
