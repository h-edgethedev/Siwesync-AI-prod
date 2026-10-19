import Image from "next/image";
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/Hero';
import OpportunityBoard from "@/components/home/OppurtunityBoard";
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import LabelGuide from '../components/home/LabelGuide';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white font-sans">
      <Navbar />
      <main className="w-full flex-1">
        <HeroSection />
        <OpportunityBoard />
        <Categories />
        <HowItWorks />
        <LabelGuide />
      </main>
    </div>
  );
}
