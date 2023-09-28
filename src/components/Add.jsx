import React from 'react'
// import add1 from "../images/add1.jpeg"
import add2 from "../images/add2.mp4"

export default function Add() {
    console.warn("Hello")
    return (
        <div className='bg-transparent   flex items-center justify-center text-white w-screen h-screen absolute z-10 pt-20 ' >
            {/* <div className='bg-red-600 w-[80%] h-[80%]' ><img src={add1} className='w-screen h-[100%]' alt="" /></div> */}
            <div className='bg-red-600 w-[80%] h-[80%]' ><video width="320" height="240" controls ><source src={add2} type="video/mp4" /></video></div>
        </div>
    )
}
