import Navbar from "@/components/Navbar";
import styles from "../../styles/service.module.css";
import Service from "@/components/Service";
import Book from "../book/page";
import Footer from "@/components/Footer";
import Explore from "../explore/page";

const Services = () => {
  return (
    <main className={styles.main}>
      <Navbar />
      <Service />
      <Explore />
      <Footer />
    </main>
  );
};

export default Services;
