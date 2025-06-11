// components/Cards/SmallCard.tsx
import { Article } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { UserIcon } from "lucide-react";

interface SmallCardProps {
  article: Article;
}

export default function SmallCard({ article }: SmallCardProps) {
  const authorSlug = typeof article.author.name === "string"
    ? article.author.name.toLowerCase().replace(/\s+/g, "-")
    : `author-${article.sys.id}`;

  return (
    <div className="w-full bg-stone-200/50 dark:bg-neutral-900/70   p-1 hover:translate-x-2 transition-all duration-300 ease-in-out  shadow-none rounded-2xl">
      <div className="bg-stone-200 dark:bg-neutral-900 hover:bg-stone-100/50 dark:hover:bg-neutral-800/40 rounded-2xl  px-4 py-5 flex items-center">
        <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl mr-4 relative">
          <Link href={`/search/${article.slug}`} target="_blank">
            <Image
              src={article.articleImage.url}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className="flex-grow">
          {article.categoryName && (
            <div className="mb-2">
              <Link href={`/categories/${article.categoryName.toLowerCase()}`}>
                <Badge className="dark:text-accent-foreground  bg-accent rounded-[7px] p-1.5">
                  {article.categoryName}
                </Badge>
              </Link>
            </div>
          )}
          <h3 className="text-sm font-semibold dark:text-accent-foreground text-foreground">
            <Link href={`/search/${article.slug}`} target="_blank" className="hover:underline line-clamp-2">
              {article.title}
            </Link>
          </h3>
          <div className="flex items-center gap-x-2 mt-3">
            <UserIcon className="w-5 h-5 text-accent" />
            <Link href={`/authors/${authorSlug}`} className="dark:text-accent-foreground text-foreground text-sm hover:underline">
              {article.author.name || "Unknown Author"}
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}