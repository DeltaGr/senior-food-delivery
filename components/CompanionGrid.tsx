"use client";

import Image from "next/image";
import Link from "next/link";
import { companions } from "@/data/companions";

export default function CompanionGrid() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-semibold text-[#1F2A1F] mb-12 text-center">
        Unsere Begleiter
      </h1>

      <div className="grid md:grid-cols-3 gap-10">
        {companions.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="relative w-40 h-40 mx-auto mb-4">
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="rounded-full object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#1F2A1F]">{c.name}</h3>
            <p className="text-gray-600 mb-4">{c.role}</p>

            <ul className="text-gray-700 text-sm space-y-1 mb-6">
              {c.traits.map((t) => (
                <li key={t}>• {t}</li>
              ))}
            </ul>

            <Link
              href={`/companions/${c.id}`}
              className="inline-block bg-[#1F2A1F] text-white px-4 py-2 rounded-lg hover:bg-[#2E3A2E] transition"
            >
              Profil ansehen
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
