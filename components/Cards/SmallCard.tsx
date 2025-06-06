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
    <div className="border-0 bg-neutral-200 dark:transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] shadow-none rounded-2xl px-4 py-5 flex items-center">
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
                <Badge className="text-accent-foreground bg-accent rounded-[7px] p-1.5">
                  {article.categoryName}
                </Badge>
              </Link>
            </div>
          )}
        <h3 className="text-sm font-semibold text-foreground">
          <Link href={`/search/${article.slug}`} target="_blank" className="hover:underline line-clamp-2">
            {article.title}
          </Link>
        </h3>
        <div className="flex items-center gap-x-2 mt-3">
        <UserIcon className="w-5 h-5 text-accent" />
          <Link href={`/authors/${authorSlug}`} className="text-foreground text-sm hover:underline">
            {article.author.name || "Unknown Author"}
          </Link>
        </div>
      </div>
    </div>
  );
}