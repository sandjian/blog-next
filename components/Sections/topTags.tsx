// components/TopTags.tsx
import { Suspense } from "react";
import { getTopTags } from "@/lib/api";
import Link from "next/link";

export default async function TopTags() {
  const popularTags = await getTopTags(14);

  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Popular</span>
          Tags
        </h2>
      </div>

      <Suspense fallback={<SkeletonTopTags />}>
        <div className="rounded-lg overflow-hidden">
          <div className="flex flex-wrap gap-3">
            {popularTags.map((tag, index) => (
              <Link href={`/tags/${tag.toLowerCase()}`} key={index}>
                <div className="bg-neutral-200 dark:transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  px-4 py-3 rounded-2xl text-foreground font-medium hover:bg-primary dark:hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer">
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

// Skeleton para TopTags
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