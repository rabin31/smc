'use client'
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Academics() {
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const bachelorsPrograms = [
    { id: 'bca', title: 'Bachelors In Computer Application' },
    { id: 'bba', title: 'Bachelors In Business Administration' },
    { id: 'bhm', title: 'Bachelors In Hotel Management' }
  ];
  
  const mastersPrograms = [
    { id: 'mca', title: 'Masters In Computer Application' }
  ];
  
  const ProgramButton: React.FC<{
    id: string;
    title: string;
    onMouseEnter: (id: string) => void;
    onMouseLeave: () => void;
    isHovered: boolean;
    isDark: boolean;
  }> = ({ id, title, onMouseEnter, onMouseLeave, isHovered, isDark }) => (
    <button 
      className={`flex items-center justify-between border border-gray-300 px-6 py-3 mb-4 transition-all duration-300 ${
        isHovered ? 'transform translate-x-2' : ''
      } ${isDark ? 'bg-[#1B153E] text-white hover:bg-[#1b153ea4]' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      <span>{title}</span>
      <ArrowRight 
        className={`transition-transform duration-300 ${
          isHovered ? 'transform translate-x-1' : ''
        }`}
        size={20}
      />
    </button>
  );
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl text-center text-[#1B153E] font-serif">Academics & Programs</h1>
      
      <div className="text-gray-800 p-3 text-center mb-8 mx-auto max-w-3xl">
        <p>Here's To The Crazy Ones. The Misfits. The Rebels. The Troublemakers. The Round Pegs In The Square Holes.</p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-gray-100 p-8">
          <h2 className="text-3xl font-serif mb-6 text-[#1B153E]">Bachelors</h2>
          
          {bachelorsPrograms.map(program => (
            <ProgramButton
              key={program.id}
              id={program.id}
              title={program.title}
              onMouseEnter={(id) => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
              isHovered={hoveredItem === program.id}
              isDark={false}
            />
          ))}
        </div>
        
        <div className="w-full md:w-1/2 bg-[#1B153E] p-8 text-white">
          <h2 className="text-3xl font-serif mb-6">Masters</h2>
          
          {mastersPrograms.map(program => (
            <ProgramButton
              key={program.id}
              id={program.id}
              title={program.title}
              onMouseEnter={(id) => setHoveredItem(id)}
              onMouseLeave={() => setHoveredItem(null)}
              isHovered={hoveredItem === program.id}
              isDark={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}