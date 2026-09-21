import React from 'react'
import { motion } from 'motion/react'
import p2 from '../assets/p2.png'
import Subclient from './Subclient'

const Client = () => {
    return (
<motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="mt-10 py-12 px-5 sm:px-8 md:px-12 lg:px-20 xl:px-28 2xl:px-36"
>
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

        {/* Left Content */}
        <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[40%] flex flex-col gap-6 lg:gap-10"
        >
            <p className="bg-black inline-block text-white font-medium px-4 py-2 rounded-lg w-fit">
                Client Story
            </p>

            <p className="text-lg sm:text-xl leading-relaxed">
                "Working with Webzspot helped us refine our strategy and
                prioritize what matters most for sustainable growth."
            </p>

            <button className="bg-[#EDEDED] p-3 rounded-xl font-bold w-fit hover:bg-gray-200 transition cursor-pointer">
                Work with us
            </button>
        </motion.div>

        {/* Right Image */}
        <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-[50%]"
        >
            <img
                src={p2}
                alt=""
                className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-cover rounded-2xl"
            />

            <p className="text-center font-black my-5">
                Satisfied clients
            </p>
        </motion.div>

    </div>
    <Subclient />
</motion.div>
    )
}

export default Client