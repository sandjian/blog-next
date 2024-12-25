import { getAllArticles, getArticle } from "@/lib/api"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"
import { draftMode } from "next/headers"
import Image from "next/image"
import { notFound } from "next/navigation"
import BackButton from "@/components/ui/back-button"

export async function generateStaticParams() {
  const allArticles = await getAllArticles()

  return allArticles.map((article) => ({
    slug: article.slug,
  }))
}

interface KnowledgeArticlePageProps {
  params: {
    slug: string
  }
}

export default async function KnowledgeArticlePage({
  params,
}: KnowledgeArticlePageProps) {
  const { isEnabled } = draftMode()
  const article = await getArticle(params.slug, isEnabled)

  if (!article) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center max-w-7xl p-24">
      <section className="w-full">
        {/* PRIMER DIV */}
        <div className="bg-slate-800/80 rounded-2xl p-6 pb-20 max-w-7xl container space-y-12 px-4 md:px-6">
        <div className="flex justify-start items-center">
            <BackButton/>
          </div>

          {/* Título y subtítulo */}
          <div className="space-y-4">
            <h1 className="text-neutral-200 text-4xl mt-6 font-bold tracking-tighter sm:text-5xl">
              {article.title}
            </h1>
            <p className="max-w-[900px] text-neutral-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              {article.sumary}
            </p>
          </div>
          
          
          {/* Contenido principal (imagen + texto) */}
          <div className="space-y-8 lg:space-y-10">
            {article.articleImage && (
              <Image
                alt="Article Image"
                className="aspect-video w-full overflow-hidden rounded-2xl object-cover"
                height={365}
                src={article.articleImage.url}
                width={650}
              />
            )}
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                {article.detail?.json && (
                  <div className="prose-invert text-neutral-400 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {documentToReactComponents(article.detail.json as Document)}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
