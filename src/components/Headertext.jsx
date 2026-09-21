import React from 'react'
import { easeOut, motion } from 'motion/react'

const Headertext = () => {
    return (
        <>
            <motion.section
            className='text-white px-10 md:px-20 my-32 md:my-44'
            initial={{opacity:0 ,y:25}}
            animate={{opacity:1, y:0}}
            transition={{duration:1.2,ease:easeOut}}
            >
                <p className='md:text-lg mb-3'>⭐⭐⭐⭐⭐ 500+ Happy Customers</p>
                <p className=' text-xl md:text-4xl font-bold mb-3'>Professional photo delivery platform</p>
                <p className='text-lg mb-3'>Where your work becomes an experience</p>
                <p>Deliver your photos securely. Let clients browse, heart their favourites, and you deliver exactly what they love.</p>

                <div className='md:flex items-center gap-2 md:gap-10 my-10 md:text-xl'>
                    <motion.p 
                    whileHover={{opacity:0.7}}
                    whileTap={{scale:0.8}}
                    className='bg-[#D4AF37] px-8 py-3 rounded-2xl text-black font-bold cursor-pointer w-fit mb-5 md:mb-0'>Start your studio free</motion.p>
                    <motion.p 
                    whileHover={{opacity:0.7}}
                    whileTap={{scale:0.8}}
                    className='bg-black px-8 py-3 rounded-2xl font-bold cursor-pointer w-fit'>Sign In</motion.p>
                </div>
                
            </motion.section>
        </>
    )
}

export default Headertext