"use client";

import React, { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function WeeklyMenu() {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Weekly Menu
      </h2>

      {/* Day Selector */}
      <div className="flex gap-3 justify-center mb-10 flex-wrap">
        {days.map((day) => (
          <button
           key={day}
           onClick={()=> setSelectedDay(day)}
           className={`px-4 py-2 rounded-lg text-lg ${
            selectedDay === day
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700"
           }`}
           >
            {day}
           </button>
        ))}
      </div>

      {/* Placeholder for dishses */}
      <div className="text-center text-xl text-gray-600">
        Dishes for <span className="font-semibold">{selectedDay}</span> will be shown here.
      </div>
    </section>
  );
}
