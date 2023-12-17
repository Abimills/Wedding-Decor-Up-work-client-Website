"use client";
import styles from "../styles/footer.module.css";
import { CiFacebook } from "react-icons/ci";
import { RiTelegramLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Footer = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.textContainer}>
        <div className={styles.indieContainer}>
          <h1 className={styles.logoName} onClick={() => router.push("/")}>
            Qendel
          </h1>
          <p className={styles.decorText}>Decoring for party</p>
        </div>
        <div className={styles.partContainer}>
          <p onClick={() => router.push("/book")}>Birthday</p>
          <p onClick={() => router.push("/book")}>Wedding</p>
          <p onClick={() => router.push("/book")}>Aniversary</p>
        </div>
        <div className={styles.partContainer}>
          <p onClick={() => router.push("/")}>Home</p>
          <p onClick={() => router.push("/about")}>About</p>
          <p onClick={() => router.push("/services")}>Service</p>
        </div>
        <div className={styles.partContainer}>
          <p onClick={() => router.push("/explore")}>Hotels</p>
          <p onClick={() => router.push("/explore")}>House</p>
          <p onClick={() => router.push("/explore")}>Venue</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.lowerContainer}>
        <div className={styles.socialmedia}>
          <CiFacebook className={styles.facebook} />
          <RiTelegramLine className={styles.facebook} />
          <FaInstagram className={styles.facebook} />
        </div>

        <p className={styles.developed}>
          &copy; {currentYear} Developed by Abel T.
        </p>
      </div>
    </div>
  );
};

export default Footer;
