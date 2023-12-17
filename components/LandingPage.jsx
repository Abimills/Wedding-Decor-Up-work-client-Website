"use client";

import styles from "../styles/landing.module.css";
import { useScroll, motion, useInView, easeIn, easeInOut } from "framer-motion";
import { GiCottonFlower } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBirthdayCake } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { data } from "../components/data";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const hidden = { opacity: 0, x: 50 };
  const [visible, setVisible] = useState({ opacity: 0, y: 200 });
  const myRef = useRef(null);
  const isView = useInView(myRef);
  const router = useRouter();
  const variants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    enter: { opacity: 1, x: -10, y: 0 },
  };
  useEffect(() => {
    const autoInterval = setInterval(() => {
      if (index < 3) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 5000);
    return () => clearInterval(autoInterval);
  }, [index]);
  useEffect(() => {
    if (isView) {
      setVisible({ opacity: 1, y: -40 });
    }
  }, [isView]);
  return (
    <main className={styles.landingPage}>
      <motion.div
        className={styles.mediaSide}
        variants={variants}
        initial="hidden"
        animate="enter"
        // transition={{ type: "linear" }}
        // initial="hidden"
        // animate="visible"
        transition={{
          type: "spring", // You can choose a different transition type
          stiffness: 30, // Adjust the stiffness
          // damping: 20, // Adjust the damping
          delay: 0.1,
        }}
      >
        <FaFacebook
          className={styles.icons}
          onClick={() =>
            router.push("https://www.facebook.com/rahiel.daniel.1")
          }
        />
        <FaTelegram
          className={styles.icons}
          onClick={() => router.push("/explore")}
        />
        <FaWhatsappSquare
          className={styles.icons}
          onClick={() => router.push("/explore")}
        />
        <FaInstagram
          className={styles.icons}
          onClick={() =>
            router.push(
              "https://www.instagram.com/qen.diel?igshid=OGQ5ZDc2ODk2ZA=="
            )
          }
        />

        <img src="/boxes.png" alt="" className={styles.kidding} />
      </motion.div>
      <div className={styles.leftSide}>
        <h1 className={styles.heroHeader}>
          Find the best party <GiPartyPopper className={styles.party} />{" "}
          <GiPartyPopper className={styles.party} />
          decoration for all of your occasions by qendel decors
        </h1>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: -100, x: 0 },
            enter: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate="enter"
          // transition={{ type: "linear" }}
          // initial="hidden"
          // animate="visible"
          transition={{
            type: "spring", // You can choose a different transition type
            stiffness: 30, // Adjust the stiffness
            // damping: 20, // Adjust the damping
            delay: 0.1,
          }}
          className={styles.heroPara}
        >
          Book your party at Qendel party decoration for all of your occasions.
          Infusing every occasion with curated decorations, We can do home ,
          hotel and venue.We are flexible and can decorate your
          birthdays,wedding,graduation,Engagement and many more occasions.
          contact us for a beautiful and professionally designed party.
        </motion.p>
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 130, x: 0 },
            enter: { opacity: 1, y: 0, x: 0 },
          }}
          initial="hidden"
          animate="enter"
          // transition={{ type: "linear" }}
          // initial="hidden"
          // animate="visible"
          transition={{
            type: "spring", // You can choose a different transition type
            stiffness: 30, // Adjust the stiffness
            // damping: 20, // Adjust the damping
            delay: 0.1,
          }}
          className={styles.exploreBtn}
          onClick={() => router.push("/explore")}
        >
          Book your party
        </motion.button>
      </div>
      <div className={styles.rightSide}>
        <motion.div
          className={styles.imgContainer}
          ref={myRef}
          variants={{
            hidden: hidden,
            visible: visible,
          }}
          transition={{
            type: "spring", // You can choose a different transition type
            stiffness: 10, // Adjust the stiffness
            damping: 20, // Adjust the damping
            delay: 0.1,
          }}
          initial="hidden"
          animate="visible"
          key={data[index]?.id}
        >
          <img
            src={`${data[index].img}`}
            alt=""
            className={styles.beautyImage}
          />
        </motion.div>
        <div className={styles.activeContainer}>
          <div className={index === 0 ? styles.active : styles.passive}></div>
          <div className={index === 1 ? styles.active : styles.passive}></div>
          <div className={index === 2 ? styles.active : styles.passive}></div>
          <div className={index === 3 ? styles.active : styles.passive}></div>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
