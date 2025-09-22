import React from "react";
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

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-dental-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are here to help you get the best dental care for your teeth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-primary-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        Gamal Abdel Nasser Street, Suez Bridge
                        <br />
                        Next to Al Amda Cafe, Al Huda Tower, 1st Floor
                        <br />
                        Cairo, Egypt
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-green-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600">+20 101 454 7230</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4"></div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-yellow-600 text-xl" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Working Hours
                      </h4>
                      <p className="text-gray-600">
                        Saturday - Thursday: 9:00 AM - 9:00 PM
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-r from-primary-500 to-dental-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Book Your Appointment Now
                </h3>
                <p className="mb-6 opacity-90">
                  Get your appointment easily through WhatsApp or phone
                </p>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/201014547230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-primary-600 py-4 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-center block flex items-center justify-center space-x-3"
                  >
                    <span className="text-2xl">📱</span>
                    <span>Book via WhatsApp</span>
                  </a>

                  <a
                    href="tel:+966501234567"
                    className="w-full bg-transparent border-2 border-white text-white py-4 px-6 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-primary-600 text-center block flex items-center justify-center space-x-3"
                  >
                    <span className="text-2xl">📞</span>
                    <span>Call Us Directly</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Our Location
                </h3>

                {/* Map placeholder */}
                <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🗺️</div>
                    <p className="text-gray-600">Map Location</p>
                    <p className="text-sm text-gray-500">
                      King Fahd Street, Al Nakheel District
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="https://maps.app.goo.gl/njgWuyu237w3q1yC8?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <span>📍</span>
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Follow Us
                </h3>

                <div className="flex space-x-4 justify-center">
                  <a
                    href="https://www.facebook.com/profile.php?id=61572177962773&mibextid=wwXIfr&mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                    title="Facebook"
                  >
                    <FaFacebook className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://www.instagram.com/city.dentalclinic1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                    title="Instagram"
                  >
                    <FaInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                    title="Twitter"
                  >
                    <FaTwitter className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>

                  <a
                    href="https://wa.me/201014547230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group"
                    title="WhatsApp"
                  >
                    <FaWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
