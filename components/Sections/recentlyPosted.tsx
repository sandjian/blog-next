// components/RecentlyPosted.tsx
import { Suspense } from "react";
import { getLastSixArticles } from "@/lib/api";
import VerticalCard from "../Cards/VerticalCard";
import SkeletonVerticalCard from "../Cards/SkeletonVerticalCard";
import Link from "next/link";

export default async function RecentlyPosted() {
  const articles = await getLastSixArticles();

  return (
    <section className="w-full mx-auto pt-8 px-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Recently</span>
          Posted
        </h2>
      </div>
      <Suspense
        fallback={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(6)].map((_, i) => (
              <SkeletonVerticalCard key={i} />
            ))}
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <VerticalCard key={article.sys.id} article={article} />
          ))}
        </div>
      </Suspense>
      <Link href="/search">
        <div className="w-full mt-6 p-3 bg-primary flex justify-center items-center rounded-xl hover:bg-accent transition-colors">
          <button className="text-primary-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}