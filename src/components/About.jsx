import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-dental-600 bg-clip-text text-transparent">
                About Our Clinic
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that a healthy smile is the key to confidence and
              beauty
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive to be the leading destination for dental care in the
                  region, by providing advanced medical services and exceptional
                  personal care for each patient.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to providing the highest levels of medical
                  care using the latest technology and best practices in
                  dentistry, with a focus on patient comfort and satisfaction.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Our Values
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Quality and excellence in service</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Transparency and credibility</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Exceptional personal care</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Innovation and continuous development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-dental-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">👨‍⚕️</div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Expert Doctors
                    </h4>
                    <p className="text-sm text-gray-600">
                      Extensive experience in all areas of dentistry
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">🏆</div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      High Quality
                    </h4>
                    <p className="text-sm text-gray-600">
                      Highest standards of quality and care
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">⚡</div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Modern Technology
                    </h4>
                    <p className="text-sm text-gray-600">
                      Latest equipment and medical technology
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl mb-3">❤️</div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Personal Care
                    </h4>
                    <p className="text-sm text-gray-600">
                      Special attention to each patient
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-200 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-xl">💚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
