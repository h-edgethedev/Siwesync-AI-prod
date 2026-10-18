import Image from "next/image";
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/Hero';
import OpportunityBoard from "@/components/home/OppurtunityBoard";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-sans">
      <Navbar />
      <main className="w-full flex-1">
        <HeroSection />
        <OpportunityBoard />
      </main>
    </div>
  );
}
