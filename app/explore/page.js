import Navbar from "@/components/Navbar";
import styles from "../../styles/explore.module.css";
import { IoMdCall } from "react-icons/io";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";

const Explore = () => {
  return (
    <div className={styles.main}>
      <Navbar />

      <Booking />
      <Footer />
    </div>
  );
};

export default Explore;
