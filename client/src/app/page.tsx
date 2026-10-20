import Image from "next/image";
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/Hero';
import OpportunityBoard from "@/components/home/OppurtunityBoard";
import Categories from '../components/home/Categories';
import HowItWorks from '../components/home/HowItWorks';
import LabelGuide from '../components/home/LabelGuide';
import CVFeature from '../components/home/CVFeature';
import AdviceBlog from '../components/home/AdviceBlog';
import FAQ from '../components/home/FAQ';
import BottomCTA from '../components/home/BottomCTA';
import Footer from '../components/layout/Footer';

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
        <CVFeature />
        <AdviceBlog />
        <FAQ />
        <BottomCTA />
        <Footer />
      </main>
    </div>
  );
}
