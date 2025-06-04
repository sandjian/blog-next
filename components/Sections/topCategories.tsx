import { getCategoriesWithCount } from '@/lib/api';
import Link from 'next/link';

export default async function TopCategories() {
  const categories = await getCategoriesWithCount();
  const topCategories = categories.slice(0, 5); 

  return (
    <section className="w-full max-w-7xl mx-auto pt-8 px-4">
      <div className="mt-20 mb-10">
        <h2 className="text-3xl font-bold text-foreground relative mb-8">
          <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Top 5</span>
          Categories
        </h2>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 p-4">
          <div className="font-semibold text-foreground">Category</div>
          <div className="font-semibold text-foreground text-right">Posts</div>
        </div>

        <div className="">
          {topCategories.map((category) => (
            <Link href={`/categories/${category.name}`} key={category.name}>
              <div
                className="grid grid-cols-2 p-4 hover:border-2 hover:border-accent transition-colors bg-neutral-200 dark:transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]  rounded-2xl mt-3"
              >
                <div className="text-sm font-semibold text-foreground">{category.name}</div>
                <div className="text-right text-primary dark:text-foreground font-semibold">
                  {category.count}
                  <span className="text-sm font-extralight italic text-foreground"> Posts</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full mt-4 p-3 bg-primary flex justify-center items-center rounded-xl hover:bg-accent">
        <Link href={"/categories"}>
          <button className="text-primary-foreground font-semibold">See more</button>
        </Link>
      </div>
    </section>
  );
}