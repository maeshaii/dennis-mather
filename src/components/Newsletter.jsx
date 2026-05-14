import React from 'react';
import {
  FaBook,
  FaStar,
  FaMagic,
  FaCrown,
  FaQuoteLeft,
  FaUserCircle,
} from 'react-icons/fa';

const Newsletter = () => {
  return (
    <section
      id="reviews"
      className="py-24 relative overflow-hidden bg-[#fffafa]"
    >

      <div className="container-custom mx-auto text-center relative z-10">

        {/* TOP ICON */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-[#b8860b] rounded-full blur-xl opacity-40"></div>

            <div className="relative bg-[#b8860b] p-5 rounded-full shadow-2xl animate-bounce-slow">
              <FaBook size={34} className="text-[#F5E6D3]" />
            </div>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#5c3d00] mb-4">
          Reader Reviews
        </h2>

        <p className="text-xl text-[#8a6a2f] mb-10 max-w-2xl mx-auto">
          What readers and reviewers are saying about Triumph.
        </p>

        {/* REVIEW CARDS */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            {
              quote:
                "The writings of Dennis Mather provide a reflective and intellectually engaging perspective on biblical themes and theological ideas. His ability to connect scripture with broader life questions gives his books a meaningful and thought-provoking quality. Readers may appreciate the calm, educational tone and the way the material encourages personal reflection without feeling overly academic or difficult to follow. For those interested in faith-based literature and theological exploration, Dennis Mather’s books offer a unique and inspiring reading experience.",
              name: "Mendoza",
             
            },
            {
              quote:
                "Dennis Mather delivers a compelling approach to theological writing by blending biblical interpretation with modern-day relevance. His books encourage readers to examine spiritual themes with curiosity and reflection while maintaining a grounded and conversational style. The topics explored are presented with clarity and purpose, making them approachable even for readers who are newer to theological study. Overall, his work offers an insightful reading experience for those interested in prophecy, Christian teachings, and deeper spiritual understanding. ",
              name: "John Paul",
             
            },
            {
              quote:
                "Dennis Mather’s works present thoughtful explorations of theology, prophecy, and spiritual reflection in a way that feels both accessible and engaging. His writing combines biblical discussion with practical insight, encouraging readers to think deeply about faith, the future, and the meaning behind scripture. What stands out most is the clear passion behind the material, making complex theological topics easier for readers to follow and reflect upon. Readers interested in spiritual study and faith-centered discussions will likely appreciate the depth and sincerity found throughout his books",
              name: "Mark Robin",
             
            },
          ].map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#05070d] via-[#061a2b] to-[#0b2a4a]
              p-7 rounded-2xl shadow-2xl border border-[#b8860b] text-left relative overflow-hidden"
            >

              {/* glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#b8860b]/10 blur-3xl rounded-full"></div>

              <FaQuoteLeft
                className="text-[#b8860b]/60 mb-4"
                size={30}
              />

              {/* STARS */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-[#b8860b]"
                    size={16}
                  />
                ))}
              </div>

              {/* QUOTE */}
              <p className="text-[#F5E6D3]/85 italic leading-relaxed text-sm mb-6">
                “{review.quote}”
              </p>

              {/* FOOTER */}
              <div className="border-t border-[#b8860b]/20 pt-4 flex items-center gap-3">
                <div className="bg-[#b8860b]/15 p-3 rounded-full">
                  <FaUserCircle
                    className="text-[#b8860b]"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-white font-semibold">
                    {review.name}
                  </p>

                  <p className="text-[#F5E6D3]/60 text-sm">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM RATING */}
        <div
          className="mt-10 bg-gradient-to-r from-[#061a2b] to-[#0b2a4a]
          px-6 py-4 rounded-xl inline-flex items-center gap-3
          shadow-2xl border border-[#b8860b]"
        >
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className="text-[#b8860b]"
            />
          ))}

          <span className="text-white font-semibold">
            5.0 average rating
          </span>

          <span className="text-[#F5E6D3]/60">
            from readers and reviewers
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;