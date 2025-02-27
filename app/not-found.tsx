import Link from "next/link";

export default function NotFound() {
    return (
      
        <section className="grid min-h-full items-center mx-4 px-6 py-24 sm:py-24 lg:px-8 bg-neutral-200 dark:bg-neutral-800 max-w-6xl m-auto rounded-2xl mb-16">
          <div className="text-center">
            <p className=" text-5xl font-semibold text-accent ">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
              Pagina no encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-foreground sm:text-xl/8">
              Lo sentimos, no pudimos encontrar la pagina que estas buscando
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/"
                className="rounded-2xl bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Regrasar a Lobby
              </Link>
              <a href="#" className="text-sm font-semibold text-accent hover:text-primary">
                Contactar al soporte <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </section>
    )
  }
  