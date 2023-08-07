import Link from "next/link";
import React from "react";
// import Logo from "../public/Phanero logo.png";
// import Logo from "../public/logo White.svg";
import Logo from "../public/logo.svg";
import { FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  const Navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/about-us",
      title: "About Us",
    },
    {
      path: "/recent-works",
      title: "Recent Woks",
    },
    {
      path: "/our-team",
      title: "Our Team",
    },
    {
      path: "/contact-us",
      title: "Contact Us",
    },
  ];

  const dropdown = [
    {
      path: "/website-development",
      title: "website Development",
    },
    {
      path: "/graphics-design",
      title: "Graphics Design",
    },
    {
      path: "/branding",
      title: "Branding",
    },
    {
      path: "/digital-marketting",
      title: "Digital Marketting",
    },
  ];

  return (
    <section className='navbar'>
      <div className='nav-bar-content'>
        <div className='logo'>
          <Link href='/'>
            <Image src={Logo} alt='BrandRider' fill />
          </Link>
        </div>
        <div className='search'>
          <ul>
            <Link href='#'>Home</Link>
            <Link href='#'>About Us</Link>
            <div class='dropdown'>
              <span>
                Recent Works <FiChevronDown />
              </span>
              <div class='dropdown-content'>
                <a href='/'>Website Development</a>
                <a href='/'>Digital Marketting</a>
                <a href='/'>Graphics Design</a>
                <a href='/'>Branding</a>
              </div>
            </div>
            <Link href='#'>Our Team</Link>
            <Link href='#'>Contact Us</Link>

            <button>SIGN UP</button>
          </ul>
        </div>
      </div>
    </section>
  );
}
