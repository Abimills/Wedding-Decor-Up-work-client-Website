"use client";
import { useState } from "react";
import styles from "../styles/work.module.css";

const workData = [
  {
    id: 1,
    title: "Home",
    img: "/brust.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
  {
    id: 2,
    title: "Hotel",
    img: "/gifts.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
  {
    id: 3,
    title: "audium",
    img: "/wedding.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
];
const Work = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerStyle = {
    opacity: isHovered ? 0 : 1,
    transition: "opacity 0.3s ease", // Add a smooth transition effect
  };
  return (
    <div className={styles.workContainer}>
      <h1 className={styles.workHeader}>WE WORK EveryWhere</h1>
      <p className={styles.workPara}>
        Whether you prefer home , hotel or even audiom decoration , we do it
        all.
      </p>
      <div className={styles.workCardContainer}>
        {workData.map((item) => {
          return (
            <div className={styles.cards} key={item.id}>
              <img src={item?.img} alt="image" className={styles.itemImages} />
              <div className={styles.innerCard}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardParagraph}>{item.description}</p>
                <button className={styles.cardBtn} style={{ opacity: 1 }}>
                  Order
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
