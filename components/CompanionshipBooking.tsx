"use client";

import React, { useState } from "react";

export default function CompanionshipBooking () {
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const durations = [
    { label: "1 hour", value: "1h"},
    { label: "2 hour", value: "2h"},
    { label: "3 hour", value: "3h"},
  ];

  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Book Companionship
      </h2>

      <p className="text-lg text-gray-700 text-center mb-10">
        Many seniors feel lonely during dinner.
        Book a friendly dinner companionship for shared mealtime now.
      </p>

      <div className="flex flex-col gap-4 items-center">
        {durations.map((d) => (
          <button
           key={d.value}
           onClick={() => setSelectedDuration(d.value)}
           className={`w-full max-w-sm py-4 text-xl rounded-lg border-2 transition ${
            selectedDuration === d.value
            ? "bg-green-600 text-white border-green-700"
            : "bg-gray-100 text-gray-700 border-gray-300"
           }`}
           >
            {d.label}
           </button>
        ))}
      </div>

      {selectedDuration && (
        <div className="mt-10 text-center text-xl text-green-700 font-semibold">
          Chosen: {selectedDuration.replace("h", " Hour(s)")}
        </div>
      )}
    </section>
  )
}
