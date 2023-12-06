import Navbar from "@/components/Navbar";
import styles from "../../styles/explore.module.css";
import { IoMdCall } from "react-icons/io";

const Explore = () => {
  return (
    <div className={styles.main}>
      {/* <Navbar /> */}

      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.leftSide}>
            <h1 className={styles.header}>
              Party Decoration for every occassion you could desire
            </h1>
            <p className={styles.para}>
              We put your wildest party decor to reality
            </p>
            <button className={styles.bookBtn}>Book Now!</button>
            <button className={styles.callBtn}>
              Call Now! <IoMdCall className={styles.call} />
            </button>
            <p className={styles.para}>here are our delighted customers!</p>
            <div className={styles.imgContainer}>
              <img src="/women.png" className={styles.clients} alt="" />
              <img src="/women.png" className={styles.clients} alt="" />
              <img src="/women.png" className={styles.clients} alt="" />
              <img src="/women.png" className={styles.clients} alt="" />
            </div>
          </div>
          <div className={styles.btnContainer}></div>
        </div>
        <div className={styles.rightSide}>
          <img src="/employee.jpg" alt="" className={styles.pics} />
          <img src="/christmas.jpg" alt="" className={styles.pics} />
        </div>
      </div>
    </div>
  );
};

export default Explore;
