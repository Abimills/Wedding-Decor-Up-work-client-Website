"use client";
import { useState } from "react";
import styles from "../../styles/book.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import axios from "axios";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import Loading from "../loading";
const Book = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const router = useRouter();
  const dateFormat = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); 
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${month}/${day}/${year}`;
    return formattedDate;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      phoneNumber,
      city,
      place: selectedPlace,
      eventType: selectedEvent,
      eventDate: selectedDate,
      description,
    };
    if (
      name &&
      email &&
      phoneNumber &&
      selectedPlace &&
      selectedEvent &&
      selectedDate
    ) {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/book", {
        ...data,
      });
      if (res.data) {
        const sent = await emailjs.send(
          "service_47a4poc",
          "template_vfcd9ih",
          {
            to_name: "Rahel",
            email: email,
            place: selectedPlace,
            eventType: selectedEvent,
            desiredDate: dateFormat(selectedDate),
            name,
            phone: phoneNumber,
            description: description
              ? description
              : "no further info from user",
            city: city ? city : "city not specified call user for more info",
          },
          "B9AqBC3nCLbkgYWgs"
        );
        if (sent.status == "200" || sent.ok) {
          setLoading(false);
          router.push("/");
          toast.success("Thank you for Booking with Qendel Decor", {
            duration: 9000,

            style: {
              background: "lightGreen",
              color: "white",
              fontFamily: "sans-serif",
            },
          });
          toast.success(
            "Our Team will get back to you within 2-3 working days",
            {
              duration: 9000,

              style: {
                background: "lightGreen",
                color: "white",
                fontFamily: "sans-serif",
              },
            }
          );
          setName("");
          setEmail("");
          setCity("");
          setDescription("");
          setSelectedDate("");
          setSelectedEvent("");
          setSelectedPlace("");
          setPhoneNumber("");
        } else {
          setLoading(false);
          toast.error("something went wrong contact development team");
        }
      } else {
        toast.error("something went wrong contact development team!");
        setLoading(false);
      }
    } else {
      toast.error("Please fill all required fields!");
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.main} fallback={<Loading />}>
          <Navbar />
          <motion.h1
            className={styles.bookHeader}
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
            Book your Party
          </motion.h1>
          <form className={styles.bookContainer}>
            <motion.div
              className={styles.leftBook}
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
              <input
                type="text"
                className={styles.name}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="* Name"
              />
              <input
                type="text"
                className={styles.name}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="* Email"
              />
              <input
                type="number"
                className={styles.name}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                placeholder="* Phone number"
              />

              <input
                type="text"
                className={styles.name}
                onChange={(e) => setCity(e.target.value)}
                value={city}
                placeholder="city"
              />
            </motion.div>
            <motion.div
              className={styles.rightBook}
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
              <div className={styles.eventSelector}>
                {/* <label className={styles.label}>Select Event:</label> */}
                <select
                  id="event"
                  className={styles.selection}
                  value={selectedPlace}
                  onChange={(e) => setSelectedPlace(e.target.value)}
                >
                  <option value="">* Select a Place</option>
                  <option value="home">Home</option>
                  <option value="hotel">Hotel</option>
                  <option value="venue">Venue</option>
                  <option value="other">other</option>
                </select>
              </div>
              <div className={styles.eventSelector}>
                {/* <label className={styles.label}>Select Place:</label> */}
                <select
                  id="event"
                  className={styles.selection}
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                >
                  <option value="">* Select an Event</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="graduation">Graduation Party</option>
                  <option value="other">other</option>
                </select>
              </div>
              {/* <label className={styles.label}>Select Date:</label> */}
              <div className={styles.datePickContainer}>
                <DatePicker
                  className={styles.dateSelection}
                  selected={selectedDate}
                  onChange={handleDateChange}
                  placeholderText="* Pick a Date"
                />
              </div>

              <input
                type="text"
                className={styles.textarea}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                placeholder="Any important notes for us"
              />
            </motion.div>
          </form>
          <motion.div
            className={styles.bookBtnContainer}
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
              delay: 0.9,
            }}
          >
            <button className={styles.bookBtn} onClick={handleSubmit}>
              Book Date
            </button>
          </motion.div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Book;
