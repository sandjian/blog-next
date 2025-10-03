// components/Cards/ProfileCard.tsx
import { Author } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface ProfileCardProps {
  author: Author;
}

export default function ProfileCard({ author }: ProfileCardProps) {
  const authorSlug = typeof author.name === "string"
    ? author.name.toLowerCase().replace(/\s+/g, "-")
    : `author-${author.sys.id}`;

  return (
    <div className="w-full bg-stone-200/50 dark:bg-neutral-900/70 p-1 transition-all duration-300 ease-in-out shadow-none rounded-l-full rounded-r-3xl group">
      <div className="bg-stone-200 dark:bg-neutral-900 hover:bg-stone-100/50 dark:hover:bg-neutral-800/40 rounded-l-full rounded-r-3xl px-2 py-2 flex items-center">

        <div className="w-24 h-24 overflow-hidden rounded-full mr-4 relative">
          <Link href={`/authors/${authorSlug}`}>
            <Image
              src={author.profilePicture?.url || "https://via.placeholder.com/100"}
              alt={`${author.name || "Author"} profile`}
              width={100}
              height={100}
              className="w-full h-full rounded-full object-cover brightness-75"
            />
          </Link>

          <div className="
            absolute inset-0 rounded-full 
            bg-radial-gradient-to-transparent 
            [background:radial-gradient(circle_at_center,transparent_40%,theme(colors.stone.200)_100%)]
            dark:[background:radial-gradient(circle_at_center,transparent_40%,theme(colors.neutral.900)_100%)]
            pointer-events-none
          "></div>

        </div>



        <div className="flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-foreground dark:text-accent-foreground">
            <Link
              href={`/authors/${authorSlug}`}
            >
              {/* 3. El span envuelve el nombre del autor y contiene la lógica de la animación */}
              <span className="
                bg-gradient-to-r from-transparent via-accent to-transparent 
                (0% de ancho, 3px de alto)
                bg-[length:0%_3px] 
                bg-left-bottom 
                bg-no-repeat 
                transition-[background-size] duration-500 
                group-hover:bg-[length:100%_3px]
              ">
                {author.name || "Unknown Author"}
              </span>
            </Link>
          </h3>

          <div className="text-xs text-foreground dark:text-accent-foreground italic ">
            {author.role || "No description available."}
          </div>

          <div className="flex flex-wrap gap-x-2 pt-2">
            {author.socialLinks?.twitter && (
              <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="text-foreground transition-all duration-300 hover:scale-110" />
              </a>
            )}
            {author.socialLinks?.github && (
              <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className=" text-foreground transition-all duration-300 hover:scale-110 " />
              </a>
            )}
            {author.socialLinks?.linkedin && (
              <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="text-foreground transition-all duration-300 hover:scale-110 " />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}