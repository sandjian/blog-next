"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useClickAway } from "react-use";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLinks } from "@/lib/constants";
import { Switch } from "./switch";
import { Moon, Sun } from "lucide-react";

export default function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  useClickAway(menuRef, () => setIsOpen(false));

  const toggleMenu = () => setIsOpen(!isOpen);

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  const navigationLinks = NavLinks.filter(link => link.href === "/" || link.href === "/categories" || link.href === "/search" || link.href === "/contact-us" || link.href === "/about-us");
  const policyLinks = NavLinks.filter(link => link.href === "/privacy-policy" || link.href === "/terms-of-service");

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-x-2">

          <Sun className="h-4 w-4" />
          <Switch />
          <Moon className="h-4 w-4" />
        </div>
        <button onClick={toggleMenu} className="p-3 text-accent">
          <span className="text-2xl">☰</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-950 bg-opacity-70 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menuRef}
              className="w-1/2 max-w-xs h-full bg-gradient-to-t from-primary to-foreground dark:bg-gradient-to-t dark:from-primary dark:to-accent p-4 shadow-lg border-2 border-l border-neutral-600 rounded-l-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
              <Link href="/">
      <div className="flex justify-center items-center">

              <h2 className=" text-lg font-semibold text-primary-foreground tracking-tight">
                <span className="bg-primary p-1.5 rounded-xl text-primary-foreground">Blog</span> Connected
              </h2>
            </div>
      </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground"
                >
                  ✕
                </button>
              </div>

              <nav className="space-y-1 mb-4">
                <h2 className="text-base font-semibold text-slate-400">Navegación</h2>
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative flex items-center px-3 py-2 rounded-2xl  transition-colors  ${ 
                      pathname === link.href
                        ? "text-white bg-accent"
                        : "text-slate-400 hover:bg-black/50"
                      }`}
                  >
                    {link.icon && <link.icon className="mr-2 w-5 h-5" />}
                    {pathname === link.href && (
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
                ))}
              </nav>

              <div className="border-t border-neutral-400 my-4"></div> 

              <nav className="space-y-2 mb-4">
                <h2 className="text-base font-semibold text-slate-400">Políticas</h2>
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative flex items-center px-3 py-2 rounded-2xl font-semibold transition-colors text-sm ${ // text-sm
                      pathname === link.href
                        ? "text-white bg-accent"
                        : "text-slate-400 hover:bg-black/50"
                      }`}
                  >
                    {link.icon && <link.icon className="mr-2 w-5 h-5" />}
                    {pathname === link.href && (
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
                ))}
              </nav>

              <div className="border-t border-neutral-400 my-4"></div> 


              <div className="flex justify-center space-x-4 mt-4 mb-4">
                {socialLinks.map((social, index) => (
                  <Link
                    href={social.href}
                    key={index}
                    className="hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="w-5 h-5 text-xl text-slate-400 hover:text-white">
                      {social.icon}
                    </span>
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