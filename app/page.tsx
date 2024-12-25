import { Newsletter } from "@/components/newsletter";
import HeroCarousel from "@/components/hero-carousel";
import { getLastThreeArticles } from "@/lib/api";
import FeaturedArticles from "@/components/featuredArticles";


export default async function Home() {
  const posts = await getLastThreeArticles();

  return (
    <main className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6 p-4 ">
        <HeroCarousel posts={posts} />
        <Newsletter />
        <FeaturedArticles />
        
    </main>
  );
}