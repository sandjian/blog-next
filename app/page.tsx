import { Newsletter } from "@/components/newsletter";
import HeroCarousel from "@/components/hero-carousel";
import { getLastThreeArticles } from "@/lib/api";
import FeaturedArticles from "@/components/featuredArticles";

export default async function Home() {
  const posts = await getLastThreeArticles();

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center mx-auto space-y-12 pb-6 p-4">
      
        <div className="space-y-12">
          <HeroCarousel posts={posts} />
          <Newsletter />
          <FeaturedArticles />
        </div>
      
    </div>
  );
}
