import React from "react";
// import ReactDOM from "react-dom";
// import UseAnimations from "react-useanimations";
// import menu2 from "react-useanimations/lib/menu2";
// import twitter from "react-useanimations/lib/twitter";
// import Particle from './Particle'



export default function Test() {

    return (
        <>
            <div className="flex justify-center items-center h-screen w-screen " >
                {/* <div><span>1</span> <br /> Hello <br /> <span className="float-right" >1</span></div> */}
                <div className="flex" > <span className="flex items-start  text-yellow-600 " ><hr className="w-10   border-yellow-600 " /></span> Hello <span className="flex items-end" ><hr className="w-10   border-yellow-600 " /></span> </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className="flex" > <span className=" mt-3  text-yellow-600 " ><hr className="w-10   border-yellow-600 " /></span> Hello <span className="mt-3" ><hr className="  w-10   border-yellow-600 " /></span> </div>
            </div>
        </>
    )
}
