"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {  Moon, Send, Sun } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialLinks = [
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://linkedn.com', icon: FaLinkedinIn, label: 'LinkedIn' }, // Corrected label
];



function FooterSection() {
  return (
    <footer className="relative border-t  text-foreground dark:text-accent-foreground transition-colors duration-300 pt-20 w-full max-w-7xl m-auto">
      
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 z-50">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="flex  items-center">

              <h2 className="mb-4 text-3xl font-semibold text-foreground dark:text-accent-foreground tracking-tight">
                <span className="bg-primary p-1.5 rounded-2xl text-accent-foreground">Blog</span> Connected
              </h2>
            </div>
            <p className="mb-6 text-foreground dark:text-accent-foreground/60">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm bg-neutral-200 dark:bg-neutral-800 rounded-2xl border-border"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-transparent hover:bg-transparent text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4 text-accent" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>
          <div className="z-50">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm dark:text-neutral-300">
              <a href="/" className="block transition-colors dark:hover:text-accent-foreground hover:text-accent hover:font-semibold">
                Home
              </a>
              <a href="/about-us" className="block transition-colors dark:hover:text-accent-foreground hover:text-accent hover:font-semibold">
                About Us
              </a>
              <a href="/categories" className="block transition-colors dark:hover:text-accent-foreground hover:text-accent hover:font-semibold">
                Categories
              </a>
              <a href="/authors" className="block transition-colors dark:hover:text-accent-foreground hover:text-accent hover:font-semibold">
                Authors
              </a>
              <a href="/search" className="block transition-colors dark:hover:text-accent-foreground hover:text-accent hover:font-semibold">
                All Posts
              </a>
            </nav>
          </div>
          <div  className="z-50">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
            {SocialLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground dark:text-accent-foreground hover:text-accent dark:hover:text-accent transition-all"
            aria-label={label}
          >
            <Icon size={20} />
          </Link>
        ))}
            </div>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-foreground dark:text-accent-foreground/60">
            © 2025 Alejandro Sandjian. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-accent-DEFAULT">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-accent-DEFAULT">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-accent-DEFAULT">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { FooterSection };