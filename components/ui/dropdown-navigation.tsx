"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  categories: string[]; // O { name: string; count: number }[] si quieres usar el conteo
}

export default function Navigation({ categories }: NavigationProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isHover, setIsHover] = useState<number | null>(null);
  const pathname = usePathname();

  const handleHover = (menuLabel: string | null) => {
    setOpenMenu(menuLabel);
  };

  const NAV_ITEMS = [
    { id: 1, label: "Lobby", link: "/" },
    { id: 2, label: "Search", link: "/search" },
    {
      id: 3,
      label: "Categories",
      subMenus: [{ title: "Categories", items: categories }],
    },
    { id: 4, label: "About Us", link: "/about-us" },
    { id: 5, label: "Contact Us", link: "/contact-us" },
  ];

  return (
    <nav className="relative w-full flex items-center justify-center px-4 py-4">
      <ul className="relative flex items-center space-x-4">
        {NAV_ITEMS.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link ? (
              <a
                href={navItem.link}
                className={`text-md py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 relative ${
                  pathname === navItem.link
                    ? "text-accent font-semibold dark:text-accent"
                    : "text-foreground  hover:text-accent"
                }`}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
              </a>
            ) : (
              <button
                className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl text-md py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 relative ${
                  openMenu === navItem.label
                    ? "text-accent "
                    : "text-foreground  hover:text-accent"
                }`}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4  group-hover:rotate-180 duration-300 transition-transform ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId=""
                    className="absolute inset-0 size-full"
                    style={{ borderRadius: 99 }}
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="w-auto absolute left-0 top-full pt-2 z-50">
                  <motion.div
                    className="bg-neutral-200 dark:bg-neutral-800/80 border border-border p-4 px-12 w-max"
                    style={{ borderRadius: 16 }}
                    layoutId="menu"
                  >
                    <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full" key={sub.title}>
                          <ul className="space-y-3">
                            {sub.items.map((item) => (
                              <li key={item}>
                                <a
                                  href={`/categories/${item.toLowerCase()}`}
                                  className={`text-sm transition-colors duration-300 block px-2 py-1 font-semibold rounded-md ${
                                    pathname === `/categories/${item.toLowerCase()}`
                                      ? "text-foreground "
                                      : "text-foreground hover:text-primary "
                                  }`}
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  );
}