import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { name: "HOME", href: "#home", id: "home" },
    { name: "BOOKS", href: "#books", id: "books" },
    { name: "ABOUT", href: "#about", id: "about" },
    { name: "REVIEWS", href: "#reviews", id: "reviews" },
    { name: "CONTACT", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      const bottomReached =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

      if (bottomReached) {
        setActiveTab("contact");
        return;
      }

      for (const item of navItems) {
        const element = document.getElementById(item.id);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, href, id) => {
    e.preventDefault();
    setActiveTab(id);

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#173452] shadow-md border-t-[6px] border-[#3b1f16]">
      
      <div className="container-custom mx-auto px-6 flex items-center justify-between h-[86px] relative">
        
        {/* LOGO BADGE */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home", "home")}
          className="flex items-center gap-5"
        >
        <div className="relative w-[88px] h-[100px] bg-[#F5E6D3] shadow-lg flex items-center justify-center -mb-7">
          <div className="relative w-[60px] h-[60px] mx-auto">
            <span className="absolute inset-0 flex items-center justify-center text-[#7b6337] font-serif text-5xl font-bold leading-none z-10 translate-x-[-6px] translate-y-[-6px]">
              D
            </span>

            <span className="absolute inset-0 flex items-center justify-center text-[#7b6337] font-serif text-5xl font-bold leading-none opacity-90 translate-x-[8px] translate-y-[8px]">
              M
            </span>
          </div>

          <div className="absolute bottom-[-18px] left-0 w-0 h-0 border-l-[44px] border-r-[44px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#F5E6D3]"></div>
        </div>

          <div className="hidden sm:block">
            <h1 className="text-[#F5E6D3] text-lg md:text-xl font-bold tracking-wide">
              DENNIS MATHER, TH.D.
            </h1>
            <p className="text-[#F5E6D3]/80 text-sm">
              - Author &amp; Theologian
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.id)}
              className={`text-sm font-bold tracking-wide transition relative pb-1 ${
                activeTab === item.id
                  ? "text-[#F5E6D3]"
                  : "text-[#F5E6D3]/80 hover:text-[#F5E6D3]"
              }`}
            >
              {item.name}

              {activeTab === item.id && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#F5E6D3]"></span>
              )}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#F5E6D3]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#173452] border-t border-[#F5E6D3]/20">
          <div className="flex flex-col px-6 py-5 gap-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleClick(e, item.href, item.id)}
                className={`font-bold tracking-wide ${
                  activeTab === item.id
                    ? "text-[#F5E6D3]"
                    : "text-[#F5E6D3]/75"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;