"use client";

import { useState } from "react";
import styles from "../styles/owner.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
const Owner = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.ownerContainer}>
      <h1 className={styles.header}>What does the owner has to say ?</h1>
      <div className={styles.picTextContainer}>
        <div className={styles.picContainer}>
          <img className={styles.rahelPic} src="/women.png" alt="owner" />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.rahelsmall}>party designer</p>
          <h2 className={styles.rahel}>I am Rahel </h2>
          <p className={styles.rahelPara}>
            You call us or send us a message from our website. you can also send
            a text on our whatsapp page or instagram you call us or send us a
            message from our website. you can also send a text on our whatsapp
            page or instagram
          </p>
          <button
            className={styles.contactRahel}
            onClick={() => setShow(!show)}
          >
            Contact Her
          </button>
          {show && (
            <div className={styles.iconsContainer}>
              <FaFacebook />
              <FaTelegram />
              <FaInstagram />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Owner;
