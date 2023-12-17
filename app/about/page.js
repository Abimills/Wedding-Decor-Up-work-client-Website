"use client";
import Navbar from "@/components/Navbar";
import styles from "../../styles/about.module.css";
import Footer from "@/components/Footer";
import Owner from "@/components/Owner";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h1 className={styles.aboutHeader}>ABOUT US</h1>
          <div className={styles.verticalLine}></div>
          <p className={styles.aboutPara}>
            Qendel Decor for transforming spaces into personalized works of art
            with passion and precision. Celebrate beauty, elegance, and the
            seamless fusion of form and function with us.
          </p>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100, y: 0 },
            enter: { opacity: 1, x: 0, y: 0 },
          }}
          initial="hidden"
          animate="enter"
          transition={{
            type: "spring",
            stiffness: 30,
            delay: 0.1,
          }}
          className={styles.servicesTextContainer}
        >
          <h3 className={styles.ServicesHeader}>Services</h3>
          <div className={styles.servicesText}>Wedding</div>
          <div className={styles.servicesText}>Graduation</div>
          <div className={styles.servicesText}>Birthday</div>
          <div className={styles.servicesText}>Aniversary</div>
          <div className={styles.servicesText}>Engagement</div>
        </motion.div>
      </div>
      <div className={styles.picsContainer}>
        <div className={styles.pics}>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100, x: 0 },
              enter: { opacity: 1, y: 0, x: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{
              type: "spring",
              stiffness: 30,
              delay: 0.1,
            }}
            className={styles.picsBg}
          >
            <img src="/secondImage.jpg" className={styles.aboutImage} alt="" />
          </motion.div>
          <motion.div
            className={styles.picsBg}
            variants={{
              hidden: { opacity: 0, y: 100, x: 0 },
              enter: { opacity: 1, y: 0, x: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{
              type: "spring",
              stiffness: 30,

              delay: 0.3,
            }}
          >
            <img src="/first.jpg" className={styles.aboutImage} alt="" />
          </motion.div>
          <motion.div
            className={styles.picsBg}
            variants={{
              hidden: { opacity: 0, y: 100, x: 0 },
              enter: { opacity: 1, y: 0, x: 0 },
            }}
            initial="hidden"
            animate="enter"
            transition={{
              type: "spring",
              stiffness: 30,
              delay: 0.5,
            }}
          >
            <img src="third.jpg" className={styles.aboutImage} alt="" />
          </motion.div>
        </div>
        <h1 className={styles.modern}>MODERN</h1>
      </div>
      <h1 className={styles.traditional}>TRADITIONAL</h1>
      <h1 className={styles.qendel}>
        <span>Design</span> Qendel Decors
      </h1>
      <Owner />
      <Footer />
    </main>
  );
}
