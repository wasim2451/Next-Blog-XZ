import HeroSection from "@/components/blog/HeroSection";
import FeatureSection from './../components/blog/FeatureSection';
export default function LandingPage() {
    return (
        <main className="px-[10px] md:px-[11%] py-[20px] md:py-[30px] text-center min-h-screen">
           <HeroSection/>
           <FeatureSection/>
          
        </main>
    );
}