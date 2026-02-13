import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FoodShowcase from "@/components/FoodShowcase";
import WeeklyMenu from "@/components/WeeklyMenu";
import CompanionshipBooking from "@/components/CompanionshipBooking";
import PrintableOrderForm from "@/components/PrintableOrderForm";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FoodShowcase />
      <WeeklyMenu />
      <CompanionshipBooking />
      <PrintableOrderForm />
    </main>
  );
};
