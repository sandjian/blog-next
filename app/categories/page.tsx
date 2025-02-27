import PopulerPosted from "@/components/Sections/populerPosted";
import TopTags from "@/components/Sections/topTags";
import { getCategoriesWithCount } from "@/lib/api";
import Link from "next/link";


export default async function CategoriesList() {

    const categories = await getCategoriesWithCount();
    return (
        <main className="w-full h-full p-4">
            <section className="w-full max-w-7xl mx-auto pt-8 pb-8">
                <div className="relative isolate z-20 bg-primary flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl">

                    <div className="space-y-2 z-50">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50">
                            Explora, Aprende y Comparte
                        </h1>
                        <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                            Sumérgete en nuestros últimos artículos, descubre nuevas tendencias y mantente siempre a la vanguardia de la tecnología.
                        </p>

                    </div>
                </div>
                <div className="w-full h-full max-w-7xl mx-auto  grid grid-cols-1 xl:grid-cols-3 gap-4">
                    <div className="col-span-2">

                        <div className="mt-20 mb-10">
                            <h2 className="text-3xl font-bold text-foreground relative mb-8">
                                <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">All</span>
                                Categories
                            </h2>
                        </div>

                        <div className=" rounded-lg ">
                            <div className="grid grid-cols-2 p-4 ">
                                <div className="font-semibold text-foreground">Category</div>
                                <div className="font-semibold text-foreground text-right">Posts</div>
                            </div>

                            <div className="">
                                {categories.map((category) => (
                                    <Link href={`/categories/${category.name}`} key={category.name}>
                                        <div

                                            className="grid grid-cols-2 p-4 px-6 max-w-4xl m-auto hover:border-2 hover:border-accent transition-colors bg-neutral-200 dark:bg-neutral-800 rounded-2xl mt-2"
                                        >
                                            <div className="text-sm text-foreground font-semibold">{category.name}</div>
                                            <div className="text-right text-primary dark:text-accent font-semibold">
                                                {category.count}
                                                <span className='text-sm font-extralight italic text-foreground'> Posts</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <TopTags />
                    </div>
                    <PopulerPosted />
                    <div className="col-span-2">


                    </div>
                </div>
            </section>
        </main>
    )
}