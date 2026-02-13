"use client";

import { useState } from "react";
import DishCard from "@/components/menu/DishCard";
import CategoryFilter from "@/components/menu/CategoryFilter";

const DISHES = [
  {
    id: "1",
    name: "Soft Vegetable Risotto",
    description: "Creamy risotto with seasonal vegetables. Easy to chew and digest.",
    category: "lunch",
    calories: 480,
  },
  {
    id: "2",
    name: "Oatmeal with Berries",
    description: "Warm oatmeal with soft berries and a spoon of yogurt.",
    category: "breakfast",
    calories: 320,
  },
  {
    id: "3",
    name: "Steamed Fish & Mashed Potatoes",
    description: "Tender fish fillet with creamy mashed potatoes.",
    category: "dinner",
    calories: 520,
  },
  {
    id: "4",
    name: "Creamy Vegetable Soup",
    description: "Smooth blended soup, ideal for seniors with chewing difficulties.",
    category: "lunch",
    calories: 260,
  },
];

const CATEGORIES = [
  { value: "all", label: "All Meals" },
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "dinner", label: "Dinner" },
  { value: "snack", label: "Snacks" },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredDishes =
    activeCategory === "all"
      ? DISHES
      : DISHES.filter((dish) => dish.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FDF7F0]">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <header className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#7A8F7A]">
            Our Menu
          </p>
          <h1 className="mt-2 text-3xl font-bold text-[#2F3B2F]">
            Fresh, Senior‑Friendly Meals
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[#5C6A5C]">
            Browse our selection of healthy, easy‑to‑digest meals designed
            specifically for seniors.
          </p>
        </header>

        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>
    </main>
  );
}
