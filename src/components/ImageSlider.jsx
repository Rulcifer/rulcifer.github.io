import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ImageSlider = ({ images, alt, children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    // Single image fallback
    if (!Array.isArray(images) || images.length === 1) {
        const src = Array.isArray(images) ? images[0] : images;
        return (
            <div className="relative w-full h-full group/single-image">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {children}
            </div>
        );
    }

    const nextSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-full overflow-hidden group/slider">
            {/* Track */}
            <div
                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${alt} slide ${idx + 1}`}
                        className="w-full h-full object-cover shrink-0"
                    />
                ))}
            </div>

            {children}

            {/* Navigation Left */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/90 opacity-0 group-hover/slider:opacity-100 hover:bg-black hover:text-white transition-all backdrop-blur-sm z-20 shadow-lg"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Navigation Right */}
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 text-white/90 opacity-0 group-hover/slider:opacity-100 hover:bg-black hover:text-white transition-all backdrop-blur-sm z-20 shadow-lg"
                aria-label="Next image"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20 opacity-0 group-hover/slider:opacity-100 transition-opacity delay-100">
                <div className="px-2 py-1.5 rounded-full bg-black/40 backdrop-blur-md flex gap-1.5">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setCurrentIndex(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-4 shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'bg-white/50 w-1.5 hover:bg-white/80'
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
