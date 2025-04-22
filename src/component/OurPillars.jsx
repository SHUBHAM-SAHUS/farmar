import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Farmers Support",
    desc: "Farmer support includes resources, training, and assistance to boost productivity and sustainability, offering financial aid, technology, expert advice, and market guidance.",
    icon: "/assets/ourPillar01.webp",
  },
  {
    title: "Farm-to-fork traceability",
    desc: "Our farmers see what happens with their produce after it leaves their farm, and our consumers see details about their food, their farmer, and what happens with the money they pay.",
    icon: "/assets/ourPillar02.webp",
  },
  {
    title: "IPM Farming",
    desc: "Residue-free products and practices tackle soil, pest, disease, and nutrition issues sustainably, boosting crop productivity and quality without harmful chemicals. This is called integrated pest management.",
    icon: "/assets/ourPillar03.webp",
  },
  {
    title: "Infrastructure",
    desc: "Infrastructure support for farmers includes developing essential facilities like irrigation systems, storage units, and transportation networks to improve productivity and efficiency.",
    icon: "/assets/ourPillar04.webp",
  },
];

const PillarsSection = () => {
  return (
    <div
      className="py-16 px-2 bg-cover bg-center bg-fixed mt-8"
      style={{ backgroundImage: "url('/assets/ourPillarBackground.webp')" }}
    >
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <div className="relative mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 drop-shadow-lg text-white hover:text-green-100 transition-colors duration-300">
            Our Pillars
          </h2>
          <div className="mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <Card
              key={index}
              className="h-full rounded-2xl shadow-lg text-center p-4 bg-white border border-green-100 hover:shadow-2xl transition-all duration-300 hover:bg-green-50 hover:-translate-y-1"
            >
              <CardContent className="flex flex-col items-center">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-2 object-contain inline-block transition-transform duration-300 hover:scale-110"
                />
                <h3 className="text-lg md:text-xl font-bold text-green-700 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-3 flex-1">
                  {item.desc}
                </p>
              </CardContent>
              <CardFooter className="flex justify-center pt-0">
                <Button className="bg-gradient-to-r from-green-600 to-green-400 text-white rounded-md text-base font-semibold transition-all duration-100 hover:from-green-500 hover:to-green-300 hover:scale-105 active:scale-95 hover:shadow-lg">
                  Read more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PillarsSection;
