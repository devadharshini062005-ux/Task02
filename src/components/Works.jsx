
import { motion } from "motion/react";
const steps = [
    {
        number: "01",
        title: "Upload",
        description: "Upload your photos.",
    },
    {
        number: "02",
        title: "Favourites",
        description: "Select your favourites and add to favourites.",
    },
    {
        number: "03",
        title: "Download",
        description: "Download high quality images based on subsciption.",
    },
    {
        number: "04",
        title: "Artificial Intelligence",
        description: "AI enhanced verison helps you to recognise your photos.",
    },
];

const Works = () => {


    return (
        <section className="bg-black text-white font-bold">

            <div className="flex flex-col items-center py-10">

                <p className="bg-white text-black inline-block font-medium px-4 py-2 rounded-lg">
                    How it works
                </p>

                <div className="flex flex-col items-center gap-5 mt-10">
                    {steps.map((items, index) => {
                        return (
                            <motion.div
                            initial={{opacity:0,y:-35}}
                            whileInView={{opacity:1,y:0}}
                            transition={{duration:1}}
                                key={index}
                                className="w-[250px] mb-10 text-center text-2xl flex flex-col gap-2"
                            >
                                <p>{items.number}</p>
                                <p>{items.title}</p>
                                <p>{items.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

        </section>
    );
};

export default Works;