import HeroCarousel from "@/components/hero-carousel";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BorderBeam } from "@/components/ui/border-beam";
import { CardDemo } from "@/components/ui/effect-card";
import AnimacionLottie from "@/components/ui/lottie-component";
import Meteors from "@/components/ui/meteors";
import { WobbleCard } from "@/components/ui/wobble-card";
import Post from "@/interfaces/post";
import { client } from "@/lib/client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default async function Home() {
  const response = await client.getEntries({
    content_type: "blog",
  });

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const posts: Post[] = response.items ?? [];
  const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
    { icon: FaLinkedinIn, href: "https://linkedin.com" },
  ];



  return (
    <section className="px-4 pb-4 ">
      <div className="grid grid-cols-1 p-2 pb-6 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        {/* Tarjeta de Publicaciones */}
        <WobbleCard containerClassName="  col-span-1 lg:col-span-3 h-full  min-h-[400px] lg:min-h-[300px] relative rounded-2xl shadow-lg bg-gradient-to-br from-violet-900 via-emerald-700 to-black">
          <div className="relative flex items-center justify-between h-full">
            <div className="z-10 max-w-xs">
              <h2 className="text-left text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Nuestras Publicaciones
              </h2>
              <p className="mt-4 text-left text-base text-gray-100 dark:text-gray-200">
                Explora artículos cuidadosamente seleccionados sobre temas de tecnología, innovación y desarrollo. Nuestro equipo crea contenido de valor para mantenerte al día en el cambiante mundo digital.
              </p>
            </div>
            {/* Lottie Animation */}
            <div className="hidden filter brightness-75 md:block absolute left-1/2 top-1/3 transform -translate-y-1/4 lg:-translate-y-1/3 w-[38rem] lg:-right-44 lg:top-1/3 lg:w-[49rem]">
              <AnimacionLottie />
            </div>
          </div>
        </WobbleCard>

        {/* Tarjeta de Categorías */}
        <WobbleCard containerClassName="col-span-1 row-span-1 min-h-[400px] bg-gradient-to-br from-purple-400 via-purple-600 to-blue-600 rounded-2xl shadow-lg dark:bg-gradient-to-br from-emerald-900 via-emerald-700 to-emerald-950">
          <h2 className="text-left text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Explora por Categorías
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-gray-200">
            Encuentra contenido organizado por categorías y profundiza en los temas que te interesan. Desde desarrollo hasta creatividad, tenemos algo para todos.
          </p>
          <div className="flex flex-row items-center justify-start w-full">

            <CardDemo/>
          </div>

          
        </WobbleCard>

        {/* Tarjeta de Contacto */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-1  min-h-[300px] rounded-2xl shadow-lg bg-gradient-to-br from-emerald-700 via-emerald-950 to-black">
          <div className="max-w-sm">
            <div className="flex flex-row items-center justify-start mb-4 w-full">
              <AnimatedTooltip items={people} />
            </div>
            <h2 className="text-left text-3xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Contacto
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-gray-100 dark:text-gray-200">
              ¿Tienes alguna consulta o sugerencia? ¡Estamos aquí para escucharte! Conéctate con nosotros y comparte tus ideas.
            </p>
            
          </div>
        </WobbleCard>

        {/* Tarjeta de Redes Sociales */}
        <WobbleCard containerClassName="col-span-1 lg:col-span-1  min-h-[300px] rounded-2xl shadow-lg bg-gradient-to-br from-emerald-950 via-zinc-950 to-black">
          <div className="max-w-sm">
            <h2 className="text-left text-3xl font-semibold tracking-[-0.015em] text-white">
              Conéctate con Nosotros
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base text-gray-100 dark:text-gray-200">
              Sigue nuestras redes sociales para obtener las últimas noticias y actualizaciones. ¡Únete a nuestra comunidad!
            </p>
            <Meteors number={200} />
            <div className="flex space-x-4 pt-6">
            {socialLinks.map((social, index) => (
              <Link href={social.href} key={index} className="hover:text-indigo-500 transition-colors" target="_blank">
                <social.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
          </div>
        </WobbleCard>
      </div>

      {/* Título y párrafo con animación CSS */}
      <div className="flex flex-col items-center text-center my-10 mx-auto max-w-2xl fade-in-up">
        <h3 className="text-3xl font-extrabold text-white mb-4">
          Últimas Publicaciones
        </h3>
        <p className="text-gray-300 text-lg">
          Mantente informado con nuestros artículos más recientes. Desde tutoriales hasta análisis en profundidad, aquí encontrarás el contenido que necesitas para expandir tus conocimientos y habilidades.
        </p>
      </div>
      
      <div className="relative h-full rounded-xl max-w-7xl mx-auto w-full">
        <HeroCarousel posts={posts} />
        <BorderBeam/>
      </div>
    </section>
  );
}
