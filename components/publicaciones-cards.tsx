"use client";

import Post from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";
import { BorderBeam } from "./ui/border-beam";

type Props = {
  posts: Post[];
};

export default function PublicacionesCards({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {posts.map((post, index) => (
          <div
          key={index}
            className="relative flex flex-col rounded-2xl p-2 bg-gradient-to-br from-emerald-900 via-slate-950 to-slate-900 shadow-md  overflow-hidden w-full max-w-md "
          >
            <BorderBeam/>
            {/* Imagen */}
            <div className="relative w-full h-48">
              <Link href={`/entradas/${post.fields.slug}`}>
                {post.fields.image ? (
                  <Image
                    src={`https:${post.fields.image.fields.file.url}`}
                    alt={post.fields.image.fields.title || "Imagen de la publicación"}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 rounded-2xl"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500">Sin imagen</span>
                  </div>
                )}
              </Link>
            </div>
          

            {/* Contenido */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-200">
                {post.fields.title}
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                {post.fields.description || "Descripción no disponible"}
              </p>
              <Link
                href={`/entradas/${post.fields.slug}`}
                className="text-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 mt-4 inline-block"
              >
                Leer más →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
