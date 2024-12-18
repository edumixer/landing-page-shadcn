export function CardRotate() {
  return (
    <section
      id="toDoList"
      className="relative flex justify-center items-center overflow-hidden h-[580px]"
    >
      <div className="relative w-full max-w-[1920px] h-[350px] transform -rotate-4 scale-105">
        {/* Texto reto dentro do card rotacionado */}
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center -rotate-6">
          <h2 className="text-5xl font-bold text-white mb-4 rotate-6 border-b-4 border-green-500 pb-2">
            To-do List
          </h2>
          <p className="text-xl text-white text-center max-w-lg rotate-6">
            Drag and drop to set your main priorities, check when done and
            create what’s new.
          </p>
        </div>
      </div>
    </section>
  );
}
