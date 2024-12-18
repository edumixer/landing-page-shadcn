import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { features } from "@/mock/features";
import { useState } from "react";

const featuresPerPage = 3;

export const Features = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(features.length / featuresPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="relative">
        <div className="absolute bg-green-500 w-full h-[520px] rounded-lg -z-10"></div>
        <h2 className="text-5xl font-bold text-white z-10 pl-12 pt-16">
          good things
        </h2>
      </div>

      <div className="relative translate-x-14 translate-y-6 pt-10 bottom-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent
            className="relative transition-transform duration-300"
            style={{
              transform: `translateX(-${currentPage * 100}%)`,
            }}
          >
            {features.map(({ description, image }, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full shadow-lg rounded-lg">
                  <img
                    src={image}
                    alt={description}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="pt-6 space-y-4">
                    <span className="inline-block text-sm px-4 py-1 rounded-full border border-gray-200 text-gray-600">
                      function
                    </span>
                    <p className="font-regular text-lg text-gray-800">
                      {description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <button className="text-green-500 hover:underline">
                      read more
                    </button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="hidden md:flex"
            onClick={handlePrevious}
          />
          <CarouselNext className="hidden md:flex" onClick={handleNext} />
        </Carousel>
      </div>

      {/* Indicadores de navegação */}
      <div className="flex justify-center mt-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentPage === index ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};
