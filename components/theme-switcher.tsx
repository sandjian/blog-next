"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="rounded-xl h-10 w-14 border-slate-200 shadow-md dark:border-slate-500">
        <Button variant="outline" size="icon" aria-label="Toggle theme">
          <motion.span
            key="sun"
            initial={{ rotate: theme === "dark" ? -90 : 0, scale: theme === "dark" ? 0 : 1 }}
            animate={{ rotate: theme === "dark" ? -90 : 0, scale: theme === "dark" ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.span>
          <motion.span
            key="moon"
            initial={{ rotate: theme === "dark" ? 0 : 90, scale: theme === "dark" ? 1 : 0 }}
            animate={{ rotate: theme === "dark" ? 0 : 90, scale: theme === "dark" ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.span>
        </Button>
      </DropdownMenuTrigger>
      <AnimatePresence>
        <DropdownMenuContent asChild align="end" className="rounded-2xl border-slate-100 dark:border-slate-600">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-100 dark:bg-slate-700"
          >
            <DropdownMenuItem onClick={() => setTheme("light")} className="rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600">Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")} className="rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600">Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")} className="rounded-xl hover:bg-slate-300 dark:hover:bg-slate-600">System</DropdownMenuItem>
          </motion.div>
        </DropdownMenuContent>
      </AnimatePresence>
    </DropdownMenu>
  );
}
