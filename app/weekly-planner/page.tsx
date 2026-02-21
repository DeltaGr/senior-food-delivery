"use client";

import { useState } from "react";
import MealSelectModal from "@/components/weekly-planner/MealSelectModal";
import { MEALS } from "@/data/meals";

type PlannedMeal = {
  id: string;
  name: string;
  category: string;
};

export default function WeeklyPlannerPage() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [weeklyPlan, setWeeklyPlan] = useState<Record<string, PlannedMeal[]>>(
    () =>
      days.reduce((acc, day) => {
        acc[day] = [];
        return acc;
      }, {} as Record<string, PlannedMeal[]>)
  );

  const [modalDay, setModalDay] = useState<string | null>(null);

  const assignMealToDay = (day: string, meal: PlannedMeal) => {
    setWeeklyPlan((prev) => ({
      ...prev,
      [day]: [...prev[day], meal], // Meal anhängen
    }));
  };

  const removeMealFromDay = (day: string, mealId: string) => {
    setWeeklyPlan((prev) => ({
      ...prev,
      [day]: prev[day].filter((m) => m.id !== mealId),
    }));
  };

  return (
    <main className="min-h-screen bg-[#FDF7F0] px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-[#2F3B2F] mb-8">
          Weekly Meal Planner
        </h1>

        <p className="text-[#5C6A5C] mb-6 max-w-2xl">
          Plan your meals for the entire week. Select dishes from the menu and assign them to each day.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {days.map((day) => {
            const meals = weeklyPlan[day];

            return (
              <div
                key={day}
                className="rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-[#2F3B2F] mb-3">
                  {day}
                </h2>

                {meals.length > 0 ? (
                  <div className="space-y-3">
                    {meals.map((meal) => (
                      <div
                        key={meal.id}
                        className="border border-[#E6E2DA] rounded-lg p-3 bg-[#FAF8F4]"
                      >
                        <p className="font-medium text-[#2F3B2F]">{meal.name}</p>
                        <p className="text-sm text-[#7A8F7A] capitalize">
                          {meal.category}
                        </p>

                        <button
                          onClick={() => removeMealFromDay(day, meal.id)}
                          className="mt-2 text-sm text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[#7A8F7A]">No meals selected yet</p>
                )}

                <button
                  onClick={() => setModalDay(day)}
                  className="mt-4 w-full rounded-lg bg-[#7A8F7A] px-3 py-2 text-white hover:bg-[#6A7F6A]"
                >
                  Add Meal
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {modalDay && (
        <MealSelectModal
          meals={MEALS}
          onSelect={(meal) => {
            assignMealToDay(modalDay, meal);
            setModalDay(null);
          }}
          onClose={() => setModalDay(null)}
        />
      )}
    </main>
  );
}
