"use client";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { toast } from "react-hot-toast";
import styles from "../../styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { useState } from "react";
import Loading from "../loading";
import { useRouter } from "next/navigation";
const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && message) {
      setLoading(true);
      const sent = await emailjs.send(
        "service_47a4poc",
        "template_vgrn2nk",
        {
          to_name: "Rahel",
          email,
          name,
          message,
        },
        "B9AqBC3nCLbkgYWgs"
      );

      if (sent.ok || sent.status == "200") {
        setLoading(false);
        toast.success("Thank you for contacting Qendel decor", {
          duration: 9000,

          style: {
            background: "lightGreen",
            color: "white",
            fontFamily: "sans-serif",
          },
        });
        setName("");
        setEmail("");
        setMessage("");
        router.push("/");
        toast.success("Our team will get back you within 2-3 working days", {
          duration: 9000,

          style: {
            background: "lightGreen",
            color: "white",
            fontFamily: "sans-serif",
          },
        });
      }
    } else {
      setLoading(false);
      toast.error("Please fill the required fields", {
        duration: 5000,
        style: {
          background: "lightCoral",
          color: "white",
          fontFamily: "sans-serif",
        },
      });
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className={styles.main} fallback={<Loading />}>
          <Navbar />
          <div className={styles.contactContainer}>
            <motion.div
              className={styles.atContainer}
              variants={{
                hidden: { opacity: 0, y: 100, x: 0 },
                enter: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              animate="enter"
              // transition={{ type: "linear" }}
              // initial="hidden"
              // animate="visible"
              transition={{
                type: "spring", // You can choose a different transition type
                stiffness: 30, // Adjust the stiffness
                // damping: 20, // Adjust the damping
                delay: 0.1,
              }}
            >
              <img src="/stick-man.png" alt="" className={styles.stickImage} />
            </motion.div>
            <motion.div
              className={styles.messageContainer}
              variants={{
                hidden: { opacity: 0, y: -100, x: 0 },
                enter: { opacity: 1, y: 0, x: 0 },
              }}
              initial="hidden"
              animate="enter"
              // transition={{ type: "linear" }}
              // initial="hidden"
              // animate="visible"
              transition={{
                type: "spring", // You can choose a different transition type
                stiffness: 30, // Adjust the stiffness
                // damping: 20, // Adjust the damping
                delay: 0.1,
              }}
            >
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
                  <p className={styles.textPhone}>+251970722734</p>
                </div>
                <div className={styles.textContainer}>
                  <MdEmail className={styles.email} />
                  <p className={styles.textPhone}>raheld721@gmail.com</p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h3 className={styles.sendText}>Send us a Message</h3>
                <input
                  type="text"
                  placeholder="Name"
                  className={styles.inputText}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className={styles.inputText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Message"
                  className={styles.inputText}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className={styles.sendBtn}>
                  Send
                </button>
              </form>
            </motion.div>
          </div>
        </main>
      )}
    </>
  );
};

export default Contact;
