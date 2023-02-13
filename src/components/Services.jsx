import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Btn from "./Btn"
import SideNav from './SideNav';

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
                            <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className="  container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                            </div>
                        </div>
                    </section>


                    <section className="  text-gray-600 body-font">
                        <div className=" bg-yellow-600 container px-5 py-24 mx-auto flex flex-wrap">
                            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                                <div className="w-full sm:p-4 px-4 mb-6">
                                    <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
                                    <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                                    <p className="leading-relaxed">Users</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                                    <p className="leading-relaxed">Subscribes</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                                    <p className="leading-relaxed">Downloads</p>
                                </div>
                                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                                    <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p className="leading-relaxed">Products</p>
                                </div>
                            </div>
                            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                                <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
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