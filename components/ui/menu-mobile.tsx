"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useClickAway } from "react-use";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useClickAway(menuRef, () => setIsOpen(false));

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about-me", label: "About me" },
    { href: "/entradas", label: "Entradas" },
    { href: "/categorias", label: "Categorías" },
    { href: "/contacto", label: "Contacto" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  return (
    <>
      <button onClick={toggleMenu} className="p-3 text-white">
        <span className="text-2xl">☰</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menuRef}
              className="w-3/4 max-w-xs h-full bg-gradient-to-t from-slate-800 via-slate-900 to-black p-6 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-300 mb-16"
              >
                ✕
              </button>

              <nav className="space-y-4 mb-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative block px-3 py-2 rounded-2xl text-lg font-semibold transition-colors ${
                        isActive
                          ? "text-white bg-black/50"
                          : "text-slate-400 hover:bg-black/50"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute left-0 bottom-0 h-[2px] w-full bg-primary-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex space-x-4 h-full px-4 mt-24">
                {socialLinks.map((social, index) => (
                  <Link
                    href={social.href}
                    key={index}
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-5 h-5 text-xl text-slate-400 hover:text-white">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
