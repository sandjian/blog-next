"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  function handleClick() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/"); // Redirige a la página de inicio si no hay historial
    }
  }

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        flex items-center gap-2
        px-4 py-2
        rounded-xl
        bg-primary
        text-white
        hover:bg-accent
        transition-colors
        duration-300
      "
    >
      <ArrowLeft className="w-5 h-5" />
      <span>Volver</span>
    </motion.button>
  );
}