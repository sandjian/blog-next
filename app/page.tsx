import FeaturedPosts from "@/components/Sections/featuredPosts";
import PopulerPosted from "@/components/Sections/populerPosted";
import RecentlyPosted from "@/components/Sections/recentlyPosted";
import TopAuthors from "@/components/Sections/topAuthor";
import TopCategories from "@/components/Sections/topCategories";
import InstagramFeed from "@/components/Sections/socialFeed";
import TopTags from "@/components/Sections/topTags";
import HeroLobby from "@/components/Sections/heroLobby";
import { CTA } from "@/components/Sections/CTA";
import { MagicCardDemo } from "@/components/Sections/Features";

export default function Home() {

    return (
        <main className="w-full">
            <div className="w-full relative m-auto px-4">

                <HeroLobby />
                <MagicCardDemo/>

                <div className="w-full h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 rounded-2xl">
                    {/* FeaturedPosts - First variant of box-shadow */}
                    <div className="col-span-2  bg-neutral-100 dark:bg-neutral-950/50  px-4 rounded-2xl">
                        <FeaturedPosts />
                    </div>
                    {/* PopularPosted - Second variant of box-shadow */}
                    <div className="w-full max-w-7xl mx-auto bg-neutral-100 px-4 dark:bg-neutral-950/50 rounded-2xl">
                        <PopulerPosted />
                    </div>
                </div>

                    <CTA/>
                
                <div className="w-full h-full max-w-7xl mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* RecentlyPosted - Third variant of box-shadow */}
                    <div className="col-span-2 bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
                        <RecentlyPosted />
                    </div>
                    {/* Right column with multiple sections */}
                    <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-2">
                        {/* TopAuthors - Fourth variant of box-shadow */}
                        <div className="bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
                            <TopAuthors />
                        </div>
                        {/* TopCategories - Fifth variant of box-shadow */}
                        <div className="bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
                            <TopCategories />
                        </div>
                        {/* InstagramFeed - First variant (reused) */}
                        <div className="bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
                            <InstagramFeed />
                        </div>
                        {/* TopTags - Second variant (reused) */}
                        <div className="bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
                            <TopTags />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}