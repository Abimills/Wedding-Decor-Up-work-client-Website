"use client";
import { useState } from "react";
import styles from "../../styles/book.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "@/components/Navbar";
const Book = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <h1 className={styles.bookHeader}>Book your Party</h1>
      <form className={styles.bookContainer}>
        <div className={styles.leftBook}>
          <input type="text" className={styles.name} placeholder="* Name" />
          <input type="text" className={styles.name} placeholder="* Email" />
          <input
            type="number"
            className={styles.name}
            placeholder="* Phone number"
          />

          <input type="text" className={styles.name} placeholder="city" />
        </div>
        <div className={styles.rightBook}>
          <div className={styles.eventSelector}>
            {/* <label className={styles.label}>Select Event:</label> */}
            <select
              id="event"
              className={styles.selection}
              value={selectedEvent}
              onChange={(e) => setSelectedPlace(e.target.value)}
            >
              <option value="">Select a Place</option>
              <option value="home">Home</option>
              <option value="hotel">Hotel</option>
              <option value="audium">Audium</option>
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
              <option value="">Select an Event</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="graduation">Graduation Party</option>
            </select>
          </div>
          {/* <label className={styles.label}>Select Date:</label> */}
          <DatePicker
            className={styles.dateSelection}
            selected={selectedDate}
            onChange={handleDateChange}
            placeholderText="* Pick a Date"
          />

          <input
            type="text"
            className={styles.textarea}
            placeholder="* any important notes for us"
          />
        </div>
      </form>
      <div className={styles.bookBtnContainer}>
        <button className={styles.bookBtn}>Book Date</button>
      </div>
    </div>
  );
};

export default Book;
