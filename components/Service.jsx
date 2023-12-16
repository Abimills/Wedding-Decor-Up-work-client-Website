"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/service.module.css";
const serviceData = [
  {
    id: 1,
    title: "Weddings",
    img: "/ring.png",
    description:
      " Transform your wedding dreams into reality with our party decor website. Discover enchanting and elegant decorations that will make your special day truly magical.",
  },
  {
    id: 2,
    title: "Birthday",
    img: "/birth.png",
    description:
      " Elevate your birthday celebrations with our party decor website. Explore vibrant and imaginative decorations to turn your festivities into unforgettable moments.",
  },
  {
    id: 3,
    title: "Graduation",
    img: "/grad.png",
    description:
      " Deck out your graduation day in style! Our decoration team is ready to turn your achievement into a visually stunning celebration. Let us bring the sparkle to your success story!",
  },
  {
    id: 4,
    title: "Engagement",
    img: "/coupies.png",
    description:
      "Engage in elegance with our curated decorations! we add sophistication to your engagement celebration. Create memories that sparkle as bright as your new chapter together",
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
