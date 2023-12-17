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
            Hello everyone, welcome to Qendel Decor.I am the owner and I love
            making people happy. I have been a designer for almost a decade. I
            Enjoy decoring events for different occasions. I love designing
            wedding ,birthdays and graduations party. if you want to have a 
            talk with me contact me here.
          </p>
          <button
            className={styles.contactRahel}
            onClick={() => setShow(!show)}
          >
            Contact Her
          </button>
          {show && (
            <div className={styles.iconsContainer}>
              <FaFacebook className={styles.rakiIcon} />
              <FaTelegram className={styles.rakiIcon} />
              <FaInstagram className={styles.rakiIcon} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Owner;
