"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex justify-end gap-8 text-3xl font-medium">
        <li
          className={`capitalize transition-all hover:text-[#22c55e] ${
            pathname === "/" ? "text-[#22c55e] border-b-2 border-[#22c55e]" : ""
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`capitalize transition-all hover:text-[#22c55e] ${
            pathname === "/about" ? "text-[#22c55e] border-b-2 border-[#22c55e]" : ""
          }`}
        >
          <Link href="/about">About</Link>
        </li>

        <li
          className={`capitalize transition-all hover:text-[#22c55e] ${
            pathname === "/skills"
              ? "text-[#22c55e] border-b-2 border-[#22c55e]"
              : ""
          }`}
        >
          <Link href="/skills">Portfolio</Link>
        </li>

        <li
          className={`capitalize transition-all hover:text-[#22c55e] ${
            pathname === "/projects"
              ? "text-[#22c55e] border-b-2 border-[#22c55e]"
              : ""
          }`}
        >
          <Link href="/projects">Experience</Link>
        </li>

        <li
          className={`capitalize transition-all hover:text-[#22c55e] ${
            pathname === "/contact"
              ? "text-[#22c55e] border-b-2 border-[#22c55e]"
              : ""
          }`}
        >
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
