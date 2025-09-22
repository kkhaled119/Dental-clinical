import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-dental-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🦷</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">City Dental Center</h3>
                  <p className="text-gray-400">Professional Dental Clinic</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                We provide advanced dental services using the latest technology
                and the best specialized doctors to ensure comfort and safety
                for our patients in a clean and comfortable environment.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://wa.me/201014547230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title="WhatsApp"
                >
                  <FaWhatsapp className="text-lg group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572177962773&mibextid=wwXIfr&mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title="Facebook"
                >
                  <FaFacebook className="text-lg group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.instagram.com/city.dentalclinic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  title="Instagram"
                >
                  <FaInstagram className="text-lg group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    Gamal Abdel Nasser Street, Suez Bridge
                    <br />
                    Next to Al Amda Cafe, Al Huda Tower, 1st Floor
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    +20 101 454 7230
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    info@dentalclinic.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaClock className="text-primary-400" />
                  <span className="text-gray-300 text-sm">
                    9:00 AM - 9:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2024 Dental Care Clinic. All rights reserved.
              </p>

              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Terms of Use
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
