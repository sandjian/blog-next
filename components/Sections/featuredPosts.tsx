// components/FeaturedPosts.tsx
import { Suspense } from "react";
import { getLastThreeArticles } from "@/lib/api";
import HorizontalCard from "../Cards/HorizontalCard";
import SkeletonHorizontalCard from "../Cards/SkeletonHorizontalCard";
import Link from "next/link";

export default async function FeaturedPosts() {
  const articles = await getLastThreeArticles();

  return (
    <section className="w-full mx-auto py-8 px-4 ">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-white">Featured</span>
          This Month
        </h2>
      </div>
      <Suspense
        fallback={
          <div className="grid gap-y-6 md:gap-y-6 lg:gap-y-2">
            {[...Array(3)].map((_, i) => (
              <SkeletonHorizontalCard key={i} />
            ))}
          </div>
        }
      >
        <div className="grid gap-y-6 md:gap-y-6 ">
          {articles.map((article) => (
            <HorizontalCard key={article.sys.id} article={article} />
          ))}
        </div>
      </Suspense>
      <Link href="/search">
        <div className=" w-full mt-8 p-3 bg-accent flex justify-center items-center rounded-3xl hover:shadow-2xl hover:shadow-white/[0.1] hover:bg-primary  transition-all duration-300 ease-in-out hover:-translate-y-2">
          <button className="text-primary-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}