import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import WeeklyMenu from "@/components/WeeklyMenu";
import CompanionshipBooking from "@/components/CompanionshipBooking";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FoodShowcase />
      <WeeklyMenu />
      <CompanionshipBooking />
    </main>
  );
};
