// app/authors/[slug]/page.tsx
import { Suspense } from "react";
import { getArticlesByAuthorName } from "@/lib/api";
import HorizontalCard from "@/components/Cards/HorizontalCard";
import SkeletonHorizontalCard from "@/components/Cards/SkeletonHorizontalCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

interface Params {
  params: {
    slug: string;
  };
}

export default async function AuthorDetail({ params }: Params) {
  const { slug } = params;
  const authorName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const authorArticles = await getArticlesByAuthorName(authorName, 10);
  const author = authorArticles.length > 0 ? authorArticles[0].author : null;

  return (
    <main className="h-full w-full pb-10">
      <div className="w-full p-4">
        <Suspense fallback={<SkeletonAuthorProfile />}>
          <div className="container mx-auto w-full max-w-6xl">
            <div className="grid rounded-2xl container p-8 grid-cols-1 gap-6 justify-center items-center mx-auto lg:grid-cols-2 dark:bg-neutral-800 bg-neutral-200">
              <div className="flex items-center md:justify-start justify-center">
                {author?.profilePicture?.url ? (
                  <Image
                    src={author.profilePicture.url}
                    alt={`${author.name} profile`}
                    width={800}
                    height={800}
                    className="object-cover w-full h-80 md:h-[25rem] rounded-2xl"
                  />
                ) : (
                  <p className="text-muted-foreground">No profile picture available</p>
                )}
              </div>
              <div className="flex gap-10 flex-col">
                <div className="flex gap-4 flex-col">
                  <div>
                    <Badge variant="outline" className="text-primary-foreground bg-primary dark:border-primary">
                      About Author
                    </Badge>
                  </div>
                  <div className="flex gap-2 flex-col">
                    <h2 className="text-3xl lg:text-5xl max-w-xl text-left font-semibold text-foreground">
                      Hi! I am {author?.name || authorName}
                    </h2>
                    <p className="text-sm text-foreground max-w-xl text-left mt-3">
                      {author?.description || "No description available for this author."}
                    </p>
                    <div className="flex justify-start items-center max-w-sm gap-2">
                      {author?.socialLinks?.google && (
                        <Button variant="outline" aria-label="Google profile" size="icon" asChild>
                          <a href={author.socialLinks.google} target="_blank" rel="noopener noreferrer">
                            <FaGoogle className="text-[#DB4437] dark:text-accent" size={24} aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                      {author?.socialLinks?.facebook && (
                        <Button variant="outline" aria-label="Facebook profile" size="icon" asChild>
                          <a href={author.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-[#1877f2] dark:text-accent" size={24} aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                      {author?.socialLinks?.twitter && (
                        <Button variant="outline" aria-label="Twitter profile" size="icon" asChild>
                          <a href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-[#14171a] dark:text-accent" size={24} aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                      {author?.socialLinks?.instagram && (
                        <Button variant="outline" aria-label="Instagram profile" size="icon" asChild>
                          <a href={author.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-black dark:text-accent w-full" size={24} aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                      {author?.socialLinks?.github && (
                        <Button variant="outline" aria-label="GitHub profile" size="icon" asChild>
                          <a href={author.socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-black dark:text-accent" size={24} aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>

        <section className="w-full mx-auto pt-8 max-w-6xl">
          <div className="mt-20 mb-10">
            <h2 className="text-3xl font-bold text-foreground relative mb-8">
              <span className="bg-primary mr-2 px-2 py-3 rounded-xl text-primary-foreground">Read</span>
              My Posts
            </h2>
          </div>

          <Suspense
            fallback={
              <div className="grid gap-y-10 sm:gap-y-6 md:gap-y-12 lg:gap-y-2">
                {[...Array(6)].map((_, i) => (
                  <SkeletonHorizontalCard key={i} />
                ))}
              </div>
            }
          >
            <div className="grid gap-y-10 sm:gap-y-6 md:gap-y-12 lg:gap-y-2">
              {authorArticles.length > 0 ? (
                authorArticles.map((article) => (
                  <HorizontalCard key={article.sys.id} article={article} />
                ))
              ) : (
                <p className="text-muted-foreground col-span-full text-center">No articles found for this author.</p>
              )}
            </div>
          </Suspense>
        </section>
      </div>
    </main>
  );
}

// Skeleton para el perfil del autor
function SkeletonAuthorProfile() {
  return (
    <div className="container mx-auto w-full max-w-6xl animate-pulse">
      <div className="grid rounded-2xl container p-8 grid-cols-1 gap-6 justify-center items-center mx-auto lg:grid-cols-2 dark:bg-neutral-800 bg-neutral-200">
        <div className="flex items-center md:justify-start justify-center">
          <div className="w-full h-80 md:h-[25rem] bg-gray-300 dark:bg-gray-700 rounded-2xl"></div>
        </div>
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="flex gap-2 flex-col">
              <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mt-3"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mt-2"></div>
              <div className="flex justify-start items-center max-w-sm gap-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}