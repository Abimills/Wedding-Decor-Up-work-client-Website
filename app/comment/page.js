"use client";
import { useState } from "react";
import styles from "../../styles/comment.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/Navbar";
import axios from "axios";
const Comment = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState({ name: false, comment: false });
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      alert("Please fill name");
      setError({ ...error, name: true });
    }
    if (!comment) {
      alert("Please fill comment");
      setError({ ...error, comment: true });
    } else {
      const imgId = Math.floor(Math.random() * 9);
      const res = await axios.post(" http://localhost:3000/api/comment", {
        name,
        comment,
        email,
        img: imgId,
      });
      if (res?.data) {
        setName("");
        setEmail("");
        setComment("");
      }
      // redirect
    }
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <h1 className={styles.bookHeader}>Thank you for commenting</h1>
      <div className={styles.bookContainer}>
        <div className={styles.leftBook}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.name}
            placeholder="* Name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.name}
            placeholder=" Email"
          />
          <input
            type="text"
            value={comment}
            className={styles.name}
            onChange={(e) => setComment(e.target.value)}
            placeholder="* write your comment here"
          />

          {/* <input type="text" className={styles.name} placeholder="city" /> */}
        </div>
      </div>
      <div className={styles.bookBtnContainer}>
        <button className={styles.bookBtn} onClick={handleSubmit}>
          Comment
        </button>
      </div>
    </div>
  );
};

export default Comment;
