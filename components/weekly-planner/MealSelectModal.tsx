"use client";

type Meal = {
  id: string;
  name: string;
  category: string;
  description?: string;
  calories?: number;
};

type Props = {
  meals: Meal[];
  onSelect: (meal: Meal) => void;
  onClose: () => void;
};

export default function MealSelectModal({ meals, onSelect, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[#2F3B2F] mb4">
          Select a Meal
        </h2>

        <div className="max-h-80 overflow-y-auto space-y-3">
          {meals.map((meal) => (
            <button
            key={meal.id}
            onClick={() => onSelect(meal)}
            className="w-full text-left p-3 rounded-lg border border-[#E6E2DA] hover:bg-[#F3EFE7] transition"
            >
              <p className="font-medium text-[#2F3B2F]">{meal.name}</p>
              <p className="text-sm text-[#7A8F7A] capitalize">{meal.category}</p>
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full rounded-lg bg-[#7A8F7A] px-4 py-2 text-white hover:bg-[#6A7F6A]"
          >
            Close
          </button>
      </div>
    </div>
  );
}
