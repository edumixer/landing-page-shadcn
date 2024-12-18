import { Button } from "@/components/ui/button";

export const TaskOrganizer = () => {
  return (
    <section id="home" className="mt-10 flex flex-col h-[800px]">
      <div className="flex-1 p-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          {/* Left content */}
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-900 dark:text-gray-100">Organize</span>
              <br />
              <span className="text-green-500">your daily jobs</span>
            </h1>
            <p className="text-xl mb-6 text-gray-700 dark:text-gray-300">
              The only way to get things done
            </p>
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white dark:text-gray-900"
            >
              <a href="#toDoList">Go to To-do list</a>
            </Button>
          </div>

          <div className="relative sm:w-full md:w-1/2 h-96">
            {/* Ícone "<" posicionado à direita */}
            <div className="absolute top-0 right-8 sm:right-4 flex justify-center items-center z-0 lg:text-[86rem] sm:text-[15rem] text-green-500 w-[300px] h-[300px] font-bold">
              &lt;
            </div>

            {/* Imagem no canto superior */}
            <img
              src="https://s3-alpha-sig.figma.com/img/74cc/8f84/588e67d77f9dab9398ae87d374249503?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ELBpUKIaq6spESjV7HzRz3Zn0jicRIEYC~q~-tAar6UA8L8kFtkU-OoNGtrC1-E43mP5SZWLfqT78DsLVboEBhQXloAEGnK4CyWSMzQ40BgeAf1ZDOj3pJDq-Ba~0M2OSDv~VOA3ZmqZxoSUmycQQUYp4R~zSVIclrnrETAi~LPoEDafNIXusuAyrMaDXkXACxl0fOE762OSY75TcciCZ5isMR4LEYxwPVkmLjJd~OU-8o73-FTFxvSfMZt~i9N6xsNsitVWh3pOkb8Ohx845qRTjKORUCi3m4YIsw2nzxQ2aotTzm0f4iMjMcI-mRd4fdpzUTPotLcIMW7nae6R4w__"
              alt="Modern kitchen interior"
              className="absolute top-14 -right-12 w-[400px] h-[500px] object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
