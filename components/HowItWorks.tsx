"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faTruck, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0); // FIX: nie null

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold text-[#1F2A1F] mb-4">
          How It Works
        </h2>

        <p className="text-[#5C6A5C] max-w-lg mx-auto mb-12 text-base">
          Fresh, senior‑friendly meals delivered with care — in three simple steps.
        </p>

        {/* STEPS */}
        <div className="grid grid-cols-3 mb-4">
          {[1, 2, 3].map((step) => {
            const isActive = activeStep === step;

            return (
              <div key={step} className="flex justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-semibold transition-all"
                  style={{
                    background: isActive ? "#3FAF67" : "#E8F3EC", // dezente Farbe
                    color: isActive ? "#FFFFFF" : "#2E7D57", // dezente Textfarbe
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                    animation: isActive ? "pulseStep 1.2s infinite" : "none",
                  }}
                >
                  {step}
                </div>
              </div>
            );
          })}
        </div>

        {/* LINIE + PUNKTE + PROGRESS */}
        <div style={{ position: "relative", width: "100%", height: "60px", marginBottom: "40px" }}>

          {/* Hintergrund-Linie */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: 0,
              right: 0,
              height: "4px",
              background: "#D9D6CE",
              borderRadius: "4px",
            }}
          ></div>

          {/* Gradient-Füllung */}
          <div
            style={{
              position: "absolute",
              top: "28px",
              left: 0,
              height: "4px",
              width:
                activeStep === 1
                  ? "33%"
                  : activeStep === 2
                  ? "66%"
                  : activeStep === 3
                  ? "100%"
                  : "0%",
              background: "linear-gradient(90deg, #3FAF67, #F28C28)",
              borderRadius: "4px",
              transition: "width 0.5s ease",
            }}
          ></div>

          {/* Animierte Punkte */}
          {[33, 66].map((pos, i) => {
            const stepIndex = i + 1;
            const isActive = activeStep >= stepIndex;

            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "22px",
                  left: `${pos}%`,
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  background: isActive ? "#3FAF67" : "#CFCBC4",
                  borderRadius: "50%",
                  transition: "background 0.3s ease",
                  animation: activeStep === stepIndex ? "pulseDot 1s infinite" : "none",
                }}
              ></div>
            );
          })}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div
            onMouseEnter={() => setActiveStep(1)}
            onMouseLeave={() => setActiveStep(0)}
            className="relative bg-white rounded-xl p-6 border border-[#E6E2DA] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {/* Pfeil */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: activeStep === 1 ? "10px solid #3FAF67" : "10px solid #CFCBC4",
                transition: "border-bottom-color 0.3s ease",
              }}
            ></div>

            <FontAwesomeIcon icon={faUtensils} style={{ fontSize: "30px" }} className="text-[#F28C28] mb-4" />
            <h3 className="text-lg font-semibold text-[#1F2A1F] mb-2">Choose Meals</h3>
            <p className="text-[#5C6A5C] text-sm">Pick from a curated menu of nutritious dishes.</p>
          </div>

          {/* CARD 2 */}
          <div
            onMouseEnter={() => setActiveStep(2)}
            onMouseLeave={() => setActiveStep(0)}
            className="relative bg-white rounded-xl p-6 border border-[#E6E2DA] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {/* Pfeil */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: activeStep === 2 ? "10px solid #3FAF67" : "10px solid #CFCBC4",
                transition: "border-bottom-color 0.3s ease",
              }}
            ></div>

            <FontAwesomeIcon icon={faTruck} style={{ fontSize: "30px" }} className="text-[#F28C28] mb-4" />
            <h3 className="text-lg font-semibold text-[#1F2A1F] mb-2">We Deliver</h3>
            <p className="text-[#5C6A5C] text-sm">Fresh meals delivered warm and on time.</p>
          </div>

          {/* CARD 3 */}
          <div
            onMouseEnter={() => setActiveStep(3)}
            onMouseLeave={() => setActiveStep(0)}
            className="relative bg-white rounded-xl p-6 border border-[#E6E2DA] shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            {/* Pfeil */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: activeStep === 3 ? "10px solid #3FAF67" : "10px solid #CFCBC4",
                transition: "border-bottom-color 0.3s ease",
              }}
            ></div>

            <FontAwesomeIcon icon={faHeart} style={{ fontSize: "30px" }} className="text-[#F28C28] mb-4" />
            <h3 className="text-lg font-semibold text-[#1F2A1F] mb-2">Enjoy</h3>
            <p className="text-[#5C6A5C] text-sm">Enjoy your meals — with optional companionship.</p>
          </div>

        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulseDot {
          0% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.4); }
          100% { transform: translateX(-50%) scale(1); }
        }

        @keyframes pulseStep {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
}
