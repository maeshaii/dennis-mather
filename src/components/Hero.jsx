import React, { useState } from "react";
import {
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
  FaStar,
  FaBook,
  FaQuoteLeft,
  FaHeart,
  FaComments,
} from "react-icons/fa";

import authorImage from "../assets/dn.png";
import bg from "../assets/author2.webp";

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

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-[#fffafa ]"
        
      >

        <div className="container-custom mx-auto relative z-10 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b]/10 border border-[#b8860b]/30 rounded-full text-[#5c3d00] font-semibold text-sm mb-6">
                <FaStar size={14} className="text-[#b8860b]" />
                <span>Christian Author & Theologian</span>
                <FaStar size={14} className="text-[#b8860b]" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#022658]">Dennis</span>{" "}
                <span className="text-[#b8860b]">Mather</span>

                <span className="block text-[#b8860b] text-2xl md:text-3xl mt-2">
                  Author & Theologian
                </span>
              </h1>

              <p className="text-lg text-[#5c3d00]/80 mb-8 leading-relaxed">
Dennis Mather is a Christian author and theologian known for his work on eschatology and biblical prophecy. A graduate of Faith Baptist Bible College and Theological Seminary in Ankeny, Iowa, Dennis currently resides in Des Moines. Following his retirement, he returned to his favorite congregation, Grace Church, where he now happily participates in their wonderful community groups.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="#featured-works"
                  className="px-6 py-3 rounded-xl bg-[#b8860b] text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Explore the Books
                  <FaArrowRight size={18} />
                </a>

                <a
                  href="#about"
                  className="px-6 py-3 rounded-xl border border-[#b8860b] text-[#5c3d00] font-semibold flex items-center justify-center gap-2 hover:bg-[#b8860b]/10 transition-all duration-300"
                >
                  Learn More
                  <FaChevronRight size={18} />
                </a>
              </div>
            </div>

        <div className="relative flex justify-center bg-[#fffaf2] border border-[#d4b26a] rounded-2xl p-6">
            <img
              src={authorImage}
              alt="Dennis Mather"
              className="w-full max-w-8xl md:max-w-10xl h-auto object-cover rounded-3xl shadow-2xl"
              style={{ maxHeight: "1050px" }}
            />

            <div className="absolute -bottom-5 -right-5 bg-[#b8860b] text-white rounded-full p- shadow-xl">
            </div>

        </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;