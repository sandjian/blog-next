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
        <main className="w-full">
            <div className="w-full relative m-auto">

                
                <HeroLobby />

                <div className="w-full h-full max-w-7xl mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-4"> 
                    <div className="col-span-2 "> 
                        <FeaturedPosts />
                    </div>
                    <div className="w-full  max-w-7xl mx-auto"> 
                        <PopulerPosted />
                    </div>
                </div>
                <div className="w-full  h-full max-w-7xl mx-auto  py-8 grid grid-cols-1 lg:grid-cols-3 gap-4"> 
                    <div className="col-span-2 ">
                        <RecentlyPosted />
                    </div>
                    <div className="w-full  max-w-7xl mx-auto"> 
                        <TopAuthors />
                        <TopCategories />
                        <InstagramFeed />
                        <TopTags />
                    </div>
                </div>
            </div>

        </main>
    );
}