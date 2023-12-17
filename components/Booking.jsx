"use client";

import { useRouter } from "next/navigation";
import styles from "../styles/explore.module.css";
import { IoMdCall } from "react-icons/io";
import { motion } from "framer-motion";

const Booking = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <motion.div
          className={styles.left}
          variants={{
            hidden: { opacity: 0, y: 0, x: 0 },
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
            delay: 0.6,
          }}
        >
          <div className={styles.leftSide}>
            <h1 className={styles.header}>
              Party Decoration for every occassion you could desire
            </h1>
            <p className={styles.para}>
              We put your wildest party decor to reality
            </p>
            <button
              className={styles.bookBtn}
              onClick={() => router.push("/book")}
            >
              Book Now!
            </button>
            <button
              className={styles.callBtn}
              onClick={() => router.push("/contact")}
            >
              Call Now! <IoMdCall className={styles.call} />
            </button>
            <p className={styles.para}>here are our delighted customers!</p>
            <div className={styles.imgContainer}>
              <img src="/women.png" className={styles.clients} alt="" />
              <img src="/logo1.jpg" className={styles.clients} alt="" />
              <img src="/young.jpg" className={styles.clients} alt="" />
              <img src="/woman.jpg" className={styles.clients} alt="" />
            </div>
          </div>
          <div className={styles.btnContainer}></div>
        </motion.div>
        <div className={styles.rightSide}>
          <motion.img
            src="/employee.jpg"
            alt=""
            className={styles.pics}
            variants={{
              hidden: { opacity: 0, y: 0, x: 0 },
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
          />
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 0, x: 0 },
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
            src="/christmas.jpg"
            alt=""
            className={styles.pics}
          />
        </div>
      </div>
    </div>
  );
};

export default Booking;
