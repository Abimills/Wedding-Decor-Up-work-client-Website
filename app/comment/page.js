"use client";
import { useState } from "react";
import styles from "../../styles/comment.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Loading from "../loading";
import { useRouter } from "next/navigation";
const Comment = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState({ name: false, comment: false });
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [comment, setComment] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    if (!name) {
      toast.error("Please fill name field...");
      setError({ ...error, name: true });
    }
    if (!comment) {
      toast.error("Please fill comment field...");
      setError({ ...error, comment: true });
    } else {
      setLoading(true);
      const imgId = Math.floor(Math.random() * 9);
      const res = await axios.post(" http://localhost:3000/api/comment", {
        name,
        comment,
        email,
        img: imgId,
      });
      if (res?.data) {
        setLoading(false);
        toast.success("Thank you for commenting...", {
          duration: 9000,

          style: {
            background: "lightGreen",
            color: "white",
            fontFamily: "sans-serif",
          },
        });
        toast.success("Your comment has been send to Qendel decor Team...", {
          duration: 9000,

          style: {
            background: "lightGreen",
            color: "white",
            fontFamily: "sans-serif",
          },
        });
        setName("");
        setEmail("");
        setComment("");
        router.push("/");
      } else {
        setLoading(false);
        toast.error("something went wrong, please contact the team...");
      }
      // redirect
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.main} fallback={<Loading />}>
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
      )}
    </>
  );
};

export default Comment;
