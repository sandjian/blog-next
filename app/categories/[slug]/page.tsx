// app/categories/[slug]/page.tsx
import { Suspense } from "react";
import { getAllArticles } from "@/lib/api";
import VerticalCard from "@/components/Cards/VerticalCard";
import SkeletonVerticalCard from "@/components/Cards/SkeletonVerticalCard";
import { CTA } from "@/components/Sections/CTA";

interface Params {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({ params }: Params) {
  const { slug } = params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const articles = await getAllArticles();
  const categoryArticles = articles.filter((article) => article.categoryName === categoryName);

  return (
    <section className="w-full px-4 py-10 ">
      <div className="w-full mx-auto py-8 px-4 mb-8 max-w-7xl rounded-2xl bg-neutral-100 dark:bg-neutral-950/50">
        <div className="mt-20 mb-10">
<h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Search for</span>
            {categoryName}
          </h2>
        </div>
        <Suspense
          fallback={
            <div className="w-full grid justify-center items-center mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {[...Array(3)].map((_, i) => (
                <SkeletonVerticalCard key={i} />
              ))}
            </div>
          }
        >
          <div className="w-full grid justify-center items-center mx-auto max-w-7xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {categoryArticles.map((article) => (
              <VerticalCard key={article.sys.id} article={article} />
            ))}
          </div>
        </Suspense>
      </div>
      <CTA/>
    </section>

  );
}