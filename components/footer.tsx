import Link from "next/link";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  

  const navigationLinks = [
    { name: "Inicio", href: "/" },
    { name: "Publicaciones", href: "/entradas" },
    { name: "Categorías", href: "/categorias" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
  ];

  return (
    <footer className="pt-24 text-gray-200 py-8 px-6 sm:px-12 max-w-7xl mx-auto w-full">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Navegación */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Navegación</h2>
          <ul className="space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-indigo-500 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Conéctate con nosotros</h2>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link href={social.href} key={index} className="hover:text-indigo-500 transition-colors" target="_blank">
                <social.icon className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>

        {/* Créditos */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Créditos</h2>
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
