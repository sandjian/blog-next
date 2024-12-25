"use client";
import React from "react";
import { CalendarDaysIcon, HandHeartIcon } from "lucide-react";
import { AnimatedSubscribeButtonDemo } from "./ui/animated-subscribe-button";
import { BackgroundBeams } from "./ui/background-beams";


export function Newsletter() {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl py-12 sm:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800">
      <BackgroundBeams />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg" >
            <h2 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-white font-sans font-bold">
              ¡Mantente al día con nosotros!
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Recibe cada semana las novedades más destacadas, tips de
              tecnología y contenido exclusivo para impulsar tus proyectos.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only text-slate-500">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Ingresa tu email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-2xl border-0 bg-slate-200 px-3.5 py-2 text-slate-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6"
              />
              <AnimatedSubscribeButtonDemo />
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-orange-500"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-200">
                Artículos Semanales
              </dt>
              <dd className="mt-2 text-base/7 text-gray-200">
                Inspírate con contenido fresco cada semana: tutoriales, análisis y
                tendencias para mantenerte a la vanguardia.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-2xl bg-white p-2 ring-1 ring-white/10">
                <HandHeartIcon
                  aria-hidden="true"
                  className="size-6 text-orange-500"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-200">
                Cero Spam
              </dt>
              <dd className="mt-2 text-base/7 text-gray-200">
                Respetamos tu bandeja de entrada: solo te enviaremos información
                valiosa y nunca compartiremos tus datos con terceros.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
