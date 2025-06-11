// components/Cards/VerticalCard.tsx
import { Article } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, WatchIcon, ArrowRight, UserIcon } from "lucide-react";

interface VerticalCardProps {
  article: Article;
}

export default function VerticalCard({ article }: VerticalCardProps) {
  const authorSlug = typeof article.author.name === "string"
    ? article.author.name.toLowerCase().replace(/\s+/g, "-")
    : `author-${article.sys.id}`;

  return (
    <div className="w-full bg-stone-200/50 dark:bg-neutral-900/50 p-2 rounded-2xl">
      <div className=" bg-stone-200  dark:bg-neutral-900  rounded-2xl p-4 transition-all hover:shadow-lg">
        {/* Imagen con efecto hover */}
        <div className="overflow-hidden rounded-xl shadow-md mb-4 group">
          <Link href={`/search/${article.slug}`} target="_blank">
            <Image
              src={article.articleImage.url}
              alt={article.title}
              width={1000}
              height={600}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-y-3 px-2">
          {article.categoryName && (
            <div className="mb-2">
              <Link href={`/categories/${article.categoryName.toLowerCase()}`}>
                <Badge className="text-accent-foreground bg-accent rounded-[7px] p-1.5">
                  {article.categoryName}
                </Badge>
              </Link>
            </div>
          )}
          <h3 className="text-lg font-semibold dark:text-accent-foreground text-foreground leading-tight  h-12">
            <Link href={`/search/${article.slug}`} target="_blank" className="hover:underline line-clamp-2">
              {article.title}
            </Link>
          </h3>

          <div className="w-1/2 h-0.5 bg-gradient-to-r from-primary via-accent to-transparent my-3 opacity-75" />

          <p className="text-sm text-foreground dark:text-accent-foreground line-clamp-3 h-20">{article.sumary}</p>
          {article.tags && article.tags.length > 0 && (
            <div className="mb-2 flex flex-wrap gap-2 h-14">
              {article.tags.map((tag) => (
                <Link href={`/tags/${tag.toLowerCase()}`} key={tag}>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-primary cursor-pointer dark:text-accent-foreground hover:bg-neutral-800 dark:hover:bg-accent text-primary-foreground"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 items-center text-sm dark:text-accent-foreground text-foreground rounded-lg p-2  h-12">
            <div className="flex items-center gap-x-2">
              <UserIcon className="w-5 h-5 text-accent" />
              <Link href={`/authors/${authorSlug}`} className="hover:underline">
                {article.author.name || "Unknown Author"}
              </Link>
            </div>
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="w-5 h-5 text-accent" />
              <span className="italic">
                {new Date(article.date ?? "").toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <WatchIcon className="w-5 h-5 text-accent" />
              <span>5 Min. To Read</span>
            </div>
          </div>

          {/* Botón "Read more" ocupando ancho completo */}
          <div className="mt-4">
            <Link
              href={`/search/${article.slug}`}
              target="_blank"
              className="inline-flex w-full justify-center items-center font-semibold text-primary-foreground bg-primary hover:bg-accent rounded-2xl px-4 py-2 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <span>Read more</span>
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}