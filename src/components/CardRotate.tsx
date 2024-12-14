export function CardRotate() {
  return (
    <section
      id="toDoList"
      className="bg-gray-900 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 relative -rotate-6 transform origin-left flex justify-center items-center min-h-[250px]"
    >
      <div className="relative bg-gray-900 dark:bg-gray-800 py-8 rotate-6 transform w-[300px] h-[120px] flex flex-col items-center justify-center">
        {/* Texto reto dentro do card rotacionado */}
        <div className="absolute -top-10 bg-gray-900 dark:bg-gray-800 py-5 px-4 rotate-6 transform">
          <h2 className="text-2xl font-bold text-center -rotate-6 border-b-2 border-green-500">
            To-do List
          </h2>
        </div>
        <p className="text-center text-md">
          Select and click to set your main priorities, check when done and
          create what's new.
        </p>
      </div>
    </section>
  );
}
