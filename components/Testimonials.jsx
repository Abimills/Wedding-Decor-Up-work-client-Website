"use client";

import styles from "../styles/testi.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { BsFillEmojiSmileUpsideDownFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import commentData from "./commentData";
const Testimonials = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        " https://qendel-decor.vercel.app/api/comment"
      );
      setData(
        res.data?.comments
          ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6)
      );
    };
    fetchData();
  }, []);
  const formatDate = (date) => {
    const dateObject = new Date(date);

    const formattedDateString = dateObject.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDateString;
  };
  return (
    <div className={styles.testimonialsContainer}>
      <h1 className={styles.header}>Testimonials</h1>
      <div className={styles.testimonials}>
        {data?.map((comment) => {
          return (
            <div className={styles.testimonial}>
              <img
                src={commentData[comment?.img].img}
                alt=""
                className={styles.testiImages}
              />
              <p className={styles.testiText}>
                <FaQuoteLeft />
                {comment?.comment}
                <FaQuoteRight />
              </p>
              <div className={styles.timeContainer}>
                <p className={styles.name}>
                  {" "}
                  <span className={styles.testiText}>@</span> {comment?.name}
                </p>
                <p className={styles.time}>{formatDate(comment?.createdAt)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.commentBtnContainer}>
        <button
          className={styles.commentBtn}
          onClick={() => router.push("/comment")}
        >
          Give us a comment <BsFillEmojiSmileUpsideDownFill />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
