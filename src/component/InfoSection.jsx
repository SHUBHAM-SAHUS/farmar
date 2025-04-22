'use client';
import React from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const features = [
  'Spread Awareness in Residue Free farming (IPM)',
  'Enhancement in income of the Small Scale Farmers',
  'To Make Brand of the Farmers Base Company.',
  'Export and Domestic Supply by Farmer Directly.',
  'To Make Brand of the Farmers Base Company.',
];

const FPOSection = () => {
  return (
    <section className="w-full py-8 px-2 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 text-center mb-2">
            About Us
          </h2>
          <div className="w-12 sm:w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-green-400 mx-auto mb-6 sm:mb-8" />
        </div>

        <div className="flex flex-col gap-6 md:gap-8 ">
          {/* First Row */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:items-center items-start mb-4">
            <div className="w-full md:w-1/2">
              <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/SliderImage01.JPG"
                  alt="FPO"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
              <h3 className="text-xl sm:text-2xl font-semibold text-green-700 mb-3">
                Farmer Producer Organization
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                A Farmer Producer Organization (FPO) is{" "}
                <span className="text-green-700 font-semibold">
                  a group of farmers who produce agricultural products.
                </span>{" "}
                The Small Farmers’ Agribusiness Consortium (SFAC) is responsible
                for supporting state governments in the formation of FPOs. The
                Government of India also launched a scheme in 2020 to promote
                and form 10,000 FPOs.
              </p>
            </div>
          </div>
          {/* Second Row */}
          <div className="flex flex-col md:flex-row gap-8 lg:items-center items-start">
            <div className="w-full md:w-1/2 order-1 md:order-0">
              <ul className="space-y-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 text-green-600">
                      <CheckCircle size={22} />
                    </span>
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0 order-0 md:order-1">
              <div className="relative w-full h-40 xs:h-48 sm:h-56 md:h-72 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/assets/SliderImage02.JPG"
                  alt="Farmers Group"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FPOSection;
