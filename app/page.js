import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Owner from "@/components/Owner";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Loading from "./loading";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar fallback={<Loading />} />
      <LandingPage fallback={<Loading />} />
      <Service fallback={<Loading />} />
      <Work fallback={<Loading />} />
      <Owner fallback={<Loading />} />
      <Testimonials fallback={<Loading />} />
      <Footer fallback={<Loading />} />
    </main>
  );
}
