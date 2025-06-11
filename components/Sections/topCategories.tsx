import { getCategoriesWithCount } from '@/lib/api';
import Link from 'next/link';

export default async function TopCategories() {
  const categories = await getCategoriesWithCount();
  const topCategories = categories.slice(0, 5);

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4">
      <div className="my-10">
        <h2 className="text-3xl font-bold text-foreground dark:text-accent-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-accent-foreground">Top 5</span>
          Categories
        </h2>
      </div>

      <div className="rounded-lg ">
        <div className="grid grid-cols-2 p-4">
          <div className="font-semibold text-foreground dark:text-accent-foreground">Category</div>
          <div className="font-semibold text-foreground dark:text-accent-foreground text-right">Posts</div>
        </div>

        <div className="">
          {topCategories.map((category) => (
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
      <Link href={"/categories"}>
        <div className="w-full mt-6 p-3 hover:bg-primary flex justify-center items-center rounded-full bg-accent transition-all duration-300 ease-in-out hover:-translate-y-2">
          <button className="text-primary-foreground dark:text-accent-foreground font-semibold">See more</button>
        </div>
      </Link>
    </section>
  );
}