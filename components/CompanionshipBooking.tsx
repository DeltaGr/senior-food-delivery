"use client";

import { useSearchParams } from "next/navigation";
import { companions } from "@/data/companions";

export default function CompanionshipBooking() {
  const params = useSearchParams();
  const selected = params.get("companion");
  const companion = companions.find((c) => c.id === selected);

  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-3xl font-semibold mb-6"> Book Companionservice</h1>

      {companion && (
        <div className="mb-6 p-4 bg-[#FAF9F6] rounded-lg">
          <p className="font-medium">Selected Companions</p>
          <p>{companion.name}</p>
          </div>
      )}
    </div>
  );
}
