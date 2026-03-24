"use client";

import { useState } from "react";

const links = [
  { name: "home", id: "home" },
  { name: "about", id: "about" },
  { name: "portfolio", id: "portfolio" },
  { name: "experience", id: "experience" },
  { name: "contact", id: "contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  // Smooth scroll function (~3 seconds)
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    const startY = window.scrollY;
    const endY = target.getBoundingClientRect().top + startY;
    const distance = endY - startY;
    const duration = 2000; // 2 seconds
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // easing function

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    setOpen(false); // close mobile menu
  };

  return (
    <nav className="relative flex items-center justify-end text-2xl font-bold text-white p-6">
      
      {/* Hamburger Button: visible below lg */}
      <button
        className="lg:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="w-8 h-[4px] bg-white"></span>
        <span className="w-8 h-[4px] bg-white"></span>
        <span className="w-8 h-[4px] bg-white"></span>
      </button>

      {/* Desktop Menu: visible at lg and above */}
      <div className="hidden lg:flex gap-8">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="capitalize font-medium hover:text-[#22c55e] transition-all relative"
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile + Tablet Menu */}
      {open && (
        <div className="absolute top-14 right-0 flex flex-col gap-5 bg-gray-600 px-10  rounded-lg shadow-lg lg:hidden text-center z-10">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="capitalize font-medium hover:text-[#22c55e] transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;