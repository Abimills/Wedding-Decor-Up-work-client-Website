import Navbar from "@/components/Navbar";
import styles from "../../styles/about.module.css";
import Footer from "@/components/Footer";
export default function About() {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.aboutText}>
          <h1 className={styles.aboutHeader}>ABOUT US</h1>
          <div className={styles.verticalLine}></div>
          <p className={styles.aboutPara}>
            Qendel Decor: Transforming spaces into personalized works of art
            with passion and precision. Celebrate beauty, elegance, and the
            seamless fusion of form and function with us.
          </p>
        </div>
        <div className={styles.servicesTextContainer}>
          <h3 className={styles.ServicesHeader}>Services</h3>
          <div className={styles.servicesText}>Wedding</div>
          <div className={styles.servicesText}>Graduation</div>
          <div className={styles.servicesText}>Birthday</div>
          <div className={styles.servicesText}>Aniversary</div>
          <div className={styles.servicesText}>Engagement</div>
        </div>
      </div>
      <div className={styles.picsContainer}>
        <div className={styles.pics}>
          <div className={styles.picsBg}>
            <img src="/secondImage.jpg" className={styles.aboutImage} alt="" />
          </div>
          <div className={styles.picsBg}>
            <img src="/first.jpg" className={styles.aboutImage} alt="" />
          </div>
          <div className={styles.picsBg}>
            <img src="third.jpg" className={styles.aboutImage} alt="" />
          </div>
        </div>
        <h1 className={styles.modern}>MODERN</h1>
      </div>
      <h1 className={styles.traditional}>TRADITIONAL</h1>
      <h1 className={styles.qendel}>
        <span>Design</span> Qendel Decors
      </h1>
      <Footer />
    </main>
  );
}
