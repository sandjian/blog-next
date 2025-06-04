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
    <div className="border-0 bg-neutral-200 dark:transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-none rounded-2xl p-4 flex items-center">
      <div className="w-20 h-20 overflow-hidden rounded-full mr-4">
        <Link href={`/authors/${authorSlug}`}>
          <Image
            src={author.profilePicture?.url || "https://via.placeholder.com/100"}
            alt={`${author.name || "Author"} profile`}
            width={100}
            height={100}
            className="w-full h-full rounded-full object-cover"
          />
        </Link>
      </div>
      <div className="flex-grow">
        <h3 className="text-md font-semibold text-foreground">
          <Link href={`/authors/${authorSlug}`} className="hover:underline">
            {author.name || "Unknown Author"}
          </Link>
        </h3>
        <div className="mt-2 text-xs text-foreground italic">
          {author.role || "No description available."}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {author.socialLinks?.twitter && (
            <Button variant="outline" size="icon" asChild>
              <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-[#14171a] dark:text-accent" size={16} />
              </a>
            </Button>
          )}
          {author.socialLinks?.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-black dark:text-accent" size={16} />
              </a>
            </Button>
          )}
          {author.socialLinks?.linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={author.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#0077b5] dark:text-accent" size={16} />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}