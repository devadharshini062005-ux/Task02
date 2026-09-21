import React, { useState } from "react";
import { motion, AnimatePresence, easeOut } from "motion/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Services","How it works","Case Studies","FAQs"]

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className="relative flex items-center justify-between px-6 md:px-12 lg:px-20 pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* LOGO */}
        <div>
          <p className="text-3xl font-bold text-white">
            Webzpot studios
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 text-lg font-medium text-white">
            {menuItems.map((item) => (
              <li key={item}>
                <motion.a
                  href="#"
                  whileHover={{
                    y: -3,
                    opacity: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-white text-3xl"
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </motion.button>
      </motion.nav>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0  bg-black/70 backdrop-blur-lg"
            initial={{opacity:0,y:-30}}
            animate={{opacity:1, y:0,}}
            transition={{duration:0.5, ease: easeOut}}
            exit={{opacity:0, y:-30}}
          >
            {/* MENU HEADER */}
            <div className="flex items-center justify-between px-6 pt-8">
              
              {/* LOGO */}
              <motion.p
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                Photoshop
              </motion.p>

              {/* CLOSE BUTTON */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl font-light"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                ×
              </motion.button>
            </div>

            {/* MENU ITEMS */}
            <div className="px-8 mt-16">
              <ul className="flex flex-col gap-10">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{opacity:0, y:30}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.1,duration:0.5,ease:easeOut}}
                  >
                    <motion.a
                      href="#"
                      onClick={() => setMenuOpen(false)}
                      className="block text-3xl font-medium text-white"
                      whileHover={{
                        x: 10,
                        opacity: 0.6,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      {item}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* BOOK BUTTON */}
            <motion.div
              className="absolute bottom-10 left-6"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
              }}
            >
              <motion.button
                className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-black"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Book a call
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;