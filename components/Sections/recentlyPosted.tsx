import { Suspense } from "react";
import { getLastSixArticles } from "@/lib/api";
import VerticalCard from "../Cards/VerticalCard";
import SkeletonVerticalCard from "../Cards/SkeletonVerticalCard";
import Link from "next/link";

export default async function RecentlyPosted() {
  const articles = await getLastSixArticles();

  return (
    <section className="w-full mx-auto py-8 px-4">
      <div className=" my-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Recently</span>
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
        <div className=" w-full mt-8 p-3 bg-accent flex justify-center items-center rounded-xl dark:bg-neutral-800 hover:shadow-2xl hover:shadow-white/[0.1] hover:bg-primary  transition-all duration-300 ease-in-out hover:-translate-y-2">
          <button className="text-primary-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}