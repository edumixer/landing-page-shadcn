import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeatureProps {
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image:
      "https://s3-alpha-sig.figma.com/img/df70/51d7/36bf5a83a66136ade04460e824cdc7c2?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n3GG0vRyaE9En2wVEr5tN-vulbyrgpdWcQtq4HOVqTLd4-dBhG1N-ShSfwrX-IjbMeng~vIH~LE5SAby8zUQaAgqKclaTS-KKf-pxXdT6oIPN7fCMIn5rMSV9ypCEKsX73EXMehVbeF7~ungn26Q~KpbQBj2plxL8-rUTCmqU3SYNF6HEBGEzCv2eroTtz-XG4cNI9a2pyISJduE0iI0emjvs-AW5h914I9qX-dTjFFZlKtYxsrx-tEFz3614WWv78a~g43yk9Y~iSSEvIaV0m0UR6OmSGpa~3LvyfyiQL6qs6c00Izfo02m3K-HVgtSEUBWP4EeWVBT-PZql6916w__",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image:
      "https://s3-alpha-sig.figma.com/img/c525/7edf/ab9e8a94f824eb12ba3113e122597353?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqUAGEerl~NElDBBVCsFGSWwD8CmaixN7LwkwwKJZsfH7cTuG-hGRhMRpq7Vj3jMwNGpVA4PWVHixlYMVFraJqNR3xOEOxDsvx3WpYBsEPu~u-NQpsOZVoEne9CBxoc0p2b7kQeiUkCKGKUya5bJta8QXJ8dmQ63-AXMtXbUBByTOMOmoD85BluMg6gKF4P5jqWXfB1pMkD-~LzvJ-r0fWv9t5PdM-ZYesa~~q4i95wg4V2Xn~KSl728KxAoojyju6955Sfhmyx4ENjbyqBM1YuHbPSvyo3dZXcBDlDfyrap7H6RwmYMZIUOwvmMpQ1aHFZbhxk3nDAbHw2BiuatuA__",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image:
      "https://s3-alpha-sig.figma.com/img/1063/8c16/66e94511001413355468fc721c26e5c7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPrKjHKbu~Ikj54W8g365q4kXUfuAwmg1ATa2972Lxrzo-6DQdfOaus3v3K1QHmZUhutOOfwqUF9U77f6ogpGT8I0Rd0cpd9SXo4zhyUch~8o5pN3wdAICnwTbhkgcxKdEr~l5AONbeHNWWGx0m8flTMgjKybcn72aoGnZxYuwfLHebqeCl5W~ch~H-E3A40f3MMyk5SOHk~Lq48qUTt7k5dfxqSh6T2ZiJ~IF7vtoZzYduTsfKnzp~OrGFgWY9hrcfy~cZjLxcPSVMljjvKOCaK-Sb7R3xOaszcygGeaZib-76HA-NCzu2aBh~gSlMO0AE7DXKSywGBQjkEd2lkuw__",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image:
      "https://s3-alpha-sig.figma.com/img/1063/8c16/66e94511001413355468fc721c26e5c7?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cPrKjHKbu~Ikj54W8g365q4kXUfuAwmg1ATa2972Lxrzo-6DQdfOaus3v3K1QHmZUhutOOfwqUF9U77f6ogpGT8I0Rd0cpd9SXo4zhyUch~8o5pN3wdAICnwTbhkgcxKdEr~l5AONbeHNWWGx0m8flTMgjKybcn72aoGnZxYuwfLHebqeCl5W~ch~H-E3A40f3MMyk5SOHk~Lq48qUTt7k5dfxqSh6T2ZiJ~IF7vtoZzYduTsfKnzp~OrGFgWY9hrcfy~cZjLxcPSVMljjvKOCaK-Sb7R3xOaszcygGeaZib-76HA-NCzu2aBh~gSlMO0AE7DXKSywGBQjkEd2lkuw__",
  },
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Organize your life{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          achieve good things
        </span>
      </h2>

      <div className="relative pt-10">
        <div className="bg-green-500 w-[90%] h-[90%] rounded-lg absolute transform -translate-x-6 -translate-y-8"></div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="relative w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {features.map(({ description, image }, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full">
                  <div className="absolute right-0 w-8 h-16" />

                  <img
                    src={image}
                    alt={description}
                    className="w-full h-48 object-cover"
                  />

                  <CardContent className="pt-6 space-y-4">
                    <span className="inline-block text-sm px-4 py-1 rounded-full border border-gray-200">
                      function
                    </span>
                    <p className="font-regular text-lg">{description}</p>
                  </CardContent>

                  <CardFooter className="flex-col items-start gap-4">
                    <button className="text-primary hover:underline">
                      read more
                    </button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
