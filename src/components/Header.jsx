import { motion, useScroll, useTransform } from "motion/react";
import bglanding from "../assets/bglanding.png";
import Navbar from "./Navbar";
import Headertext from "./Headertext";

const Header = () => {
  const { scrollY } = useScroll();

  // Parallax movement
  const bgY = useTransform(scrollY, [0, 600], [0, 180]);

  // Slight zoom to prevent empty spaces
  const scale = useTransform(scrollY, [0, 600], [1.3, 1.2]);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* PARALLAX BACKGROUND */}
      <motion.div
        style={{
          y: bgY,
          scale: scale,
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={bglanding}
          alt="lading"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>

      {/* DARK OVERLAY - optional */}
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* NAVBAR */}
      <div className="relative z-50">
        <Navbar />
        <Headertext />
      </div>

    </section>
  );
};

export default Header;