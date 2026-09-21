import React from 'react'
import { motion } from 'motion/react';

const Subclient = () => {
    const logo1 = ["Capture Every Moment", "Timeless Visual Stories", "Professional Portrait Studio", "Cinematic Wedding Photography", "Authentic Emotion Captured","Frame Your Memories","Artistic Event Coverage","Stunning Landscape Prints","Editorial Style Imagery","High-Impact Visuals"]

    const logo2 = ["Creative Direction Portfolio","Creative Direction Portfolio","Book Your Session","Tailored Photo Packages","Browse My Work","Natural Light Portraits","Natural Light Portraits","Commercial Brand Shots","Preserve Precious Moments","Preserve Precious Moments",]

  return (
    <>
        <motion.div
        initial={{opacity:0,y:25}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        >

            <div className="py-10 overflow-hidden mx-auto">
                <motion.div
                    className="flex gap-16 justify-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                    {[...logo1].map((logo, index) => (
                        <div
                            key={index}
                            className="text-2xl font-bold text-gray-500"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.div>

        <motion.div
        initial={{opacity:0,y:25}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        >

            <div className="py-10 overflow-hidden mx-auto">
                <motion.div
                    className="flex gap-16 justify-center whitespace-nowrap"
                    animate={{ x: ["0%", "50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                    {[...logo2].map((logo, index) => (
                        <div
                            key={index}
                            className="text-2xl font-bold text-gray-500"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
        </>
  )
}

export default Subclient