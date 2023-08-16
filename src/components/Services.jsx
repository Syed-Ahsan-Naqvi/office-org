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
                            data-aos-duration="2000" className='text-center text-white  text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>Our Services</span> </h1>
                    </div>




                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">

                            <div className="flex flex-col text-center w-full mb-20">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-600">Welcome to HashStack Developers Services</h1>
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Greetings! At HashStack Developers, we're dedicated to propelling your business forward. Our range of services, from web development and mobile apps to custom software solutions, ensures you stay at the forefront of innovation. Experience seamless UI/UX design, robust security, and strategic guidance on your digital journey. Let's turn your ideas into reality – together.</p>
                            </div>

                            <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-3xl mb-2 text-yellow-600">Website Development</h1>
                                    <div className="leading-relaxed">POur skilled team designs and develops user-friendly and responsive web applications that deliver exceptional user experiences across devices. With HashStackDevelopers, your online presence will be both visually appealing and highly functional.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">150+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">45</h2>
                                    <p className="leading-relaxed">Active Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">75+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5 star</h2>
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
                                    <div className="leading-relaxed">Harness the power of mobile technology with our expertise in developing captivating and feature-rich mobile applications. Whether it's iOS, Android, or cross-platform, HashStackDevelopers ensures your app stands out in the crowded app landscape.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">90+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">28</h2>
                                    <p className="leading-relaxed">Active Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">65</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
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
                                    <div className="leading-relaxed">Experience the power of WordPress & Shopify with HashStackDevelopers. Our team specializes in creating stunning, functional websites on the world's most popular content management system. From custom themes and plugins to seamless e-commerce integration, we elevate your online presence to new heights.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">300+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">53</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
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
                                    <div className="leading-relaxed">HashStackDevelopers' dynamic digital marketing solutions. Our strategies encompass SEO, social media, content creation, and analytics to ensure your online presence shines brightly and drives real results. Experience the power of tailored marketing campaigns that connect, engage, and propel your business forward.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">130+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">64</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">100+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
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
                                    <div className="leading-relaxed">HashStackDevelopers' SEO mastery. We optimize your digital presence for top search engine rankings, driving organic growth and maximizing your reach. Dominate search results and connect with your target audience like never before.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">67+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">38</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">75+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
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
                                    <div className="leading-relaxed">HashStackDevelopers' graphic design prowess. We craft visually stunning solutions that captivate, communicate, and elevate your brand. Let's bring your vision to life through striking design.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">300+</h2>
                                    <p className="leading-relaxed">Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">100</h2>
                                    <p className="leading-relaxed">Active Projects </p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">75+</h2>
                                    <p className="leading-relaxed">Complete Projects</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">5</h2>
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