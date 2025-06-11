"use client"

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavigationProps {
  categories: string[]; 
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
                className={`text-sm py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 relative ${
                  pathname === navItem.link
                    ? "text-accent dark:text-accent-foreground font-semibold "
                    : "text-foreground dark:text-neutral-300 dark:hover:text-accent-foreground hover:text-accent"
                }`}
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
              </a>
            ) : (
              <button
                className={`focus-visible:outline-none text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-2xl text-md py-1.5 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 relative ${
                  openMenu === navItem.label
                    ? "text-accent dark:text-accent-foreground"
                    : "text-foreground dark:text-neutral-300 dark:hover:text-accent-foreground hover:text-accent"
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
                    className="bg-stone-200 dark:bg-neutral-900/95  p-4  w-max"
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
                                  className={`text-sm transition-colors duration-300 block px-2 py-1  rounded-md ${
                                    pathname === `/categories/${item.toLowerCase()}`
                                      ? "text-foreground "
                                      : "text-foreground hover:text-accent hover:font-semibold dark:hover:text-white "
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