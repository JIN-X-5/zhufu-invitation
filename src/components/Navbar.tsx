"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, Heart } from "lucide-react";

const navItems = [
  { name: "首頁", href: "/" },
  {
    name: "喜帖款式",
    href: "/category/invitations",
    subItems: [
      { name: "單卡喜帖", href: "/category/single-card" },
      { name: "折卡喜帖", href: "/category/folded-card" },
      { name: "燙金喜帖", href: "/category/gold-stamped" },
    ],
  },
  { name: "結婚書約", href: "/category/marriage-certificate" },
  { name: "各式小物", href: "/category/accessories" },
  { name: "訂購方式", href: "/how-to-buy" },
  { name: "常見Q&A", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-10 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-serif-tc text-2xl tracking-widest text-[#333333]">
          苧芙喜帖
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="font-serif-tc text-[15px] text-[#333333] hover:text-[#B09B82] transition-colors flex items-center gap-1"
              >
                {item.name}
                {item.subItems && <ChevronDown className="w-3 h-3 opacity-40" />}
              </Link>
              
              {item.subItems && (
                <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-white shadow-xl border border-zinc-100 p-6 min-w-[180px] flex flex-col gap-4">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="font-serif-tc text-[14px] text-[#777777] hover:text-[#B09B82] transition-colors whitespace-nowrap"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-6 ml-6 border-l border-zinc-200 pl-10">
            <Link href="/member/login" className="text-[#333333] hover:text-[#B09B82] transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link href="/wishlist" className="text-[#333333] hover:text-[#B09B82] transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#333333]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 pt-32 px-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-serif-tc text-2xl text-[#333333]"
              >
                {item.name}
              </Link>
              {item.subItems && (
                <div className="flex flex-col gap-4 mt-4 ml-6">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif-tc text-lg text-[#777777]"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
