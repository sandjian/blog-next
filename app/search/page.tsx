
import { Suspense } from "react";
import { getAllArticles } from "@/lib/api";
import Buscador from "@/components/search";
import AllPosts from "@/components/Sections/allPosts";
import SkeletonVerticalCard from "@/components/Cards/SkeletonVerticalCard";

export default async function Home() {
  const posts = await getAllArticles();

  return (
    <main className="relative w-full">
      <section className="mx-auto w-full max-w-7xl p-2">
          <div className="h-[20rem] mx-auto w-full max-w-7xl relative rounded-2xl bg-neutral-100 dark:bg-neutral-950/50 isolate flex flex-col items-center justify-center space-y-4 text-center">

            <div className="space-y-2 z-50 px-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
                Explore, Learn, and Share
              </h1>
              <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                Dive into our latest articles, discover new trends, and always stay ahead of the curve
              </p>
              <div className="w-full max-w-3xl mx-auto pt-8 p-2">
                <Suspense fallback={<SkeletonSearch />}>
                  <Buscador posts={posts} />
                </Suspense>
              </div>
            </div>
          </div>
          

        <div className="px-4 pb-4 my-4 rounded-2xl bg-neutral-100 dark:bg-neutral-950/50">
          <Suspense
            fallback={
              <div className="w-full grid justify-center items-center max-w-7xl mx-auto grid-cols-1 lg:grid-cols-3  gap-2">
                {[...Array(6)].map((_, i) => (
                  <SkeletonVerticalCard key={i} />
                ))}
              </div>
            }
          >
            <AllPosts posts={posts} />
          </Suspense>

        </div>
      </section>
    </main>
  );
}
function SkeletonSearch() {
  return (
    <div className="w-full max-w-3xl mx-auto animate-pulse">
      <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
  );
}