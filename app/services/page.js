import Navbar from "@/components/Navbar";
import styles from "../../styles/service.module.css";
import Service from "@/components/Service";
import Book from "../book/page";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";

const Services = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Service />
      <Booking />
      <Footer />
    </main>
  );
};

export default Services;
