import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import WeeklyMenu from "@/components/WeeklyMenu";
import CompanionshipBooking from "@/components/CompanionshipBooking";
import HowItWorks from "@/components/HowItWorks";
import AboutAndBenefits from "@/components/AboutAndBenefits";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutAndBenefits />
      <FoodShowcase />
      <WeeklyMenu />
      <HowItWorks />
      <CompanionshipBooking />
    </main>
  );
};
