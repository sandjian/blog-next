import { Suspense } from "react";
import { getLastSevenArticles } from "@/lib/api";
import SmallCard from "../Cards/SmallCard";
import SkeletonSmallCard from "../Cards/SkeletonSmallCard";

export default async function PopulerPosted() {
  const articles = await getLastSevenArticles();

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Popular</span>
          Posted
        </h2>
      </div>

      <Suspense
        fallback={
          <div className="grid gap-y-4">
            {[...Array(7)].map((_, i) => (
              <SkeletonSmallCard key={i} />
            ))}
          </div>
        }
      >
        <div className="grid gap-y-4">
          {articles.map((article) => (
            <SmallCard key={article.sys.id} article={article} />
          ))}
        </div>
      </Suspense>
    </section>
  );
}