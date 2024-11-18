import { Metadata } from "next";
import { client } from "@/lib/client";
import Post from "@/interfaces/post";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { CalendarIcon } from "lucide-react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await client.getEntries<Post>({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  const post = response.items[0];

  return {
    title: post.fields.title,
    description: post.fields.description || "",
  };
}

export default async function PostPage({ params }: Props) {
  const response = await client.getEntries<Post>({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  const post = response.items[0];

  if (!post) {
    return <p>Publicación no encontrada</p>;
  }

  return (
    <section className="my-8 px-4 lg:px-16 max-w-3xl mx-auto ">
      <Link href="/entradas">
        <button className="mb-6 px-4 py-2 text-primary bg-gradient-to-t from-blue-950 to-slate-700 rounded-2xl hover:bg-zinc-400  transition duration-150 ease-in-out">
          ← Regresar
        </button>
      </Link>

      <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-200">{post.fields.title}</h1>

      <div className="flex items-center text-sm text-slate-500 mb-6">
        <CalendarIcon className="h-5 w-5 mr-2" />
        {new Date(post.sys.createdAt).toLocaleDateString()}
      </div>

      {post.fields.image && (
        <div className="relative w-full h-64 mb-8 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
          <Image
            src={`https:${post.fields.image.fields.file.url}`}
            alt={post.fields.image.fields.title}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      )}

      <div className="prose prose-lg  mx-auto prose-invert">
        {/* Renderiza el contenido Rich Text del cuerpo de la publicación */}
        {documentToReactComponents(post.fields.body)}
      </div>
    </section>
  );
}
