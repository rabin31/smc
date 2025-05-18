import React from "react";
import { BookOpen, Calendar, CircleChevronRight, GraduationCap } from "lucide-react";
import { studyData } from "./StudyData";

const IconMap = {
  Study: <GraduationCap className="w-4 h-4 text-red-600" />,
  Event: <Calendar className="w-4 h-4 text-red-600" />,
};

interface StudyTagProps {
  type: keyof typeof IconMap;
}

const StudyTag = ({ type }: StudyTagProps) => (
  <div className="flex items-center font-serif italic text-[#1B153E]">
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
  <div className="flex items-start mb-12 gap-6">
    <div className="w-1/2 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[4/3] object-cover transition-transform duration-300 hover:scale-105" 
      />
    </div>
    <div className="w-2/3">
      <h3 className="text-[1rem] md:text-[1.2rem] font-serif text-[#1B153E] leading-tight relative group cursor-pointer mb-3">
        <span className="bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
          {title}
        </span>
      </h3>
      <StudyTag type={tag} />
    </div>
  </div>
);

const Study = () => {
  return (
    <section className="w-full mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-10">
      {/* Heading */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1B153E]">{studyData.title}</h2>
        <a href="#" className="text-sm gap-2 flex items-center text-gray-900 font-medium whitespace-nowrap">
          Learn more about studying with us 
          <CircleChevronRight className="ml-1 w-5 h-5 text-red-600" />
        </a>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-2">
        {/* Main Image and Text */}
        <div className="lg:col-span-3">
          <div className="relative w-full">
            <div className="relative overflow-hidden">
              <img
                src={studyData.main.image}
                alt={studyData.main.heading}
                className="w-full aspect-video object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="mt-6 md:mt-8">
              <h3 className="text-2xl md:text-3xl font-serif text-[#1B153E] leading-tight relative group cursor-pointer mb-3">
                <span className="bg-left-bottom bg-gradient-to-r from-red-600 to-red-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
                  {studyData.main.heading}
                </span>
              </h3>
              <p className="text-gray-700 mb-4">{studyData.main.description}</p>
              <StudyTag type={studyData.main.tag as keyof typeof IconMap} />
            </div>
          </div>
        </div>

        {/* Side Cards */}
        <div className="lg:col-span-2">
          {studyData.sideCards.map((card, idx) => {
            const tag = card.tag as keyof typeof IconMap;
            if (!IconMap[tag]) return null;
            return (
              <SideCard key={idx} {...card} tag={tag} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Study;
