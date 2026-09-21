import React from 'react'
import { motion } from 'motion/react'
import { li } from 'motion/react-client'
import { SiNike } from "react-icons/si";

const Price = () => {

    const logo1 = ["Capture Every Moment", "Timeless Visual Stories", "Professional Portrait Studio", "Cinematic Wedding Photography", "Authentic Emotion Captured","Frame Your Memories","Artistic Event Coverage","Stunning Landscape Prints","Editorial Style Imagery","High-Impact Visuals"]
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-center bg-[#F7F7F7] mt-10 py-18 px-4 md:px-0'
        >

            <p className='bg-black inline-block text-white font-medium px-4 py-2 rounded-lg'>
                &#x24; Pricing
            </p>

            <div className='w-[60%] mx-auto my-10'>
                <p className=' text-4xl md:text-7xl font-medium mb-10'>Flexible plans that fits</p>
                <p className='text-xl md:text-3xl'>Simple, transparent pricing designed in supporting the quality of the photos.</p>
            </div>

            <div className='md:flex justify-between md:w-[70%] mx-auto'>
                <div className='bg-white p-20 rounded-xl shadow-2xl mb-5 md:mb-0'>
                    <span className='font-bold text-2xl'>Pro Plan</span>
                    <div className='mt-5 flex flex-col gap-8'>
                        <p className='text-4xl font-medium'>&#8377;499 /month</p>
                        <p className='font-medium'>Can upload upto 15000 photos/ 50 days</p>
                        <button className='bg-black text-white w-fit mx-auto p-4 rounded-xl'>Book Now</button>
                        <ul>
                            {
                                logo1.map((items) => {
                                    return(
                                        <li className='flex items-center justify-center gap-2'><SiNike />{items}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>


                <div className='bg-orange-300 pt-6 pe-6 pb-6 rounded-2xl shadow-2xl'>
                    <div className='bg-white p-20 rounded-xl'>
                    <span className='font-bold text-2xl'>Premium Plan</span>
                    <div className='mt-5 flex flex-col gap-8'>
                        <p className='text-4xl font-medium'>&#8377;1000 /month</p>
                        <p className='font-medium'>Can upload upto 5000 photos/ 28 days</p>
                        <button className='bg-black text-white w-fit mx-auto p-4 rounded-xl'>Book Now</button>
                        <ul>
                            {
                                logo1.map((items) => {
                                    return(
                                        <li className='flex items-center justify-center gap-2'><SiNike />{items}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                </div>
                
            </div>
        </motion.div>
    )
}

export default Price