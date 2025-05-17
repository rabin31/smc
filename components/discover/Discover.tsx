import React from "react";
import { Calendar, GraduationCap } from "lucide-react";
import { discoverData } from "./DiscoverData";

interface SideCardData {
  image: string;
  title: string;
  tag: keyof typeof IconMap;
}

const IconMap = {
  Study: <GraduationCap className="w-4 h-4 text-red-600" />,
  Event: <Calendar className="w-4 h-4 text-red-600" />,
};

interface DiscoverTagProps {
  type: keyof typeof IconMap;
}

const StudyTag = ({ type }: DiscoverTagProps) => (
  <div className="flex items-center text-[#1B153E] font-serif italic">
    {IconMap[type]}
    <span className="ml-2">{type}</span>
  </div>
);

interface SideCardProps {
  image: string;
  title: string;
  tag: keyof typeof IconMap;
}

const SideCard = ({ image, title, tag }: SideCardProps) => (
  <div className="flex flex-col sm:flex-row items-start mb-6 gap-3">
    <div className="w-full sm:w-24 md:w-32 flex-shrink-0 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full aspect-square sm:aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="w-full pt-2 sm:pt-0">
      <h3 className="text-base font-serif leading-tight relative group cursor-pointer mb-2">
        <span className="bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out text-[#1B153E]">
          {title}
        </span>
      </h3>
      <StudyTag type={tag} />
    </div>
  </div>
);

const Discover = () => {
  return (
    <section className="w-full mx-auto py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-4 xl:px-8">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 lg:mb-12 gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900">
          {discoverData.title}
        </h2>
      </div>

      {/* Grid Layout - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 lg:col-span-3 order-1">
          <div className="w-full overflow-hidden">
            <img
              src={discoverData.main.image}
              alt={discoverData.main.heading}
              className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-4 md:mt-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#1B153E] leading-tight relative group cursor-pointer mb-3">
                <span className="bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                  {discoverData.main.heading}
                </span>
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4">
                {discoverData.main.description}
              </p>
              <StudyTag type={discoverData.main.tag as keyof typeof IconMap} />
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="md:col-span-2 lg:col-span-2 order-2 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {discoverData.sideCards.map((card, idx) => {
              const tag = card.tag as keyof typeof IconMap;
              if (!IconMap[tag]) return null; // Skip invalid tags
              return (
                <div key={idx} className="sm:col-span-1">
                  <SideCard
                    {...card}
                    tag={tag}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;