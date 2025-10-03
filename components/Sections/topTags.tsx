import { Suspense } from "react";
import { getTopTags } from "@/lib/api";
import Link from "next/link";

export default async function TopTags() {
  const popularTags = await getTopTags(14);

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Popular</span>
          Tags
        </h2>
      </div>

      <Suspense fallback={<SkeletonTopTags />}>
        <div className="rounded-lg">
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => (
              <Link href={`/tags/${tag.toLowerCase()}`} key={index}>
                <div className="bg-stone-200 dark:bg-neutral-900 px-4 py-3 rounded-2xl text-foreground font-medium hover:bg-neutral-600/50 dark:hover:bg-neutral-700 dark:text-accent-foreground transition-all duration-300 ease-in-out hover:-translate-y-2 hover:text-primary-foreground cursor-pointer">
                  #{tag.toLowerCase()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
}
function SkeletonTopTags() {
  return (
    <div className="rounded-lg overflow-hidden animate-pulse">
      <div className="flex flex-wrap gap-3">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 dark:bg-gray-700 px-4 py-3 rounded-2xl h-10 w-24"
          ></div>
        ))}
      </div>
    </div>
  );
}