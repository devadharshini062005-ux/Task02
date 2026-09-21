import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
    const [popup, setPopup] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='py-10'
        >
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='text-center'
            >
                <p className='bg-black inline-block text-white font-medium px-4 py-2 rounded-lg'>
                    Services
                </p>

                <p className='text-2xl md:text-4xl font-bold mt-5'>
                    Ready to deliver the work they'll never forget
                </p>

                <p className='mt-5 text-xl font-medium inline-block w-[75%] md:w-[40%]'>
                    Join studios already using Webzspot Studio to deliver a
                    gallery experience their clients rave about.
                </p>

                <div className="pt-2 flex items-center justify-center mt-5">
                    <motion.button
                        onClick={() => setPopup(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#b8972e] text-black font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md cursor-pointer"
                    >
                        <span>Create your studio</span>
                        <FaArrowRight className="text-sm" />
                    </motion.button>
                </div>
            </motion.div>

            {/* POPUP */}
            <AnimatePresence>
                {popup && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 15 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-50  flex items-center justify-center bg-black/70'
                    >
                        <div className='bg-white rounded-2xl w-[30%]  p-6 shadow-2xl'>
                            <h2 className='text-2xl font-bold'>
                                Create Your Studio
                            </h2>

                            <p className='mt-2 text-gray-500'>
                                Upload your photo
                            </p>

                            <input
                                type="file"
                                accept="image/*"
                                className='mt-5'
                            />

                            <button
                                onClick={() => setPopup(false)}
                                className='mt-5 bg-black text-white px-5 py-2 rounded-full cursor-pointer block'
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>
    )
}

export default Services