// components/Cards/ProfileCard.tsx
import { Author } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

interface ProfileCardProps {
  author: Author;
}

export default function ProfileCard({ author }: ProfileCardProps) {
  const authorSlug = typeof author.name === "string"
    ? author.name.toLowerCase().replace(/\s+/g, "-")
    : `author-${author.sys.id}`;

  return (
    <div className="w-full bg-stone-200/50 dark:bg-neutral-900/70   p-1 hover:translate-x-2 transition-all duration-300 ease-in-out  shadow-none rounded-2xl">
      <div className="bg-stone-200 dark:bg-neutral-900  hover:bg-stone-100/50 dark:hover:bg-neutral-800/40 rounded-2xl  px-4 py-5 flex items-center">
        <div className="w-24 h-24 overflow-hidden rounded-2xl mr-4 ">
          <Link href={`/authors/${authorSlug}`}>
            <Image
              src={author.profilePicture?.url || "https://via.placeholder.com/100"}
              alt={`${author.name || "Author"} profile`}
              width={100}
              height={100}
              className="w-full h-full rounded-2xl object-cover"
            />
          </Link>
        </div>
        <div className="flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-foreground dark:text-accent-foreground">
            <Link href={`/authors/${authorSlug}`} className="hover:underline">
              {author.name || "Unknown Author"}
            </Link>
          </h3>
          <div className="text-xs text-foreground dark:text-accent-foreground italic ">
            {author.role || "No description available."}
          </div>
          <div className="flex flex-wrap gap-x-2 pt-2">
            {author.socialLinks?.twitter && (
              <Button variant="outline" size="icon" asChild className="flex items-center  justify-center bg-neutral-400/40 hover:bg-neutral-100/60  shadow-lg  dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-2xl p-2">
                <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#14171a] dark:text-neutral-200" size={16} />
                </a>
              </Button>
            )}
            {author.socialLinks?.github && (
              <Button variant="outline" size="icon" asChild className="flex items-center  justify-center bg-neutral-400/40 hover:bg-neutral-100/60  shadow-lg dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-2xl p-2">
                <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-black dark:text-neutral-200" size={16} />
                </a>
              </Button>
            )}
            {author.socialLinks?.linkedin && (
              <Button variant="outline" size="icon" asChild className="flex items-center  justify-center bg-neutral-400/40 hover:bg-neutral-100/60  shadow-lg dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] rounded-2xl p-2">
                <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-[#0077b5] dark:text-neutral-200" size={16} />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}