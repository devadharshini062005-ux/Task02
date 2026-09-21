import React from 'react'
import p from '../assets/p.png'
import { IoMdPhotos } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { FaDownload } from "react-icons/fa6";
import { RiRobot3Fill } from "react-icons/ri";

const ChooseTemp = () => {
    return (
       <div className="flex flex-col lg:flex-row gap-5 px-5 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">

    <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px]">
        <img
            src={p}
            alt=""
            className="w-full h-full object-cover rounded-xl"
        />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:w-1/2 lg:h-[400px]">


        <div className="bg-white p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl sm:text-5xl">
                <IoMdPhotos />
            </span>

            <p className="text-base sm:text-lg">
                Upload upto 50 photos in free trial
            </p>
        </div>


        <div className="bg-white p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl sm:text-5xl">
                <FcLike />
            </span>

            <p className="text-base sm:text-lg">
                Add your favourite photos to the collection
            </p>
        </div>


        <div className="bg-white p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl sm:text-5xl">
                <FaDownload />
            </span>

            <p className="text-base sm:text-lg">
                Download the photos with greater quality
            </p>
        </div>


        <div className="bg-white p-6 sm:p-8 rounded-xl flex flex-col justify-between min-h-[200px]">
            <span className="text-4xl sm:text-5xl">
                <RiRobot3Fill />
            </span>

            <p className="text-base sm:text-lg">
                AI enhanced features for recognising faces
            </p>
        </div>

    </div>
</div>
    )
}

export default ChooseTemp