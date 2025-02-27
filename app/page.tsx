import FeaturedPosts from "@/components/Sections/featuredPosts";
import PopulerPosted from "@/components/Sections/populerPosted";
import RecentlyPosted from "@/components/Sections/recentlyPosted";
import TopAuthors from "@/components/Sections/topAuthor";
import TopCategories from "@/components/Sections/topCategories";
import InstagramFeed from "@/components/Sections/socialFeed";
import TopTags from "@/components/Sections/topTags";
import HeroLobby from "@/components/Sections/heroLobby";

export default function Home() {

    return (
        <main className="h-full w-full p-2">
            <HeroLobby/>

            <div className="w-full h-full max-w-7xl mx-auto  grid grid-cols-1 xl:grid-cols-3 gap-4"> {/* Contenedor y grid */}
                <div className="col-span-2 "> {/* FeaturedPosts ocupa 2 columnas */}
                    <FeaturedPosts />
                </div>
                <div className="w-full  max-w-7xl mx-auto"> {/* PopulerPosted ocupa 1 columna */}
                    <PopulerPosted />
                </div>
            </div>
            <div className="w-full  h-full max-w-7xl mx-auto  py-8 grid grid-cols-1 xl:grid-cols-3 gap-4"> {/* Contenedor y grid */}
                <div className="col-span-2 "> {/* FeaturedPosts ocupa 2 columnas */}
                <RecentlyPosted/>
                </div>
                <div className="w-full  max-w-7xl mx-auto"> {/* PopulerPosted ocupa 1 columna */}
                    <TopAuthors />
                    <TopCategories/>
                    <InstagramFeed/>
                    <TopTags/>
                </div>
            </div>
            
        </main>
    );
}