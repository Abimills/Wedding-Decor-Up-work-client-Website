"use client";
import { useState } from "react";
import styles from "../styles/work.module.css";
import { useRouter } from "next/navigation";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const workData = [
  {
    id: 1,
    title: "Venues",
    img: "/wedding1.png",
    description:
      "Transform venues into extraordinary spaces! Our decoration expertise brings any event to life, ensuring your chosen venue is adorned with unique and captivating elements",
  },

  {
    id: 2,
    title: "Hotel",
    img: "/hotie.png",
    description:
      "Elevate your hotel events with our expert touch! Our team specializes in tailor-made decorations, ensuring every gathering in your hotel is a memorable experience",
  },
  {
    id: 3,
    title: "Home",
    img: "/pegy.png",
    description:
      "Transform your home into a personalized party haven! Our dedicated team is passionate about bringing your unique vision to life.",
  },
];
const Work = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  const containerStyle = {
    opacity: isHovered ? 0 : 1,
    transition: "opacity 0.3s ease", // Add a smooth transition effect
  };
  return (
    <div className={styles.workContainer}>
      <h1 className={styles.workHeader}>
        {" "}
        <RiVerifiedBadgeFill className={styles.badgeIcon} /> WE WORK EveryWhere{" "}
        <RiVerifiedBadgeFill className={styles.badgeIcon} />
      </h1>
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
                <button
                  className={styles.cardBtn}
                  style={{ opacity: 1 }}
                  onClick={() => router.push("/book")}
                >
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
