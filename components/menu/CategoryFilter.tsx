type Category = {
  value: string;
  label: string;
};

type Props = {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (value: string) => void;
};

export default function CategoryFilter ({
  categories,
  activeCategory,
  onCategoryChange
}: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
         key={cat.value}
         onClick={() => onCategoryChange(cat.value)}
         className={`px-4 py-2 rounded-full text-sm font-medium transition
          ${
            activeCategory === cat.value
            ? "bg-[#7A8F7A] text-white"
            : "bg-[#E6E2DA] text-[#2F3B2F] hover:bg-[#D8D3C8]"
          }
          `}
          >
            {cat.label}
          </button>
      ))}
    </div>
  );
}
