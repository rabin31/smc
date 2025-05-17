import { Instagram, Facebook, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white py-8 px-8 bg-cover bg-center">
      <div className="absolute inset-0 bg-[#1B153E] z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Title */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-red-600">
                <img src="/" alt="" />
              </div>
              <div className="ml-2">
                <div className="text-sm font-semibold">सरस्वती बहुमुखी क्याम्पस</div>
                <div className="text-sm">Saraswati Multiple Campus</div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-2">000 9849 494343</p>
            <p className="mb-4">
              Lekthnath Marg, Thamel
              <br />
              Kathmandu
            </p>
            <button className="bg-transparent border border-red-600 text-red-600 px-4 py-1 hover:bg-red-600 hover:text-white transition duration-300">
              Join Now
            </button>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {["About Us", "Acedemics", "Cources", "News", "Events"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative inline-block text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              {["About Us", "Acedemics", "Cources", "News", "Events"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="relative inline-block text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-red-600 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-4 border-t border-gray-800 text-sm">
          © Saraswati Multiple Campus 2025, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
