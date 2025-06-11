"use client"

import { useTheme } from "next-themes"
import { SparklesIcon, UsersIcon, PaintbrushIcon, RocketIcon } from 'lucide-react';

import { MagicCard } from "@/components/ui/magic-card"

export function MagicCardDemo() {
  const { theme } = useTheme()
  return (
    <section className="w-full py-10 ">

        <div
        className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4  max-w-7xl w-full mx-auto "
        }
        >
        <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center shadow-2xl  text-center group"
            gradientColor={theme === "dark" ? "#262626" : "#FFFBEB"}
        > 
        <div className="flex items-center justify-center w-full">

            <SparklesIcon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
        </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-1 text-accent-foreground">Effortless Publishing</h3>
            <p className="text-sm text-accent-foreground">Share your thoughts and stories with an intuitive writing experience. Focus on your message, we ll handle the rest.</p>
        </MagicCard>
        <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center shadow-2xl  text-center group"
            gradientColor={theme === "dark" ? "#262626" : "#FFFBEB"}
            >
            <div className="flex items-center justify-center w-full">

            <UsersIcon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-1 text-accent-foreground">Connect with Your Audience</h3>
            <p className="text-sm text-accent-foreground">Foster a vibrant community with integrated comments, social sharing, and subscription features.</p>
        </MagicCard>
        <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center shadow-2xl  text-center group"
            gradientColor={theme === "dark" ? "#262626" : "#FFFBEB"}
        >
            <div className="flex items-center justify-center w-full">

            <PaintbrushIcon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-1 text-accent-foreground">Express Your Unique Style</h3>
            <p className="text-sm text-accent-foreground">Make your blog truly yours with flexible design options and custom themes that reflect your personal voice.</p>
        </MagicCard>
        <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center shadow-2xl  text-center group"
            gradientColor={theme === "dark" ? "#262626" : "#FFFBEB"}
        >
            <div className="flex items-center justify-center w-full">

            <RocketIcon className="h-8 w-8 text-white mb-3 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-semibold text-lg sm:text-xl mb-1 text-accent-foreground">Reach More Readers</h3>
            <p className="text-sm text-accent-foreground">Your content loads fast and ranks high. Built with performance and SEO in mind to find its audience.</p>
        </MagicCard>
        </div>
    </section>
  )
}