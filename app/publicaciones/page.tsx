import { getAllArticles } from "@/lib/api";
import Buscador from "@/components/search";
import ArticlesList from "@/components/articlesList"; 

export default async function Home() {
  const posts = await getAllArticles();

  return (
    <main className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6">
      <section className="w-full">
        <div className="mx-auto w-full container space-y-12 p-4">
          <div className="relative isolate z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl">
            
            <div className="space-y-2 z-50">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50">
              Explora, Aprende y Comparte
              </h1>
              <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Sumérgete en nuestros últimos artículos, descubre nuevas tendencias y mantente siempre a la vanguardia de la tecnología.
              </p>
              <div className="w-full max-w-3xl mx-auto pt-8">
                <Buscador posts={posts} />
              </div>
            </div>
          </div>

          <ArticlesList articles={posts} />
        </div>
      </section>
    </main>
  );
}
