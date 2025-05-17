'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  CalendarDays,
  CircleChevronRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const newsItems = [
  {
    date: 'May 25',
    day: '20',
    title: 'Undergraduate offer holder webinar',
    image:
      'https://thumbs.dreamstime.com/b/female-african-university-students-happy-library-56058751.jpg',
  },
  {
    date: 'May 25',
    day: '21',
    title: 'Global MBA webinar',
    image:
      'https://www.calmu.edu/hubfs/CMU_December2023/images/1498047526phpp5UGhY.png',
  },
  {
    date: 'May 25',
    day: '24',
    title: 'HKU SPACE University of London Programmes Info Day',
    image:
      'https://theredpen.in/wp-content/uploads/2022/06/Hero-Image-Final.jpg',
  },
  {
    date: 'Jun 25',
    day: '11',
    title:
      'University of London Federation – Cross-federation induction and networking event',
    image:
      'https://www.pace.edu/sites/default/files/styles/16_9_1600x900/public/2024-09/homepage-differentiators-new-york-3.jpg?h=854a7be2&itok=qWWMeoSP',
  },
  {
    date: 'Jul 25',
    day: '01',
    title: 'Another important event that has a longer title to test line clamping',
    image:
      'https://images.unsplash.com/photo-1509062566623-842be2619c62?fit=crop&w=1350&q=80',
  },
    {
    date: 'Aug 25',
    day: '15',
    title: 'Summer research program orientation',
    image:
      'https://images.unsplash.com/photo-1541339919213-fc0b6693f558?fit=crop&w=1350&q=80',
  },
];

// Determine items per page based on screen size using Tailwind breakpoints
const getItemsPerPage = () => {
  if (typeof window === 'undefined') return 3; // Default for SSR

  if (window.innerWidth >= 1024) { // lg breakpoint
    return 3;
  } else if (window.innerWidth >= 640) { // sm breakpoint
    return 2;
  } else { // default for small screens
    return 1;
  }
};


const NewsCard = ({ item }: { item: typeof newsItems[number] }) => (
  // Removed fixed width w-[30vw], let the grid handle it
  <div className="flex flex-col bg-white rounded shadow h-[360px] overflow-hidden">
    <div className="relative h-56 w-full overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute bottom-2 right-2 bg-[#1b153d] text-white text-center px-2 py-1 rounded">
        <div className="text-2xl font-bold leading-tight">{item.day}</div>
        <div className="text-xs">{item.date}</div>
      </div>
    </div>
    <div className="flex flex-col justify-between flex-grow p-3 space-y-3">
      {/* Applied the new hover effect classes here */}
      <h3 className="text-xl font-serif relative group w-fit cursor-pointer line-clamp-2">
        <span className="bg-left-bottom bg-gradient-to-r from-[#1b153d] to-[#1b153d] bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
           {item.title}
        </span>
      </h3>
      <div className="flex items-center text-red-600 space-x-2 mt-auto">
        <CalendarDays className="h-4 w-4" />
        <span className="italic text-sm text-[#1b153d]">Event</span>
      </div>
    </div>
  </div>
);

const News = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  // Recalculate itemsPerPage and adjust currentPage on window resize
  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = getItemsPerPage();
      setItemsPerPage(newItemsPerPage);
      // Adjust currentPage to prevent being out of bounds after resize
      const newTotalPages = Math.ceil(newsItems.length / newItemsPerPage);
      if (currentPage >= newTotalPages && newTotalPages > 0) { // Added check for newTotalPages > 0
        setCurrentPage(newTotalPages - 1);
      } else if (newTotalPages === 0) { // Handle case with no items
         setCurrentPage(0);
      }
    };

    // Set initial items per page on mount
    setItemsPerPage(getItemsPerPage());

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [currentPage, newsItems.length]); // Depend on currentPage and newsItems.length

  const totalPages = useMemo(() => Math.ceil(newsItems.length / itemsPerPage), [newsItems.length, itemsPerPage]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Only get items for the current page
  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return newsItems.slice(start, start + itemsPerPage);
  }, [currentPage, itemsPerPage, newsItems]);

  // Added a check to only render the section if there are items
  if (newsItems.length === 0) {
    return null; // Or display a "No news" message
  }

  return (
    <section className="bg-white py-16 px-6 md:px-12 text-[#1b153d]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1B153E]">Latest news and events</h2>
        <a
          href="#"
          className="text-[#1b153d] font-medium inline-flex items-center hover:underline"
        >
          See all news and events
          <CircleChevronRight className="ml-2 text-red-600" size={18} />
        </a>
      </div>

      {/* Slider - now only shows items for the current page */}
      {/* We use a grid directly here, and the number of columns is handled by responsive classes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((item, idx) => (
          <NewsCard key={idx} item={item} />
        ))}
      </div>

      {/* Pagination */}
      {/* Only show pagination if there is more than one page */}
      {totalPages > 1 && (
        <div className="mt-12 flex flex-col items-center gap-6">
          {/* Dots */}
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <span
                key={idx}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  idx === currentPage ? 'bg-red-600' : 'bg-red-200'
                }`}
                // Optional: Add functionality to jump to a page by clicking the dot
                onClick={() => setCurrentPage(idx)}
                role="button" // Indicate it's interactive
                aria-label={`Go to page ${idx + 1}`} // Accessibility label
                tabIndex={0} // Make it focusable
                onKeyPress={(e) => { // Handle keyboard navigation
                    if (e.key === 'Enter' || e.key === ' ') {
                        setCurrentPage(idx);
                    }
                }}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              aria-label="Previous page"
              className="border border-red-600 p-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              // Optional: Disable buttons at the start/end if infinite loop is not desired
              // disabled={currentPage === 0 && totalPages > 1}
            >
              <ChevronLeft className="h-4 w-4 text-red-600 hover:text-white" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next page"
              className="border border-red-600 p-2 rounded hover:bg-red-600 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              // Optional: Disable buttons at the start/end if infinite loop is not desired
              // disabled={currentPage === totalPages - 1 && totalPages > 1}
            >
              <ChevronRight className="h-4 w-4 text-red-600 hover:text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default News;