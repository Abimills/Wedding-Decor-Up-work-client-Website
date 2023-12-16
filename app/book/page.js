"use client";
import { useState } from "react";
import styles from "../../styles/book.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Footer from "@/components/Footer";
const Book = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const dateFormat = (date) => {
    const inputDate = new Date(date);

    const year = inputDate.getFullYear();
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 to month as it is zero-based
    const day = inputDate.getDate().toString().padStart(2, "0");

    const formattedDate = `${month}/${day}/${year}`;
    console.log({ formated: formattedDate });
    return formattedDate;
  };
  console.log(dateFormat(selectedDate));
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
          alert("succefully sent to host");
          setName("");
          setEmail("");
          setCity("");
          setDescription("");
          setSelectedDate("");
          setSelectedEvent("");
          setSelectedPlace("");
          setPhoneNumber("");
        } else {
          alert("something went wrong contact development team");
        }
      }
    } else {
      alert("fill required field");
      console.log(data);
    }
  };

  return (
    <div className={styles.main}>
      <Navbar />
      <h1 className={styles.bookHeader}>Book your Party</h1>
      <form className={styles.bookContainer}>
        <div className={styles.leftBook}>
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
        </div>
        <div className={styles.rightBook}>
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
              <option value="">* Select an Event</option>
              <option value="birthday">Birthday</option>
              <option value="wedding">Wedding</option>
              <option value="graduation">Graduation Party</option>
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
        </div>
      </form>
      <div className={styles.bookBtnContainer}>
        <button className={styles.bookBtn} onClick={handleSubmit}>
          Book Date
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
