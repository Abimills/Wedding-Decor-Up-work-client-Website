import Navbar from "@/components/Navbar";
import styles from "../../styles/explore.module.css";
import { IoMdCall } from "react-icons/io";
import Footer from "@/components/Footer";
import Booking from "@/components/Booking";
import Loading from "../loading";

const Explore = () => {
  return (
    <div className={styles.main}>
      <Navbar />

      <Booking fallback={<Loading />} />
      <Footer />
    </div>
  );
};

export default Explore;
