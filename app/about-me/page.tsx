import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto p-6 lg:p-12">
      {/* Título de la página */}
      <h1 className="text-4xl font-extrabold text-white text-center mb-6">
        About Me
      </h1>

      {/* Contenedor de la sección de perfil */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Imagen de perfil */}
        <div className="w-40 h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/about.png" // Cambia la ruta de la imagen
            alt="Profile picture"
            width={600}
            height={300}
            className=""
          />
        </div>

        {/* Descripción del perfil */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-semibold text-white">
            ¡Hola! Soy Alex Johnson
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Soy un desarrollador de software apasionado por la tecnología y el
            diseño de experiencias digitales impactantes. Durante los últimos 5
            años, he trabajado en proyectos de desarrollo web y aplicaciones
            móviles, explorando desde la ingeniería de software hasta la
            experiencia del usuario. Me encanta crear soluciones innovadoras y
            enfrentar desafíos complejos.
          </p>
          <p className="mt-4 text-lg :text-gray-300">
            Además de programar, disfruto compartir mi conocimiento a través de
            artículos técnicos y charlas. Creo en el poder de la comunidad y me
            esfuerzo por inspirar a otros desarrolladores a alcanzar su máximo
            potencial.
          </p>
          <p className="mt-4 text-lg ttext-gray-300">
            Cuando no estoy trabajando, puedes encontrarme explorando nuevos
            cafés, leyendo libros de ciencia ficción o viajando en busca de
            nuevas aventuras.
          </p>

          {/* Enlaces a redes sociales */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <a href="https://twitter.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl text-gray-500 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition" />
            </a>
            <a href="https://linkedin.com/in/alexjohnson" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500 transition" />
            </a>
            <a href="https://github.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition" />
            </a>
            <a href="https://instagram.com/alexjohnson" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl text-gray-500 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
