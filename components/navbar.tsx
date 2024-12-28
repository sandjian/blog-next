'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import MenuMobile from './ui/menu-mobile';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import HyperText from './ui/hyper-text';

const NAV_LINKS = [
  { href: '/', label: 'Lobby' },
  { href: '/publicaciones', label: 'Publicaciones' },
  { href: '/about-me', label: 'Conócenos' },
  { href: '/contacto', label: 'Contáctanos' },
];

const SOCIAL_LINKS = [
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://linkedn.com', icon: FaLinkedinIn, label: 'Twitter' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-12 py-4 lg:px-12 max-w-7xl mx-auto">
      <Link href="/">
        <HyperText
          className="text-5xl font-semibold bg-clip-text text-transparent bg-slate-300"
          text="BLOG."
        />
      </Link>
        
      <ul className="hidden lg:flex space-x-8">
  
          
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href} className="relative after:absolute after:bg-neutral-400 after:-bottom-1 after:left-0 after:h-[1px]  after:w-full after:origin-bottom-right after:scale-x-0  hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-500">
            <Link
              href={href}
              className={`transition-all ${pathname === href
                  ? 'text-white font-semibold'
                  : 'text-slate-400  hover:font-semibold'
                }`}
            >
              {label}
            </Link>

          </li>
        ))}
      
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-all"
            aria-label={label}
          >
            <Icon size={22} />
          </Link>
        ))}
      </div>

      <div className="lg:hidden">
        <MenuMobile />
      </div>
    </nav>
  );
}
