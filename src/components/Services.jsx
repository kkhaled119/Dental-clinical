import React from "react";

const Services = () => {
  const services = [
    {
      icon: "🦷",
      title: "Orthodontics",
      description:
        "Teeth straightening and alignment to improve appearance and function",
      features: [
        "Metal braces",
        "Clear braces",
        "Invisible braces",
        "Clear aligners",
      ],
    },
    {
      icon: "🦷",
      title: "Dental Implants",
      description: "Replacing missing teeth with the latest implant technology",
      features: [
        "Immediate implants",
        "Traditional implants",
        "Advanced implants",
        "Comprehensive follow-up",
      ],
    },
    {
      icon: "🦷",
      title: "Teeth Whitening",
      description:
        "Professional teeth whitening for a brighter, more confident smile",
      features: [
        "In-office whitening",
        "Take-home kits",
        "Laser whitening",
        "Maintenance programs",
      ],
    },
    {
      icon: "🦷",
      title: "Cosmetic & Light Fillings",
      description:
        "Aesthetic and light-cured fillings for natural-looking results",
      features: [
        "Composite fillings",
        "Light-cured materials",
        "Color matching",
        "Durable restoration",
      ],
    },
    {
      icon: "🦷",
      title: "Root Canal Treatment",
      description:
        "Advanced root canal therapy to save and preserve natural teeth",
      features: [
        "Pain-free treatment",
        "Local anesthesia",
        "Precise follow-up",
        "Success guarantee",
      ],
    },
    {
      icon: "🦷",
      title: "Fixed & Removable Prosthetics",
      description:
        "Crowns, bridges, and dentures for complete dental restoration",
      features: [
        "Crowns & bridges",
        "Complete dentures",
        "Partial dentures",
        "Implant-supported prosthetics",
      ],
    },
    {
      icon: "🦷",
      title: "Gum Treatment & Cleaning",
      description: "Comprehensive gum care and professional teeth cleaning",
      features: [
        "Deep cleaning",
        "Gum disease treatment",
        "Tartar removal",
        "Preventive care",
      ],
    },
    {
      icon: "🦷",
      title: "Cosmetic Dentistry",
      description: "Complete smile makeover and aesthetic dental treatments",
      features: [
        "Veneers",
        "Gum contouring",
        "Smile design",
        "Hollywood smile",
      ],
    },
    {
      icon: "🦷",
      title: "Tooth Extraction",
      description: "Safe and painless tooth extraction when necessary",
      features: [
        "Simple extractions",
        "Surgical extractions",
        "Wisdom teeth removal",
        "Post-extraction care",
      ],
    },
    {
      icon: "🦷",
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children and young patients",
      features: [
        "Child-friendly environment",
        "Preventive treatments",
        "Early orthodontics",
        "Behavior management",
      ],
    },
    {
      icon: "🦷",
      title: "Gum Reshaping & Gingivectomy",
      description: "Surgical gum contouring for improved aesthetics and health",
      features: [
        "Gum reshaping",
        "Gingivectomy",
        "Crown lengthening",
        "Aesthetic gum surgery",
      ],
    },
    {
      icon: "🦷",
      title: "Therapeutic Botox",
      description: "Medical Botox treatments for dental and facial conditions",
      features: [
        "TMJ treatment",
        "Bruxism management",
        "Facial aesthetics",
        "Pain relief",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-primary-600 to-dental-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of dental services with the
              highest quality standards
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
              >
                {/* Service Icon */}
                <div className="bg-gradient-to-br from-primary-100 to-dental-100 p-8 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-primary-500 to-dental-500 hover:from-primary-600 hover:to-dental-600 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:scale-105 text-center block"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-dental-50 rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Our Clinic?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🏥</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Clean Environment
                  </h4>
                  <p className="text-gray-600">
                    Clinic equipped with the latest health standards
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-dental-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Flexible Hours
                  </h4>
                  <p className="text-gray-600">
                    We work at times that suit your busy schedule
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">💎</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Affordable Prices
                  </h4>
                  <p className="text-gray-600">
                    High-quality services at competitive prices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
