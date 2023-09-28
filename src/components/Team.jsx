import React from 'react'
import SideNav from './SideNav'
import Btn from './Btn'
// import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../images/talha2.jpeg"
import img2 from "../images/ahsan.jpeg"
// import img3 from "../images/haseeb4.jpeg"
// import img4 from "../images/image2.jpeg"
// import img9 from "../images/junaid.jpeg"
import img10 from "../images/mateen2.jpeg"
import img5 from "../images/image2-removebg-preview.png"
import img7 from "../images/image3-removebg-preview.png"
import img8 from "../images/image4-removebg-preview.png"
import img9 from "../images/muzammil.jpeg"
import img11 from "../images/faizan.jpeg"
import img18 from "../images/abdullah.jpeg"
import img19 from "../images/osama.jpeg"





import Footer from "../components/footer"

import Particle from './Particle'

export default function Teamus() {
    return (
        // <div className='w-screen h-screen bg-black' >
        <div>
            <div className='  '>
                <SideNav />
                <div className='absolute' >
                    <Btn />
                    <Particle />
                </div>

                <div className='bg-black h-screen flex justify-center items-center '>
                    <h1 data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000" className='text-center text-white text-2xl font-bold '  > <span className='text-5xl text-yellow-600 font-bold'>OUR TEAM</span> </h1>
                </div>


                {/* <section className="  text-gray-600 body-font">
                    <div className="  container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Chaudhary Haseeb Mahmood</h1>
                                <div className="leading-relaxed">As CEO, I have the vision to drive innovation and growth. Through cooperation and support, we achieve excellence and customer satisfaction. Together we create new business models and seize the moment.</div>
                            </div>

                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-center w-full h-full" src={img3} alt="stats" />
                        </div>
                    </div>
                </section> */}

                <section className="  text-gray-600 body-font">
                    <div className="   container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Muhammad Mateen Imran</h1>
                                <div className="leading-relaxed  ">As founder and CEO, my journey has been defined by visionary leadership and an unwavering commitment to driving our company's success. Based on innovation, I foster a culture of collaboration that encourages growth and strengthens our team. With strategic thinking and a transformative approach, I embrace challenges as opportunities to impact sustainability, leverage industry experience and insight, and build a legacy of excellence.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-center w-full h-full" src={img10} alt="stats" />
                        </div>
                    </div>
                </section>

                <section className="  text-gray-600 body-font">
                    <div className=" bg-yellow-600  container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Mirza Talha Rizwan</h1>
                                <div className="leading-relaxed">As the Marketing Manager, I direct the strategic direction of our brand with new business. By understanding the marketing process, I create marketing plans that resonate with my audience. Through creative storytelling and data analytics, I make sure our products are relevant and continue to grow.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-center w-full h-full" src={img1} alt="stats" />
                        </div>
                    </div>
                </section>

                <section className="  text-gray-600 body-font">
                    <div className="  container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Syed Ahsan Naqvi</h1>
                                <div className="leading-relaxed">Engineering managers are skilled in managing technical innovation and developing partnerships. With experience in leadership and project management, I guide the creation of innovative solutions by fostering continuous improvement. By empowering our team and using open communication and creative problem solving, I ensure that we consistently exceed industry standards, delivering outstanding results.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-center w-full h-full" src={img2} alt="stats" />
                        </div>
                    </div>
                </section>


                <section className="  text-gray-600 body-font">
                    <div className=" bg-yellow-600 container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Muzammil Mughal</h1>
                                <div className="leading-relaxed">As the IT Manager, I oversee operations to ensure smooth operations. My responsibilities are to manage the team, implement systems and keep the network secure. By aligning the IT strategy with business objectives, I contribute to the efficiency and security of our organization's digital environment.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-top object-cover  w-full h-full" src={img9} alt="stats" />
                        </div>
                    </div>
                </section>
                <section className="  text-gray-600 body-font">
                    <div className="   container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Muhammad Faizan Imran</h1>
                                <div className="leading-relaxed">As the HR Manager, I lead the development and implementation of HR strategies to create a motivated and productive workforce. My responsibilities include talent acquisition, staff development and promoting quality work. With effective communication and strategic HR strategies, I realize the full potential of human capital and contribute to the success of the organization.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-top w-full h-full" src={img11} alt="stats" />
                        </div>
                    </div>
                </section>
                <section className="  text-gray-600 body-font">
                    <div className=" bg-yellow-600 container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Abdullah Ahmed</h1>
                                <div className="leading-relaxed">I am a programmer with experience in creating software solutions using different languages. Experienced throughout the development cycle, strong algorithmic problem solving, and experience with both front-end (React, Angular) and back-end (Flask, Django) web technologies.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-top object-cover  w-full h-full" src={img18} alt="stats" />
                        </div>
                    </div>
                </section>
                <section className="  text-gray-600 body-font">
                    <div className="   container px-5 py-24 justify-around mx-auto flex flex-wrap">
                        <div className="  flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                            <div className="w-full sm:p-4 px-4 mb-6">
                                <h1 className="title-font font-medium text-2xl mb-2 text-gray-900">Osama Ramzan</h1>
                                <div className="leading-relaxed">Experienced advertising professionals with a proven track record of creating effective campaigns that promote brands and drive growth across multiple platforms. Skilled in strategic planning, consumer behavior analysis, and creative content development to optimize brand visibility and engagement. Dedicated to staying ahead of market trends and delivering results that resonate.</div>
                            </div>
                            {/* <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
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
                            </div> */}
                        </div>
                        <div className="lg:w-1/4 sm:w-1/3 h-[430px] sm:h-[60vh] w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                            <img className=" relative object-cover object-top w-full h-full" src={img19} alt="stats" />
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

            {/* parallex starts */}



            {/* parallex ends */}


            {/* Footer starts */}
            <div className='h-auto w-auto'>


                <Footer />




            </div>
            {/* Footer ends */}
        </div>

    )
}