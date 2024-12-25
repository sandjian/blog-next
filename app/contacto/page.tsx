'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/contact-form';
import { Globe, Mail, HelpCircle } from 'lucide-react'; 
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        when: 'beforeChildren', 
        staggerChildren: 0.2    
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const infoContainer = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.2,
      },
    },
  };

  const infoItem = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center mx-auto gap-y-8 pb-6">
      <div className="mx-auto w-full container space-y-2">
        
        <div className="relative isolate z-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800 flex flex-col items-center justify-center space-y-4 text-center mx-auto w-full max-w-7xl h-[28rem] rounded-2xl overflow-hidden">
          <BackgroundBeams />

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
              ¡Queremos saber más de ti!
            </motion.h1>

            <motion.p
              className="max-w-7xl text-zinc-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
              variants={childVariants}
            >
              Estamos ansiosos por conocer tus ideas, inquietudes y proyectos.
              <br className="hidden md:block" />
              ¡Envíanos un mensaje y comencemos a hablar!
            </motion.p>
          </motion.div>
        </div>

        <div className="mx-auto mt-2 grid items-center lg:grid-cols-2 gap-6 lg:gap-16 max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <ContactForm />
          </motion.div>

          {/* Bloques de "Recursos", "Soporte", "FAQ" con animación escalonada */}
          <motion.div
            className="divide-y divide-gray-200 dark:divide-neutral-800"
            variants={infoContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
              <Globe className="shrink-0 size-6 mt-1.5 text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold text-neutral-200">Recursos en línea</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Encuentra artículos, tutoriales y guías para mejorar tus habilidades.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Explora el blog
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
              <Mail className="shrink-0 size-6 mt-1.5 text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold text-neutral-200">Soporte por Email</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  ¿Necesitas ayuda más personalizada? ¡Envíanos un correo y te responderemos!
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="mailto:example@example.com"
                >
                  Envíanos un mensaje
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-x-7 py-6" variants={infoItem}>
              <HelpCircle className="shrink-0 size-6 mt-1.5 text-neutral-200" />
              <div className="grow">
                <h3 className="font-semibold text-neutral-200">Preguntas Frecuentes</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                  Antes de contactarnos, revisa las preguntas más comunes.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-400 hover:text-gray-100 dark:text-neutral-400 dark:hover:text-neutral-200"
                  href="#"
                >
                  Ver FAQ
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
