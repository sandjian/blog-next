import Link from "next/link";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Publicaciones", href: "/entradas" },
    { name: "Conocenos", href: "/about-me" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
  ];

  return (
    <footer className="pt-24  text-gray-400 py-8 px-8 mx-auto max-w-7xl">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <div className="flex flex-col space-y-4">
          <h2 className="text-lg text-slate-400 font-semibold">Navegación</h2>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:font-extrabold hover:text-white transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-lg text-slate-400 font-semibold">Conéctate con nosotros</h2>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link href={social.href} key={index} className="hover:text-white transition-colors" target="_blank">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-lg text-slate-400 font-semibold">Créditos</h2>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Desarrollado con ❤️ por <span className="font-bold">Alejandro Sandjian</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
