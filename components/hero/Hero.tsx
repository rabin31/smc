'use client'
import { useState } from "react";
import { Newspaper, Calendar, BookOpen } from "lucide-react";
import { heroData } from './HeroData';

export default function Hero() {

  const [hoveredIndex, setHoveredIndex] = useState(null);


  const getIcon = (type: string) => {
    switch (type) {
      case 'news':
        return <Newspaper className="w-5 h-5" />;
      case 'event':
        return <Calendar className="w-5 h-5" />;
      case 'study':
        return <BookOpen className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[85vh] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 h-full gap-1">
        <div 
          className="relative md:col-span-2 h-full overflow-hidden"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out ${hoveredIndex === 0 ? 'scale-105' : 'scale-100'}`}
            style={{ 
              backgroundImage: `url(${heroData.sections[0].image})`, 
              backgroundPosition: heroData.sections[0].backgroundPosition
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-opacity-70 p-1 rounded">{getIcon(heroData.sections[0].type)}</span>
              <span className="uppercase text-xs font-serif italic">{heroData.sections[0].type}</span>
            </div>
            <div className="group relative w-fit">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight text-white relative group cursor-pointer">
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out bg-[length:0%_2px]">
                  {heroData.sections[0].title}
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Side columns */}
        <div className="flex flex-col h-full gap-1">
          {[1, 2].map((i) => (
            <div 
              key={i} 
              className="relative flex-1 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out ${hoveredIndex === i ? 'scale-110' : 'scale-100'}`}
                style={{ 
                  backgroundImage: `url(${heroData.sections[i].image})`, 
                  backgroundPosition: heroData.sections[i].backgroundPosition 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
              </div>
              <div className="relative z-10 flex flex-col justify-end h-full p-4 text-white">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="bg-opacity-70 p-1 rounded">{getIcon(heroData.sections[i].type)}</span>
                  <span className="uppercase text-xs font-serif italic">{heroData.sections[i].type}</span>
                </div>
                <h3 className="text-lg font-serif leading-tight relative group cursor-pointer">
                  <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out bg-[length:0%_2px]">
                    {heroData.sections[i].title}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}