import React from "react";
import {
  FaBookOpen,
  FaHandsHelping,
  FaPeace,
  FaHome,
  FaBrain,
  FaHistory,
  FaFeatherAlt,
  FaBook,
  FaGlobe,
  FaClock,
  FaDove,
   
} from "react-icons/fa";

const About = () => {
  return (
    <section className="py-24 bg-[#F5E6D3] relative overflow-hidden"
    id="about">
      

      {/* PREMIUM PAPER TEXTURE */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#b8860b_1px,transparent_1px)] [background-size:18px_18px]"></div>

      <div className="container mx-auto px-6 relative z-10"></div>


      <div className="container mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#b8860b] rounded-full text-sm text-[#F5E6D3] mb-4 border border-[#8c6508] shadow-md">
            <FaBookOpen />
            About the Author
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#022658]">
            Dennis <span className="text-[#b8860b]">Mather</span>
          </h2>

          <p className="text-[#8a6a2f] mt-3 max-w-2xl mx-auto leading-relaxed">
            A Christian author and theologian known for his work on eschatology and biblical prophecy.
          </p>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#05070d] via-[#061a2b] to-[#0b2a4a] rounded-3xl border border-[#b8860b] shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            {/* LEFT SIDE */}
            <div className="lg:col-span-1 bg-[#022658]/10 p-8 border-b lg:border-b-0 lg:border-r border-[#b8860b]/50">
              <div className="w-16 h-16 rounded-full bg-[#022658] flex items-center justify-center text-[#F5E6D3] shadow-lg mb-6">
                <FaFeatherAlt size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                His Background
              </h3>

              <p className="text-[#F5E6D3]/80 leading-relaxed text-sm">
              Dennis Mather’s work is rooted in biblical prophecy, Christian theology, and the study of the end times, 
              offering readers a deeper understanding of Scripture through faith-centered insight and spiritual reflection.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="lg:col-span-2 p-8 space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#b8860b] mb-3">
                  Christian Author & Theologian
                </h4>

                <p className="text-[#F5E6D3]/85 leading-relaxed">
                  Dennis Mather is a Christian author and theologian whose life and writing were
                  shaped by his deep study of biblical prophecy and eschatology. Growing up with a strong foundation in Christian theology,
                  he dedicated his life to exploring the complexities of end-times interpretation and providing clarity on Scripture.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-[#b8860b] mb-3">
                  Published Works
                </h4>

                <p className="text-[#F5E6D3]/85 leading-relaxed">
                His books often originate from his systematic theology studies and focus on the relationship 
                between the Church, the nation of Israel, and future biblical events.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaBook className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Theological Compendium</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    A multi-volume theological series exploring prophecy, Creation,
                    Christ’s teachings, Israel, and future biblical events.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaGlobe className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Biblical Prophecy</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Focused on end-time prophecy, the return of Christ, and the unfolding
                    events described in Scripture.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaClock className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">The Last Days</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Books centered on eschatology, the Rapture, and the urgency of preparing
                    for Christ’s return.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-[#b8860b]/40">
                  <FaDove className="text-[#b8860b] mb-2" />
                  <p className="text-white font-medium">Divine Sovereignty</p>
                  <p className="text-sm text-[#F5E6D3]/70">
                    Encouraging readers to find peace, hope, and assurance through God’s
                    control over world events and human history.
                  </p>
                </div>
              </div>

              <div className="bg-[#F5E6D3]/10 border-l-4 border-[#b8860b] p-5 rounded-xl">
                <p className="text-[#F5E6D3]/85 italic leading-relaxed">
                  Her work honors the past while giving voice to the struggles,
                  memories, and strength of her family’s history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;