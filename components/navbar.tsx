import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { client } from "@/lib/client";
import Buscador from "./search";
import MenuMobile from "./ui/menu-mobile";

export const dynamic = "auto",
  fetchCache = "auto",
  revalidate = 10;

export default async function Navbar() {
  const response = await client.getEntries({
    content_type: "blog",
  });

  const posts = response.items;

  return (
    <>
      {/* Navbar en pantallas grandes */}
      <nav className="flex justify-between items-center max-lg:hidden p-10 max-w-7xl mx-auto w-full">
        <ul className="flex space-x-4 justify-start items-center">
          <li>
            <Link href="/">
              <Image
                src="/BLOG.png"
                alt="Logo"
                width={120}
                height={100}
                className="mr-8 invert"
              />
            </Link>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/" className="hover:font-semibold">
                Lobby
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/about-me" className="hover:font-semibold">
                About me
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/entradas" className="hover:font-semibold">
                Publicaciones
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/categorias" className="hover:font-semibold">
                Categorías
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <Link href="/contacto" className="hover:font-semibold">
                Contacto
              </Link>
            </Button>
          </li>
        </ul>
        <div className="flex gap-4">
          <Buscador posts={posts} />
        </div>
      </nav>

      {/* Navbar en pantallas pequeñas */}
      <nav className="hidden max-lg:flex items-center p-4">
        {/* Logo alineado a la izquierda */}
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/BLOG.png"
              alt="Logo"
              width={130}
              height={100}
              className="p-4 invert"
            />
          </Link>
        </div>

        {/* Buscador centrado */}
        <div className="hidden md:flex-1 md:flex justify-center">
          <Buscador posts={posts} />
        </div>

        {/* ThemeSwitcher y menú hamburguesa alineados a la derecha */}
        <div className="flex-1 flex items-center justify-end gap-4">
          <MenuMobile />
        </div>
      </nav>
    </>
  );
}
