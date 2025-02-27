// app/page.tsx
import { Suspense } from "react";
import { getAllArticles } from "@/lib/api";
import Buscador from "@/components/search";
import AllPosts from "@/components/Sections/allPosts";
import SkeletonVerticalCard from "@/components/Cards/SkeletonVerticalCard";

export default async function Home() {
  const posts = await getAllArticles();

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6 p-4">
      <div className="mx-auto w-full container space-y-12">
        <div className="relative isolate z-20 bg-primary flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl">
          <div className="space-y-2 z-50">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50">
              Explora, Aprende y Comparte
            </h1>
            <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Sumérgete en nuestros últimos artículos, descubre nuevas tendencias y mantente siempre a la vanguardia de la tecnología.
            </p>
            <div className="w-full max-w-3xl mx-auto pt-8">
              <Suspense fallback={<SkeletonSearch />}>
                <Buscador posts={posts} />
              </Suspense>
            </div>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="w-full grid justify-center items-center mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
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
  );
}

// Skeleton para el Buscador
function SkeletonSearch() {
  return (
    <div className="w-full max-w-3xl mx-auto animate-pulse">
      <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
    </div>
  );
}