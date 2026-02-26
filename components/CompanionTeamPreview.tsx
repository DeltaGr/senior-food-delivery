"use client";

import Image from "next/image";
import Link from "next/link";
import { companions } from "@/data/companions";
import { motion } from "framer-motion";

export default function CompanionTeamPreview() {
  return (
    <section className="py-24 px-6 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#1F2A1F] mb-4">
          Unsere Begleiterinnen & Begleiter
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Menschen, die Zeit schenken – mit Geduld, Herz und echter Zuwendung.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {companions.slice(0, 3).map((c, index) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer"
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
            </motion.div>
          ))}
        </div>

        <Link
          href="/companions"
          className="inline-block mt-12 text-lg font-medium text-[#1F2A1F] underline hover:text-[#2E3A2E]"
        >
          Alle Begleiter ansehen →
        </Link>
      </div>
    </section>
  );
}
