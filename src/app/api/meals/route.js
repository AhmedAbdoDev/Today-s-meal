import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const mealData = response.data.meals[0];
  const meal = {
    id: mealData.idMeal,
    name: mealData.strMeal,
    image: mealData.strMealThumb,
    description: mealData.strInstructions,
    trivia: `this dish is a ${mealData.strArea} specialty!`,
    category: mealData.strCategory,
  };

  return NextResponse.json(meal);
}
