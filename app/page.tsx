import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import WeeklyMenu from "@/components/WeeklyMenu";
import CompanionshipBooking from "@/components/CompanionshipBooking";
import HowItWorks from "@/components/HowItWorks";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <FoodShowcase />
      <WeeklyMenu />
      <CompanionshipBooking />
    </main>
  );
};
