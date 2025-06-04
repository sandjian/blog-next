import { getAllArticles, getLastThreeArticles } from "@/lib/api";
import HeroCarousel from "../ui/hero-carousel";
import Searcher from "../search";

export default async function HeroLobby (){
    const posts = await getLastThreeArticles();
    const allPosts = await getAllArticles();
    return(
        <section className="h-full w-full mt-2 p-4">
            <HeroCarousel posts={posts}/>
            <Searcher posts={allPosts}/>
        </section>
    )
}