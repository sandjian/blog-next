
import Link from 'next/link';
import MenuMobile from './ui/menu-mobile';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Switch } from './ui/switch';
import Navigation from './ui/dropdown-navigation';
import { getCategoriesWithCount } from '@/lib/api';
import { Moon, Sun } from 'lucide-react';

const SocialLinks = [
  { href: 'https://instagram.com', icon: FaInstagram, label: 'Instagram' },
  { href: 'https://facebook.com', icon: FaFacebookF, label: 'Facebook' },
  { href: 'https://twitter.com', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://linkedn.com', icon: FaLinkedinIn, label: 'LinkedIn' },
];

export default async function Navbar() {
  const categoriesData = await getCategoriesWithCount();
  const categories = categoriesData.map((cat) => cat.name)
  return (
    <nav className="flex items-center justify-between py-2  max-w-7xl mx-auto w-full px-6">
      <Link href="/">
        <div className="flex justify-center items-center">
          <h2 className=" text-2xl font-semibold text-primary dark:text-accent-foreground tracking-tight">
            <span className="bg-primary p-1.5 rounded-2xl text-accent-foreground">Blog</span> Connected
          </h2>
        </div>
      </Link>

      <div className='hidden lg:block'>
        <Navigation categories={categories} />
      </div>

      <div className="hidden lg:flex items-center space-x-6 ">
        <div className="hidden lg:flex items-center space-x-3 ">
          {SocialLinks.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground dark:text-neutral-300 hover:text-accent dark:hover:text-white transition-all"
              aria-label={label}
            >
              <Icon size={15} />
            </Link>
          ))}
        </div>
        <div className='flex items-center justify-center gap-x-2 '>
          <Sun className="h-4 w-4" />
          <Switch />
          <Moon className="h-4 w-4" />
        </div>
      </div>
      <div className="lg:hidden">
        <MenuMobile />
      </div>
    </nav>
  );
}