// app/tags/[slug]/page.tsx
import { Suspense } from "react";
import VerticalCard from "@/components/Cards/VerticalCard";
import SkeletonVerticalCard from "@/components/Cards/SkeletonVerticalCard";
import { getAllArticles } from "@/lib/api";

interface Params {
  params: {
    slug: string;
  };
}

export default async function TagPage({ params }: Params) {
  const { slug } = params;
  const tagName = slug;
  const displayTagName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const articles = await getAllArticles();
  const tagArticles = articles.filter((article) =>
    article.tags?.some((tag) => tag.toLowerCase() === tagName.toLowerCase())
  );

  return (
    <section className="w-full mx-auto pb-12 max-w-6xl p-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">
            Search for
          </span>
          {displayTagName}
        </h2>
      </div>
      <Suspense
        fallback={
          <div className="w-full grid justify-center items-center mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <SkeletonVerticalCard key={i} />
            ))}
          </div>
        }
      >
        <div className="w-full grid justify-center items-center mx-auto grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
          {tagArticles.map((article) => (
            <VerticalCard article={article} key={article.sys.id} />
          ))}
        </div>
      </Suspense>
    </section>
  );
}