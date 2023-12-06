import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Owner from "@/components/Owner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <LandingPage />
      <Service />
      <Work />
      <Owner />
      <Testimonials />
      <Footer />
    </main>
  );
}
