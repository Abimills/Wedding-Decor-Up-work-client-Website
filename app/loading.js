import Navbar from "@/components/Navbar";
import styles from "../styles/loading.module.css";
import Footer from "@/components/Footer";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={styles.loadingContainer}>
      <Navbar />
      <div className={styles.innerLoading}>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif"
          alt="Loading ..."
        />
      </div>
      <Footer />
    </div>
  );
}
