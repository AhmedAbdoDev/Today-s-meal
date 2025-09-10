"use client";
import MealCard from "@/components/MealCard";
import { useState } from "react";

function MealChoose() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/meals");
      const data = await response.json();
      setMeal(data);
    } catch (error) {
      console.error("Failed to fetch meal:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="bg-gray-50 flex flex-col items-center justify-start p-8 text-center flex-grow">
      <button
        onClick={fetchRandomMeal}
        className="bg-green-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 mb-12 text-xl cursor-pointer"
      >
        {loading ? "Choosing your meal..." : "Choose a meal"}
      </button>
      {meal && !loading && <MealCard meal={meal} />}
    </main>
  );
}
export default MealChoose;
