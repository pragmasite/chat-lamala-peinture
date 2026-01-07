import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t, lang } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Image descriptions based on visual content
  const galleryImages = [
    {
      src: "/images/img-1.jpg",
      fr: "Peinture en cours",
      de: "Malerei in Arbeit",
    },
    {
      src: "/images/img-2.jpg",
      fr: "Revêtement mural",
      de: "Wandverkleidung",
    },
    {
      src: "/images/img-3.jpg",
      fr: "Préparation surface",
      de: "Oberflächenvorbereitung",
    },
    {
      src: "/images/img-4.jpg",
      fr: "Chantier professionnel",
      de: "Professionelle Baustelle",
    },
    {
      src: "/images/img-5.jpg",
      fr: "Finitions décoratives",
      de: "Dekorative Oberflächenbehandlung",
    },
  ];

  const getImageDescription = (image: typeof galleryImages[0]) => {
    return lang === "fr" ? image.fr : image.de;
  };

  return (
    <section id="galerie" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">
            {t.gallery.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/70 text-lg">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-background shadow-soft hover:shadow-medium transition-shadow"
            >
              <img
                src={image.src}
                alt={getImageDescription(image)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">
                  {getImageDescription(image)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Main Image */}
              <img
                src={galleryImages[selectedIndex].src}
                alt={getImageDescription(galleryImages[selectedIndex])}
                className="w-full rounded-2xl max-h-[80vh] object-contain"
              />

              {/* Image Description */}
              <div className="mt-4 text-center text-white">
                <p className="text-lg font-medium">
                  {getImageDescription(galleryImages[selectedIndex])}
                </p>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + galleryImages.length) %
                      galleryImages.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() =>
                  setSelectedIndex((selectedIndex + 1) % galleryImages.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
