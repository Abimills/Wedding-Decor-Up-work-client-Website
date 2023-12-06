"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/service.module.css";
const serviceData = [
  {
    id: 1,
    title: "Weddings",
    img: "/ring.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
  {
    id: 2,
    title: "Birthday",
    img: "/birth.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
  {
    id: 3,
    title: "Graduation",
    img: "/grad.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
  {
    id: 4,
    title: "Engagement",
    img: "/coupies.png",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiaducimus eum quaerat nulla consequuntur eveniet voluptas, ab quodearum libero.",
  },
];
const Service = () => {
  const router = useRouter();
  return (
    <div className={styles.serviceContainer}>
      <h1 className={styles.serviceHeader}>Our Services</h1>
      <div className={styles.serviceCardsContainer}>
        {serviceData.map((item) => {
          return (
            <div className={styles.serviceCard} key={item?.id}>
              <div className={styles.cardImg}>
                <img src={item?.img} className={styles.ring} alt="" />
                <h3 className={styles.cardHeader}>{item.title}</h3>
              </div>
              <p className={styles.paraService}>{item?.description}</p>
              <div className={styles.btnContianer}>
                <button
                  className={styles.explore}
                  onClick={() => router.push("/book")}
                >
                  Book Now
                </button>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
