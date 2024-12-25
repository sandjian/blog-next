"use client"

import { AnimatedTestimonialsDemo } from "@/components/ui/animated-testimonials";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function AboutMe() {
  const words = `Un blog, tres mentes: somos un equipo de entusiastas de la tecnología
que disfruta de compartir experiencias, reflexiones y proyectos.
Nuestro objetivo es unir conocimiento, inspirar curiosidad y motivar el aprendizaje.
¡Conoce nuestras historias y únete a la conversación!`;

  // Variantes para animación de contenedor (título + subtítulo)
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  // Variantes para elementos hijos (título y subtítulo)
  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Variantes para “tarjetas” o secciones (Testimonios, etc.)
  const cardVariants = {
    offscreen: { opacity: 0, x: 50 },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6 px-6">
      {/* Encabezado principal con fondo */}
      <div className="relative isolate z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl overflow-hidden">
        <BackgroundBeams />

        {/* Contenedor animado: título y subtítulo */}
        <motion.div
          className="z-50 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-50"
            variants={childVariants}
          >
            ¡Descubre Quiénes Somos!
          </motion.h1>

          <motion.p
            className="max-w-7xl text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
            variants={childVariants}
          >
            Tres apasionados de la tecnología, un mismo objetivo:
            <br className="hidden md:block" />
            compartir ideas y crecer juntos a través de cada publicación.
          </motion.p>
        </motion.div>
      </div>

      {/* Contenido principal: Texto generado + Testimonios */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center rounded-2xl max-w-7xl mx-auto gap-8"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex-1 mx-auto text-center lg:text-center p-2">
          <div className="max-w-2xl">
            <TextGenerateEffect words={words} />
          </div>

          <div className="flex justify-center lg:justify-center gap-4 pt-12">
            <a
              href="https://twitter.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-3xl text-gray-500 hover:text-white dark:text-gray-300 dark:hover:text-blue-400 transition" />
            </a>
            <a
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl text-gray-500 hover:text-white dark:text-gray-300 dark:hover:text-blue-500 transition" />
            </a>
            <a
              href="https://github.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl text-gray-500 hover:text-white dark:text-gray-300 dark:hover:text-white transition" />
            </a>
            <a
              href="https://instagram.com/alexjohnson"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-gray-500 hover:text-white dark:text-gray-300 dark:hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        <AnimatedTestimonialsDemo />
      </motion.div>
    </section>
  );
}
