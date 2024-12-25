"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";
import { Article } from "@/lib/api"; 

type Props = {
  posts: Article[];
};

export default function Buscador({ posts }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = debounce((term: string) => {
    setSearchTerm(term);
  }, 300);

  const filteredPosts = useMemo(() => {
    if (searchTerm.length === 0) {
      return [];
    }
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, posts]);

  const handleSelectPost = (slug: string) => {
    setSearchTerm(""); 
    router.push(`/publicaciones/${slug}`);
  };

  return (
    <div className="relative h-full w-full max-w-md mx-auto rounded-2xl">
      <div className="flex items-center space-x-2 px-3 py-2 shadow-lg border bg-slate-100 dark:bg-slate-300 rounded-2xl">
        <SearchIcon className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar publicaciones..."
          className="flex-1 bg-slate-100 dark:bg-slate-300 border-none focus:outline-none text-gray-800 text-sm"
        />
      </div>

      <AnimatePresence>
        {filteredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.8 }}
            className="absolute top-full mt-2 w-full bg-slate-200 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl shadow-lg overflow-hidden z-500"
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.sys.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors cursor-pointer z-50"
                onClick={() => handleSelectPost(post.slug)}
              >
                <div>
                  <h2 className="text-base font-semibold text-gray-800">
                    {post.title}
                  </h2>
                  {post.sumary && (
                    <p className="text-sm text-gray-600">
                      {post.sumary}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
