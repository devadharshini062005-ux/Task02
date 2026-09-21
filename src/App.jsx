import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import './App.css'
import photo1 from "./assets/photo1.avif";
import photo2 from './assets/photo2.avif';
import photo4 from './assets/photo4.avif';
import background from './assets/background.jpg';
import Brand from "./components/Brand"
import Choose from "./components/Choose"
import Client from "./components/Client"
import Header from "./components/Header"
import Price from "./components/Price"
import Services from "./components/Services"
import Works from "./components/Works"

export default function App() {
  const testimonials = [
    {
      name: "Lucas Brown",
      role: "Head of Product, NovaTech",
      text: "Consultra helped us bring clarity to our product strategy..."
    },
    {
      name: "Sarah Wilson",
      role: "CEO, BrightLabs",
      text: "Their structured approach helped our team..."
    },
    {
      name: "Daniel Smith",
      role: "Product Manager, TechCorp",
      text: "The collaboration made a real difference..."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "How does the photo selection process work?",
      answer:
        "The photographer uploads the event photos to the platform. Each customer receives access to their photo gallery, where they can browse, select their preferred photos, and save their selections."
    },
    {
      question: "How many photos can a photographer upload?",
      answer:
        "Photographers can upload a large number of photos from an event or photoshoot. The platform is designed to handle photo collections containing hundreds or even thousands of images."
    },
    {
      question: "How do customers access their photos?",
      answer:
        "Customers can access their assigned photo gallery using their unique account, link, or access details provided by the photographer."
    },
    {
      question: "Can customers select multiple photos?",
      answer:
        "Yes. Customers can select multiple photos from their gallery. Their selected photos are stored so they can review and manage their choices later."
    },
    {
      question: "Can I change my selected photos later?",
      answer:
        "Yes. Customers can review their selected photos and add or remove photos before finalizing their selection, depending on the photographer's settings."
    },
    {
      question: "Are my selected photos saved?",
      answer:
        "Yes. Once you select photos, your selections are saved to your account or gallery so you can access them again without having to select the photos from the beginning."
    },
    {
      question: "Can other customers see my photos?",
      answer:
        "No. Photo galleries are designed to be accessible only to the users authorized by the photographer. Each customer's photos and selections remain separate."
    },
    {
      question: "Can photographers organize photos for different customers?",
      answer:
        "Yes. Photographers can organize and manage photo collections so that customers can access the appropriate photos for their event, session, or booking."
    },
    {
      question: "Can I download my selected photos?",
      answer:
        "After the photographer finalizes or approves your selection, the selected photos can be made available for download or further processing according to the photographer's workflow."
    },
    {
      question: "What happens after I finalize my selection?",
      answer:
        "Once your selection is finalized, the photographer can view the selected photos and continue with the next step, such as editing, retouching, printing, or delivering the final images."
    }
  ];

  const staggerContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const team = [
    { img: photo1, name: "Sarah Mitchell", role: "cheif photographer" },
    { img: photo4, name: "Sarah Mitchell", role: "cheif photographer" },
    { img: photo2, name: "Sarah Mitchell", role: "cheif photographer" }
  ];

  return (
    <div>

      {/* surender */}
      <Header />
      <Services />
      <Brand />
      <Choose />
      <Client />
      <Price />
      <Works />

     {/* Testimonials */}
<div className="main">
  <div>
    <motion.span
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
    >
      ✦
    </motion.span>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Testimonials
    </motion.p>
  </div>
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Why clients trust us
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    From the companies we've worked with, in their own words.
  </motion.p>
</div>

      <div className="slider">
        <motion.div
          className="container"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              className="card"
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <h2>{item.name}</h2>
              <h4>{item.role}</h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
                              {/* OUR TEAM */}
      {/* Our Team */}
<div className="main">
  <div>
    <motion.span
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
    >
      ◆
    </motion.span>
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Our Team
    </motion.p>
  </div>
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
  >
    Meet the experts behind your growth
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    Our experienced consultants provide strategic insight and solutions to drive business forward.
  </motion.p>
</div>

      <motion.div
        className="img"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {team.map((member, index) => (
          <motion.div className="team-member" key={index} variants={staggerItem}>
            <motion.img
              src={member.img}
              whileHover={{ scale: 1.06, rotate: 1 }}
              transition={{ type: "spring", stiffness: 180, damping: 14 }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* FAQs */}
      <div className="main">
        <div>
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            �
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FAQs
          </motion.p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Questions & Answers
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Key information to help you make confident decisions.
        </motion.p>

        {/* FAQ Accordion */}
        <motion.div
          className="faq-container"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {faqs.map((faq, index) => (
            <motion.div className="faq-item" key={index} variants={staggerItem}>
              {/* Question */}
              <div
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3>{faq.question}</h3>

                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </div>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="contact-section">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-form">
            <form>
              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Enter Name" />
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="">Email ID</label>
                <input type="email" placeholder="Enter Eail ID" />
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label>Subject of Interest</label>
                <select>
                  <option>Select...</option>
                  <option>Photography</option>
                  <option>Photo Selection</option>
                  <option>Event Photography</option>
                  <option>Other</option>
                </select>
              </motion.div>

              <motion.div
                className="form-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label>Message</label>
                <textarea placeholder="Tell us about your project or challenge..."></textarea>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-content">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Contact
            </motion.button>
            <h1>Reach out today</h1>
            <p>
              Have a question or idea? We'd love to hear from you.
              Let's explore solutions we can create together.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        className="footer"
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="footer-left">
          <h2>✳ Webzspot Studios</h2>

          <p>
            Supporting modern teams with strategy,
            clarity, and practical solutions.
          </p>

          <motion.button
            className="book-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <span>Book a call</span>
            <motion.span
              className="arrow"
              whileHover={{ x: 4, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ↗
            </motion.span>
          </motion.button>
        </div>

        <motion.div
          className="footer-links"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="footer-column" variants={staggerItem}>
            <h3>Navigation</h3>
            <a href="#">Services</a>
            <a href="#">How it works</a>
            <a href="#">Case Studies</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
          </motion.div>

          <motion.div className="footer-column" variants={staggerItem}>
            <h3>Socials</h3>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </motion.div>
        </motion.div>
      </motion.footer>
    </div>
  );
}




