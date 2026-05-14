import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import worldBook from "../assets/winw1.webp";
import compendiumBook from "../assets/mtc3.webp";
import eschatologyBook from "../assets/eu.webp";
import divineBook from "../assets/mtc-2.webp";
import coverImage from "../assets/bip-pro.webp";

const books = [
  {
    title: "What in the World Is Going to Happen",
    subtitle: "A fictional account beginning one second after the Rapture.",
    image: worldBook,
  },
  {
    title: "Mather’s Theological Compendium III",
    subtitle: "Focused on Israel and future biblical events.",
    image: compendiumBook,
  },
  {
    title: "Eschatology Unlimited",
    subtitle: "Encouragement for Christians awaiting Christ’s return.",
    image: eschatologyBook,
  },
  {
    title: "The Divine Plan: Mather’s Theological Compendium II",
    subtitle: "Exploring God’s sovereignty throughout history.",
    image: divineBook,
  },
  {
    title: "Biblical Prophecy",
    subtitle: "A focused study of prophecy and future biblical events.",
    image: compendiumBook,
  },
  {
    title: "Mather’s Theological Compendium",
    subtitle: "A theological work covering signs of Christ’s return.",
    image: coverImage,
  },
];

const FeaturedWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;
  const maxIndex = books.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="books"
      className="py-24 bg-[#fffafa ] relative overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#022658]">
            FEATURED WORKS
          </h2>

          <p className="text-[#8a6a2f] mt-3">
            Exploring Biblical Prophecy, Theology, and the End Times
          </p>

          <div className="w-32 h-1 bg-[#b8860b] mx-auto mt-5 rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#022658] text-white p-3 rounded-full shadow-lg hover:bg-[#b8860b] transition"
          >
            <FaChevronLeft />
          </button>

          <div className="overflow-hidden px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {books.map((book, index) => (
                <div
                  key={index}
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                >
                  <div className="bg-[#fffaf2] rounded-2xl shadow-lg border border-[#d4b26a] overflow-hidden h-full">
                    <div className="p-5">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-[320px] object-contain rounded-xl"
                      />
                    </div>

                    <div className="px-5 pb-6 text-center">
                      <h3 className="text-[#022658] font-bold text-lg leading-tight min-h-[55px]">
                        {book.title}
                      </h3>

                      <p className="text-sm text-[#8a6a2f] mt-3 min-h-[45px]">
                        {book.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#022658] text-white p-3 rounded-full shadow-lg hover:bg-[#b8860b] transition"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                currentIndex === index ? "bg-[#022658]" : "bg-[#b8860b]/40"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;