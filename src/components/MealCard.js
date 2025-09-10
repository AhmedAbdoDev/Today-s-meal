import Image from "next/image";
function MealCard({ meal }) {
  const { name, image, description, trivia } = meal;
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-lg mx-auto transform transition-all hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill={true}
          sizes="(max-width: 1024px) 100vw, 448px"
          className="rounded-t-xl object-cover"
        />
      </div>
      <div className="p-6 text-right">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          {name}
        </h2>
        <p
          className="text-gray-600 mb-4 text-sm leading-relaxed text-left"
          style={{ whiteSpace: "break-spaces" }}
        >
          {description}
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h2 className=" text-3xl font-semibold text-gray-700 text-center">
            Fun Fact
          </h2>
          <p className="text-gray-500 text-xs mt-1 text-left">{trivia}</p>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
