import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import WeeklyMenu from "@/components/WeeklyMenu";
import CompanionshipBooking from "@/components/CompanionshipBooking";
import HowItWorks from "@/components/HowItWorks";
import AboutAndBenefits from "@/components/AboutAndBenefits";
import CompanionService from "@/components/CompanionService";
import CompanionTeamPreview

from "@/components/CompanionTeamPreview";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutAndBenefits />
      <FoodShowcase />
      <WeeklyMenu />
      <HowItWorks />
      <CompanionService />
      <CompanionTeamPreview />
      <CompanionshipBooking />
    </main>
  );
};
