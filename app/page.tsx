import HeroSection from "@/components/blog/HeroSection";
import FeatureSection from './../components/blog/FeatureSection';
import BottomSection from './../components/blog/BottomSection';
export default function LandingPage() {
    return (
        <main className="px-[10px] md:px-[11%] py-[20px] md:py-[30px] text-center min-h-screen">
           <HeroSection/>
           <FeatureSection/>
           <BottomSection/>
          
        </main>
    );
}