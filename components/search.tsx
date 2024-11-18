"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // para controlar la navegación de forma programática
import Post from "@/interfaces/post";

type Props = {
  posts: Post[];
};

export default function Buscador({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const router = useRouter();
  
    
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const results = posts.filter((post) =>
        post.fields.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredPosts(results);
    } else {
      setFilteredPosts([]);
    }
  };

  // Función para manejar la selección de un post
  const handleSelectPost = (slug: string) => {
    setSearchTerm(""); // Limpiamos el término de búsqueda
    setFilteredPosts([]); // Ocultamos los resultados
    router.push(`/entradas/${slug}`); // Navegamos al post seleccionado
  };

  return (
    <div className="relative h-full w-full max-w-md mx-auto rounded-2xl">
    
      <div className="flex items-center space-x-2  px-3 py-2 shadow-lg border  bg-slate-100 dark:bg-slate-300 rounded-2xl">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar publicaciones..."
          className="flex-1 bg-slate-100 dark:bg-slate-300 border-none focus:outline-none text-gray-800 text-sm "
        />
      </div>

      {/* Resultados de Búsqueda */}
      <AnimatePresence>
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="absolute top-full mt-2 w-full bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl shadow-lg overflow-hidden z-50"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.fields.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0., delay: index * 0.1 }}
                className="p-4 hover:bg-gray-100 dark:hover:bg-slate-600 transition-colors cursor-pointer"
                onClick={() => handleSelectPost(post.fields.slug)}
              >
                <div>
                  <h2 className="text-base font-semibold text-gray-800 dark:text-slate-200">
                    {post.fields.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {post.fields.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
