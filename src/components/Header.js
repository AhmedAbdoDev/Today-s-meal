/* eslint-disable react/no-unescaped-entities */
export default function Header() {
  return (
    <header className="text-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
        today's Meal
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
        Can't decide what to eat? We'll suggest something!
      </p>
    </header>
  );
}
