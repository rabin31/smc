import React from 'react';
import {
  Book,
  Brain,
  Landmark,
  Building2,
  CircleChevronRight
} from 'lucide-react';

const exploreItems = [
  {
    title: 'Senate House Library',
    description: 'Based in the heart of London, Senate House Library houses millions of books, journals and digital resources.',
    icon: <Book className="h-10 w-10 text-red-600" />,
  },
  {
    title: 'School of Advanced Study',
    description: 'School of Advanced Study (SAS) is at the forefront of advancing the humanities in the UK.',
    icon: <Brain className="h-10 w-10 text-red-600" />,
  },
  {
    title: 'Institute in Paris',
    description: 'Offers the best of both worlds: a highly regarded UK degree taught in the heart of Paris.',
    icon: <Landmark className="h-10 w-10 text-red-600" />,
  },
  {
    title: 'Intercollegiate Halls',
    description: 'Offering a unique opportunity for students to live and socialise with peers from other universities.',
    icon: <Building2 className="h-10 w-10 text-red-600" />,
  },
];

const Explore = () => {
  return (
    <section className="bg-[#1b153d] text-white py-16 px-8">
      <h2 className="text-4xl font-serif mb-12">Explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {exploreItems.map((item, idx) => (
          <div key={idx} className="space-y-4">
            <div>{item.icon}</div>
            <h3 className="text-xl font-serif">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
            <a href="#" className="inline-flex items-center text-white font-semibold group">
              View more
              <CircleChevronRight className="ml-1 h-4 w-4 text-red-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Explore;
