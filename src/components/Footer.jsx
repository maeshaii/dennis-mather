import React from 'react';
import {
  FaHeart,
  FaEnvelope,
  FaBook,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaStar,
  FaChild,
  FaCrown,
  FaMagic,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#F5E6D3] border-t-2 border-[#F5E6D3]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#F5E6D3]"></div>
      </div>

      {/* TOP BORDER LINE */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F5E6D3] to-transparent"></div>

      {/* BOTTOM BORDER LINE */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#F5E6D3]/20 via-[#F5E6D3] to-[#F5E6D3]/20"></div>

      {/* GOLD GLOW EFFECTS */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-[#b8860b]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-[#b8860b]/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#b8860b]/5 rounded-full blur-3xl"></div>

      {/* PREMIUM PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:18px_18px]"></div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-10 left-5 opacity-20 animate-float-slow">
        <FaMagic size={30} className="text-[#b8860b]" />
      </div>

      <div className="absolute bottom-10 right-5 opacity-20 animate-float-delayed">
        <FaCrown size={25} className="text-[#b8860b]" />
      </div>

      <div className="absolute top-1/4 right-10 opacity-15 animate-pulse-slow">
        <FaStar size={20} className="text-[#b8860b]" />
      </div>

      <div className="container-custom mx-auto relative z-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* AUTHOR INFO */}
          <div className="text-center md:text-left border border-[#F5E6D3]/40 rounded-2xl p-6 bg-white/20 backdrop-blur-sm shadow-xl">

            <div className="relative inline-flex items-center gap-2 justify-center md:justify-start mb-2 group">

              <div className="relative">
                <div className="absolute inset-0 bg-[#b8860b] rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity"></div>

                <div className="relative bg-[#b8860b] p-2 rounded-full">
                  <FaBook className="text-[#F5E6D3]" size={22} />
                </div>

                <FaStar className="text-[#b8860b] absolute -top-2 -right-2 text-xs animate-pulse" />
              </div>

              <h3 className="text-2xl font-display font-bold text-[#5c3d00] drop-shadow-lg">
                <span className="text-[#022658]">Dennis</span>{" "}
                <span className="text-[#b8860b]">Mather</span>
              </h3>
            </div>

            <p className="text-[#8a6a2f] text-sm">
              Christian Author & Theologian
            </p>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-2 mt-4 text-sm text-[#5c3d00]">

              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#b8860b]" />
                <span>dennismather931@yahoo.com</span>
              </div>

              <div className="flex items-center gap-2">
                <FaBook className="text-[#b8860b]" />
                <span>Biblical Prophecy</span>
              </div>

            </div>
            
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="https://buy.stripe.com/7sY5kEdVm6vNfRU8Ey2kw07"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500
                text-black text-2xl font-bold py-10 px-28 rounded-full
                shadow-2xl
                transform transition-all duration-300
                hover:scale-105 hover:shadow-yellow-400/50
                animate-pulse
              "
            >
              Launch & Go-Live Portal
            </a>
          </div>
          {/* SOCIALS */}
          <div className="flex gap-5">

            {[
              FaTwitter,
              FaInstagram,
              FaFacebookF,
              FaYoutube,
              FaEnvelope,
            ].map((Icon, idx) => (
              <a
                key={idx}
                href={idx === 4 ? `mailto:dennismather931@yahoo.com` : "#"}
                className="relative group"
              >
                <div className="absolute inset-0 bg-[#b8860b] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity"></div>

                <div className="relative bg-gradient-to-b from-[#05070d] via-[#061a2b] to-[#0b2a4a] p-2 rounded-full shadow-lg border-2 border-[#F5E6D3] hover:scale-110 transition-all duration-300">

                  <Icon
                    size={18}
                    className="text-[#b8860b]"
                  />

                </div>
              </a>
            ))}

          </div>
        </div>

        {/* MIDDLE CARD */}
        <div className="my-8 p-4 bg-gradient-to-r from-[#061a2b] to-[#0b2a4a] rounded-2xl shadow-2xl border-2 border-[#F5E6D3]">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-[#F5E6D3]/80 text-sm">

            <div className="flex items-center justify-center gap-2">

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaBook size={12} className="text-[#b8860b]" />
              </div>

              <span>Scripture • Prophecy • Divine Sovereignty</span>

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaBook size={12} className="text-[#b8860b]" />
              </div>

            </div>

            <div className="flex items-center justify-center gap-2">

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaChild size={12} className="text-[#b8860b]" />
              </div>

              <span>© 2025 Dennis Mather. All rights reserved.</span>

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaChild size={12} className="text-[#b8860b]" />
              </div>

            </div>

            <div className="flex items-center justify-center gap-2">

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaStar size={10} className="text-[#b8860b]" />
              </div>

              <span>Exploring Biblical Prophecy Through Writing</span>

              <div className="bg-[#b8860b]/20 p-1.5 rounded-full">
                <FaStar size={10} className="text-[#b8860b]" />
              </div>

            </div>

          </div>
        </div>

        {/* BOTTOM FOOTER */}
        <div className="text-center text-[#8a6a2f] text-xs">

          <div className="flex items-center justify-center gap-2 mb-2">

            <div className="animate-pulse">
              <FaHeart size={12} className="text-[#b8860b]" />
            </div>

            <span>
              Sharing stories of hardship, resilience, and remembrance.
            </span>

            <div className="animate-pulse delay-150">
              <FaHeart size={12} className="text-[#b8860b]" />
            </div>

          </div>

          <p className="mt-2">
            Written by{" "}
            <span className="text-[#b8860b] font-semibold">
              Dennis Mather
            </span>
          </p>

        </div>

      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-150 {
          animation-delay: 0.15s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;