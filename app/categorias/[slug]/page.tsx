import PublicacionesCards from "@/components/publicaciones-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import Post from "@/interfaces/post";
import { client } from "@/lib/client";
import { Metadata } from "next/types";

type Props = {
  params: {
    slug: string;
  };
};

export const dynamic = "auto",
  fetchCache = "auto",
  revalidate = 10;

export default async function EntradasCategoria({ params }: Props) {
  const { slug } = params;

  const response = await client.getEntries({
    content_type: "blog",
    "fields.tags": slug,
  });

  const posts: Post[] = response.items;

  return (
    <section className="my-8 px-2 lg:px-16">
      <div className="grid grid-cols-2">
        <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 h-full bg-gradient-to-br from-violet-900 via-emerald-700 to-black min-h-[200px] lg:min-h-[300px] relative"
      >


        {/* Contenido de la tarjeta */}
        <div className="relative z-10 max-w-xs">
          <h1 className="text-left text-balance text-xl md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </h1>
          
        </div>
        </WobbleCard>

      </div>
      {/* Publicaciones */}
      <div className="flex justify-center max-w-7xl mx-auto w-full">
        <PublicacionesCards posts={posts} />
        
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  return {
    title: slug.charAt(0).toUpperCase() + slug.slice(1),
    description: "Entradas de la categoría " + slug,
  };
}