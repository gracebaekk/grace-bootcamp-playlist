import Header from "../components/Header"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <Button />
      <Footer />
    </div>
  );
}