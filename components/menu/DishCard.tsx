type Dish = {
  id: string;
  name: string;
  description: string;
  category: string;
  calories?: number;
};

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <div className="rounded-xl border border-[#E6E2DA] bg-white p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-cl font-semibold text-[#2F3B2F]">{dish.name}</h3>
      <p className="mt-2 text-sm text-[#5C6A5C]">{dish.description}</p>

      <div className="mt-4 flex items-center justify-between text-sm text-[#7A8F7A]">
        <span className="capitalize">{dish.category}</span>
        {dish.calories && <span>{dish.calories} kcal</span>}
      </div>
    </div>
  );
}
