"use client";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import styles from "../../styles/contact.module.css";
import { MdEmail } from "react-icons/md";
import { PiPhoneDisconnectFill } from "react-icons/pi";

import Footer from "@/components/Footer";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // template_vgrn2nk;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && message) {
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
      console.log(sent);
      if (sent.ok || sent.status == "200") {
        alert("Your Message has been Sent!");
      }
    } else {
      alert("Please fill all fields");
    }
  };

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
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
