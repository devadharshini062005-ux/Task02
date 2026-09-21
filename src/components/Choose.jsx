import React from 'react'
import { motion } from 'motion/react'
import ChooseTemp from './ChooseTemp'

const Choose = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center bg-[#F7F7F7] mt-10 py-18 px-4 md:px-0'
        >
            <p className='bg-black inline-block text-white font-medium px-4 py-2 rounded-lg'>
                Why Choose Webzspot
            </p>

            <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:2}}
            >
                <p className='text-4xl md:text-7xl font-medium my-5 '>Our strengths that set us apart</p>
                <p className='md:w-[30%] mx-auto text-xl font-medium my-8'>Integrating strategy, expertise, and execution to deliver measurable business outcomes.</p>
            </motion.div>

            <ChooseTemp />
        </motion.div>
    )
}

export default Choose