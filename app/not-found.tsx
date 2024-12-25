export default function NotFound() {
    return (
      
        <main className="grid min-h-full items-center  px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-4xl font-semibold text-orange-600">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-slate-300 sm:text-7xl">
              Pagina no encontrada
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
              Lo sentimos, no pudimos encontrar la pagina que estas buscando
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-2xl bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Regrasar a Lobby
              </a>
              <a href="#" className="text-sm font-semibold text-orange-600 hover:text-orange-500">
                Contactar al soporte <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
    )
  }
  