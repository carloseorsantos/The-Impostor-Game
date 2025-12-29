"use client";

import { wordCategories } from "@/app/create/category/utils/words";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ThemePage() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCreateGame = () => {
    if (selectedCategory === "") return;
    localStorage.setItem("category", selectedCategory);
    router.push("/game");
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans gap-4">
      <div className="join join-vertical btn-wide bg-white text-black border-[#e5e5e5]">
        {wordCategories.map((item, index) => (
          <input
            key={index}
            value={item.value}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="join-item btn"
            type="radio"
            name="category"
            aria-label={`${item.emoji} ${item.name}`}
          />
        ))}
      </div>
      <button
        className="btn btn-wide bg-white text-black border-[#e5e5e5] disabled:text-gray-400"
        onClick={() => handleCreateGame()}
        disabled={selectedCategory === ""}
      >
        Começar
      </button>
    </div>
  );
}
