import { client } from "@/lib/client";
import Link from "next/link";
import Post from "@/interfaces/post"; // Importa tu modelo Post si está en una ubicación específica
import { WobbleCard } from "@/components/ui/wobble-card";

export default async function ListaCategorias() {
  // Obtener las publicaciones desde Contentful
  const categorias = await client.getEntries<Post>({
    content_type: "blog",
  });

  // Extraer los slugs de cada categoría para los enlaces y contar publicaciones por categoría
  const categoriasArray = categorias.items.map((post) => post.fields.tags || []);
  const categoriasFlat = categoriasArray.flat();

  // Contar el número de publicaciones en cada categoría
  const categoriasContadas = categoriasFlat.reduce((acc: { [key: string]: number }, categoria: string) => {
    acc[categoria] = (acc[categoria] || 0) + 1;
    return acc;
  }, {});
  
  // Crear una lista de categorías únicas
  const categoriasUnicas = Array.from(new Set(categoriasFlat));

  return (
    <div className="h-full p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 h-full z-index-0 bg-gradient-to-br from-violet-900 via-emerald-700 to-black lg:min-h-[300px] rounded-2xl relative  shadow-lg"
      >
        <div className="relative z-10 max-w-md">
          <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Explora nuestras categorías
          </h2>
          <p className="mt-4 text-left text-base lg:text-lg text-neutral-200">
            Encuentra contenido relevante y descubre temas interesantes en cada una de nuestras categorías.
          </p>
        </div>
      </WobbleCard>

      {/* Lista de categorías con contador */}
      <div className="col-span-1 lg:col-span-1 bg-slate-700 rounded-2xl p-6 shadow-lg">
        <ul className="space-y-3">
          {categoriasUnicas.map((categoria, index) => (
            <li key={index}>
              <Link
                href={`/categorias/${categoria}`}
                className="flex justify-between items-center text-white hover:underline hover:text-emerald-400"
              >
                <span className="block p-3 bg-slate-600 rounded-2xl shadow-md hover:bg-slate-500 transition">
                  {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                </span>
                <span className="ml-2 text-sm text-neutral-300">
                  {categoriasContadas[categoria]} {categoriasContadas[categoria] === 1 ? 'publicación' : 'publicaciones'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Descripción adicional */}
      <div className="col-span-1 bg-emerald-700 rounded-2xl p-6 shadow-lg text-white">
        <h2 className="text-lg font-semibold mb-2">¿Qué encontrarás aquí?</h2>
        <p>Explora las diferentes categorías para profundizar en los temas que te interesan. ¡Encuentra tu próxima lectura!</p>
      </div>
    </div>
  );
}
