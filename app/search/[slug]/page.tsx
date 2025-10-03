import { getAllArticles, getArticle } from "@/lib/api"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Document } from "@contentful/rich-text-types"
import { draftMode } from "next/headers"
import Image from "next/image"
import { notFound } from "next/navigation"
import TopAuthors from "@/components/Sections/topAuthor"
import TopCategories from "@/components/Sections/topCategories"
import InstagramFeed from "@/components/Sections/socialFeed"
import TopTags from "@/components/Sections/topTags"
import { Badge } from "@/components/ui/badge"
import { UserIcon } from "lucide-react"

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

    <div className="w-full "> 
      <div className="w-full max-w-7xl m-auto p-4 flex flex-col">
        
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-x-4  justify-center mx-auto max-w-7xl w-full px-4 py-5">

          <div className="transform-gpu col-span-2 py-14  bg-neutral-100 dark:bg-neutral-950/50  rounded-2xl">

            <div className="space-y-4 p-4">
              <div className="mb-2">
                <Badge className="text-accent-foreground bg-accent rounded-[7px] p-1.5">
                  {article.categoryName}
                </Badge>
              </div>
              <h1 className="text-foreground text-4xl mt-6 font-bold tracking-tighter sm:text-5xl">
                {article.title}
              </h1>
              <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                {article.sumary}
              </p>
            </div>


            <div className="space-y-8 lg:space-y-10 w-full p-6 ">
              <div className="flex items-center gap-x-2">
                <UserIcon className="w-5 h-5 text-accent" />

                {article.author.name || "Unknown Author"}

              </div>
              <div className="w-full rounded-2xl">

              {article.articleImage && (
                <Image
                  alt="Article Image"
                  className="aspect-video h-96 w-full overflow-hidden rounded-2xl object-cover"
                  height={500}
                  src={article.articleImage.url}
                  width={500}
                />
              )}
              </div>
              {article.tags && article.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-primary hover:bg-neutral-800 dark:hover:bg-accent text-primary-foreground cursor-pointer"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2">
                  {article.detail?.json && (
                    <div className="prose-invert text-foreground p-4 max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      {documentToReactComponents(article.detail.json as Document)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto flex flex-col gap-y-2">
            <div className=" bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
              <TopAuthors />
            </div>
            <div className=" bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
              <TopCategories />
            </div>
            <div className=" bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
              <InstagramFeed />
            </div>
            <div className=" bg-neutral-100 dark:bg-neutral-950/50 rounded-2xl">
              <TopTags />
            </div>
          </div>
        </div>
      </div>
    </div>






  )
}
