
import PublicacionesCards from "@/components/publicaciones-cards";
import { WobbleCard } from "@/components/ui/wobble-card";
import Post from "@/interfaces/post";
import { client } from "@/lib/client";
import { Metadata } from "next/types";

export const dynamic = "auto",
  fetchCache = "auto",
  revalidate = 10;

export const metadata: Metadata = {
  title: "Publicaciones del blog",
  description: "Estas son las publicaciones del blog",
};

// Función para convertir la entrada a tipo Post
function mapEntryToPost(entry: any): Post | null {
  const { fields } = entry;
  if (
    fields.title &&
    fields.slug &&
    fields.description &&
    fields.image?.fields?.file?.url
  ) {
    return {
      sys: {
        id: entry.sys.id,
        createdAt: entry.sys.createdAt,
      },
      fields: {
        title: fields.title,
        slug: fields.slug,
        body: fields.body,
        description: fields.description,
        tags: fields.tags,
        image: fields.image,
      },
    };
  }
  return null; // Devuelve null si faltan campos necesarios
}

export default async function Entradas() {
  const response = await client.getEntries({ content_type: "blog" });

  const posts: Post[] = response.items
    .map(mapEntryToPost)
    .filter((post): post is Post => post !== null);

  return (
    <section>
      {/* Encabezado */}
      <div className="grid grid-cols-1 p-2 pb-6 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-br from-violet-900 via-emerald-700 to-black min-h-[300px] relative rounded-2xl shadow-lg">
          <div className="relative z-10 max-w-xs text-white">
            <h2 className="text-xl lg:text-3xl font-semibold">
              Mis Publicaciones
            </h2>
            <p className="mt-4">
              Explora nuestros artículos y descubre información relevante.
            </p>
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

