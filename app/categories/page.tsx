import PopulerPosted from "@/components/Sections/populerPosted";
import TopTags from "@/components/Sections/topTags";
import { getCategoriesWithCount } from "@/lib/api";
import Link from "next/link";


export default async function CategoriesList() {

    const categories = await getCategoriesWithCount();
    return (
        <main className="relative w-full">
            <section className="mx-auto w-full max-w-7xl p-4">
                <div className="z-20 bg-orange-800/60  mx-auto w-full max-w-7xl p-2 h-[28rem] rounded-2xl">
                    <div className="h-full relative rounded-2xl bg-orange-800/90 isolate flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent-foreground">
                            Explore, Learn, and Share
                        </h1>
                        <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-accent-foreground">
                            Dive into our latest articles, discover new trends, and always stay ahead of the curve
                        </p>

                    </div>
                </div>
                <div className="w-full h-full max-w-7xl mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="col-span-1 w-full  mt-10 bg-neutral-100 dark:bg-neutral-900/70 rounded-2xl p-4 ">

                        <div className="mt-14 p-4">
                            <h2 className="text-3xl font-bold text-foreground dark:text-accent-foreground relative mb-2">
                                <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-accent-foreground">All</span>
                                Categories
                            </h2>
                        </div>

                        <div className=" rounded-lg ">
                            <div className="grid grid-cols-2 p-4 ">
                                <div className="font-semibold text-foreground dark:text-accent-foreground">Category</div>
                                <div className="font-semibold text-foreground dark:text-accent-foreground text-right">Posts</div>
                            </div>

                            <div className="">
                                {categories.map((category) => (
                                    <Link href={`/categories/${category.name}`} key={category.name}>

                                        <div className=" mt-3 p-1  hover:translate-x-2 bg-stone-200/50 dark:bg-neutral-900/50 transition-all duration-300 ease-in-out rounded-2xl">
                                            <div className='grid grid-cols-2 p-4 rounded-2xl bg-stone-200 dark:bg-neutral-900 dark:hover:bg-neutral-700/70 transition-all duration-300 hover:bg-neutral-400/40'>

                                                <div className="text-sm font-semibold text-foreground dark:text-accent-foreground">
                                                    {category.name}
                                                </div>

                                                <div className="text-right text-primary dark:text-foreground font-semibold">
                                                    {category.count}
                                                    <span className="text-sm font-extralight italic text-foreground dark:text-accent-foreground"> Posts</span>
                                                </div>
                                            </div>

                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <TopTags />
                    </div>
                    <div className="mt-10 lg:col-span-2 bg-neutral-100 dark:bg-neutral-900/70 rounded-2xl p-4 ">
                        <PopulerPosted />
                    </div>
                </div>
            </section>
        </main>
    )
}