import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "/images/gallery/client1.jpeg",
      alt: "Before and After - Case 1",
      category: "Cosmetic Dentistry",
      description:
        "Amazing dental transformation - beautiful smile restoration",
    },
    {
      id: 2,
      src: "/images/gallery/client2.jpeg",
      alt: "Before and After - Case 2",
      category: "Dental Implants",
      description: "Complete smile restoration with dental implants",
    },
    {
      id: 3,
      src: "/images/gallery/client3.jpeg",
      alt: "Before and After - Case 3",
      category: "Teeth Whitening",
      description: "Professional teeth whitening results",
    },
    {
      id: 4,
      src: "/images/gallery/client4.jpeg",
      alt: "Before and After - Case 4",
      category: "Orthodontics",
      description: "Teeth straightening treatment results",
    },
    {
      id: 5,
      src: "/images/gallery/client5.jpeg",
      alt: "Before and After - Case 5",
      category: "Root Canal Treatment",
      description: "Successful root canal treatment",
    },
    {
      id: 6,
      src: "/images/gallery/client6.jpeg",
      alt: "Before and After - Case 6",
      category: "Gum Treatment",
      description: "Gum disease treatment results",
    },
  ];

  // عرض جميع الصور بدون فلاتر
  const filteredImages = galleryImages;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the amazing transformations we've achieved for our patients.
              Every smile tells a story of confidence and health.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{image.category}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl">👁️</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Book your consultation today and start your journey to a perfect
              smile
            </p>
            <a
              href="https://wa.me/201014547230"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-2xl">📱</span>
              <span>Book Your Consultation</span>
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center z-10 hover:bg-white transition-colors duration-200"
            >
              <span className="text-2xl">✕</span>
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedImage.category}
              </h3>
              <p className="text-gray-600">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
