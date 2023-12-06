import Navbar from "@/components/Navbar";
import styles from "../../styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.contactContainer}>
        <div className={styles.atContainer}>
          <img src="/stick-man.png" alt="" className={styles.stickImage} />
        </div>
        <div className={styles.messageContainer}>
          <h1 className={styles.contactUs}>Contact Us</h1>

          {/* <p className={styles.someInfo}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consectetur illo aliquid esse doloribus eligendi, aperiam qui
            architecto ad a ex provident sit nesciunt incidunt? Tenetur ducimus
            natus explicabo iste, dolore cumque tempora ad est.
          </p> */}
          <div className={styles.businesNumbers}>
            <div className={styles.textContainer}>
              <PiPhoneDisconnectFill className={styles.phone} />
              <p className={styles.textPhone}>+25197032839</p>
            </div>
            <div className={styles.textContainer}>
              <MdEmail className={styles.email} />
              <p className={styles.textPhone}>rahel31@gmail.com</p>
            </div>
          </div>
          <form className={styles.formContainer}>
            <h3 className={styles.sendText}>Send us a Message</h3>
            <input
              type="text"
              placeholder="Name"
              className={styles.inputText}
            />
            <input
              type="text"
              placeholder="Email"
              className={styles.inputText}
            />
            <input
              type="text"
              placeholder="Message"
              className={styles.inputText}
            />
            <button className={styles.sendBtn}>Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
