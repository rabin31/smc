"use client";
import { useState, useEffect } from "react";
import {
  AlignJustify,
  CircleX,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import {
  studyData,
  CurrentStudentsData,
  ResearchData,
  AboutData,
  NewsData,
} from "./NavData";
import Link from "next/link";
import gsap from "gsap";
import { IoMdArrowDown } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";

const Navbar = () => {
  // Main dropdown state
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState({
    study: "study",
    currentStudents: "currentStudents",
    research: "research",
    about: "about",
    news: "news",
  });

  // Mobile navigation state
  const [navOpen, setNavOpen] = useState(false);

  // Mobile dropdown states
  const [mobileDropdowns, setMobileDropdowns] = useState({
    study: false,
    currentStudents: false,
    research: false,
    about: false,
    news: false,
  });

  // Toggle mobile navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // Toggle mobile dropdowns
  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdowns({
      ...mobileDropdowns,
      [dropdown]: !mobileDropdowns[dropdown as keyof typeof mobileDropdowns],
    });
  };

  // Handle desktop dropdown hover and clicks
  const handleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  // Handle category selection
  const handleCategorySelect = (type: string, category: string) => {
    setActiveCategory({
      ...activeCategory,
      [type]: category,
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbarElement = document.getElementById("navbar-container");
      if (navbarElement && !navbarElement.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div id="navbar-container" className="relative bg-[#1B153E]">
      {/* Main Navbar */}
      <div className="relative h-24 px-12 w-full flex items-center justify-between font-medium md:text-[0.9rem] text-1xl text-white">
        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/whitelogo.png" alt="Flyeast Adventures" className="h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          <Link href="/">
            <button className="relative group">
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Home
              </span>
            </button>
          </Link>

          {/* Study Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("study")}
              onMouseEnter={() => setActiveDropdown("study")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Study
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Current Students Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("currentStudents")}
              onMouseEnter={() => setActiveDropdown("currentStudents")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Current Students
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Research Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("research")}
              onMouseEnter={() => setActiveDropdown("research")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Research & Engagement
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Our federation Button */}
          <div className="relative">
            <button
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                Our federation
              </span>
            </button>
          </div>

          {/* About Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              onMouseEnter={() => setActiveDropdown("about")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                About Us
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* News Button */}
          <div className="relative">
            <button
              onClick={() => handleDropdown("news")}
              onMouseEnter={() => setActiveDropdown("news")}
              className="relative group flex items-center gap-1"
            >
              <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                News & Events
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleNav}
            className="p-2 hover:bg-gray-800 rounded-md transition-colors duration-300"
          >
            {navOpen ? <CircleX size={24} /> : <AlignJustify size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1B153E] bg-opacity-95 z-50 transition-all duration-300 transform ${
          navOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-8">
            <img src="./logo1.png" alt="HighFive Adventures" className="h-8" />
            <button
              onClick={toggleNav}
              className="text-white"
            >
              <CircleX size={28} />
            </button>
          </div>

          <nav className="text-white">
            <ul className="space-y-6">
              <li>
                <Link href="/" onClick={toggleNav}>
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Home
                  </span>
                </Link>
              </li>

              {/* Mobile Study Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("study")}
                >
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Study
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.study ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.study && (
                  <div className="mt-4 ml-4 space-y-3">
                    {studyData.items.map((item, index) => (
                      <Link href="#" key={index} onClick={toggleNav}>
                        <div className="flex items-center text-gray-300 group">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Current Students Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("currentStudents")}
                >
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Current Students
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.currentStudents ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.currentStudents && (
                  <div className="mt-4 ml-4 space-y-3">
                    {CurrentStudentsData.items.map((item, index) => (
                      <Link href="#" key={index} onClick={toggleNav}>
                        <div className="flex items-center text-gray-300 group">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile Research Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("research")}
                >
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Research & Engagement
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.research ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.research && (
                  <div className="mt-4 ml-4 space-y-3">
                    {ResearchData.items.map((item, index) => (
                      <Link href="#" key={index} onClick={toggleNav}>
                        <div className="flex items-center text-gray-300 group">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile About Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("about")}
                >
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    About Us
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.about ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.about && (
                  <div className="mt-4 ml-4 space-y-3">
                    {AboutData.map((item, index) => (
                      <Link href="#" key={index} onClick={toggleNav}>
                        <div className="flex items-center text-gray-300 group">
                          <ChevronRight className="w-4 h-4 mr-2" />
                          <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Mobile News Dropdown */}
              <li>
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown("news")}
                >
                  <span className="text-xl relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
                    News & Events
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileDropdowns.news ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {mobileDropdowns.news && (
                  <div className="mt-4 ml-4 space-y-3">
                    {NewsData.map((item, index) => (
                      <Link href="#" key={index} onClick={toggleNav}>
                        <div className="flex items-center text-gray-300 group">
                          <ChevronRight className="w-4 h-4 mr-2 " />
                          <span className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-[#20194A] after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Study Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1B153E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "study"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-42">
            {/* Middle Content Column */}
            <div className="w-full px-8 animate-fade-in overflow-hidden">
              <div className="h-full opacity-100 animate-fade-in">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {studyData.items.map((item, index) => (
                    <Link href="#" key={index}>
                      <li>
                        <div className="flex items-center gap-4 group">
                          <MdOutlineArrowRight className="h-6 w-6 text-[#FC3528]" />
                          <h1 className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Students Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1B153E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "currentStudents"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-42">
            {/* Middle Content Column */}
            <div className="w-full px-8 animate-fade-in overflow-hidden">
              <div className="h-full opacity-100 animate-fade-in">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {CurrentStudentsData.items.map((item, index) => (
                    <Link href="#" key={index}>
                      <li>
                        <div className="flex items-center gap-4 group">
                          <MdOutlineArrowRight className="h-6 w-6 text-[#FC3528]" />
                          <h1 className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research & Engagement Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1B153E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "research"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-42">
            {/* Middle Content Column */}
            <div className="w-full px-8 animate-fade-in overflow-hidden">
              <div className="h-full opacity-100 animate-fade-in">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {ResearchData.items.map((item, index) => (
                    <Link href="#" key={index}>
                      <li>
                        <div className="flex items-center gap-4 group">
                          <MdOutlineArrowRight className="h-6 w-6 text-[#FC3528]" />
                          <h1 className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1B153E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "about"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-42">
            {/* Middle Content Column */}
            <div className="w-full px-8 animate-fade-in overflow-hidden">
              <div className="h-full opacity-100 animate-fade-in">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {AboutData.map((item, index) => (
                    <Link href="#" key={index}>
                      <li>
                        <div className="flex items-center gap-4 group">
                          <MdOutlineArrowRight className="h-6 w-6 text-[#FC3528]" />
                          <h1 className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* News & Events Dropdown */}
      <div
        className={`absolute left-0 w-full bg-[#1B153E] text-white shadow-lg transition-all duration-300 z-40 bg-[url('/navbg.svg')] bg-cover ${
          activeDropdown === "news"
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8">
          <div className="flex h-42">
            {/* Middle Content Column */}
            <div className="w-full px-8 animate-fade-in overflow-hidden">
              <div className="h-full opacity-100 animate-fade-in">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {NewsData.map((item, index) => (
                    <Link href="#" key={index}>
                      <li>
                        <div className="flex items-center gap-4 group">
                          <MdOutlineArrowRight className="h-6 w-6 text-[#FC3528]" />
                          <h1 className="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-white after:origin-bottom-right after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                            {item.name}
                          </h1>
                        </div>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;