import { motion } from "motion/react";

const logos = ["IPSUM", "Logoipsum", "LOOP", "LOGOIP", "IPSUM"];

const Brands = () => {
    return (
        <motion.div
        initial={{opacity:0,y:25}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        >
            <div className=" text-center font-bold text-xl">
                <p>Trusted by leading brands worldwide</p>
            </div>

            <div className="py-10 overflow-hidden w-[50%] mx-auto">
                <motion.div
                    className="flex gap-16 justify-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                    {[...logos, ...logos].map((logo, index) => (
                        <div
                            key={index}
                            className="text-3xl font-bold text-gray-500"
                        >
                            {logo}
                        </div>
                    ))}
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Brands;