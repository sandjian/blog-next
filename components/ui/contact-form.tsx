'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false)

  return (
    <form
      action="#"
      method="POST"
      className="mx-auto mt-16 max-w-7xl sm:mt-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-8"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-gray-300"
          >
            Nombre
          </label>
          <div className="mt-2.5">
            <input
              className="text-sm w-full px-3 py-1.5 border-1 block h-12 rounded-2xl  bg-white/50 text-slate-200 placeholder:text-slate-600 focus:outline-none"
              placeholder="Juan"
              id="first-name"
              name="first-name"
              type="text"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-semibold text-gray-300"
          >
            Apellido
          </label>
          <div className="mt-2.5">
            <input
              className="text-sm w-full px-3 py-1.5 border-1 block h-12 rounded-2xl  bg-white/50 text-slate-200 placeholder:text-slate-600 focus:outline-none"
              placeholder="Perez"
              id="last-name"
              name="last-name"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm/6 font-semibold text-gray-300"
          >
            Asunto
          </label>
          <div className="mt-2.5">
            <input
              className="text-sm w-full px-3 py-1.5 border-1 block h-12 rounded-2xl  bg-white/50 text-slate-200 placeholder:text-slate-600 focus:outline-none"
              placeholder="¿En qué puedo ayudarte?"
              id="subject"
              name="subject"
              type="text"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-300"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              className="text-sm w-full px-3 py-1.5 border-1 block h-12 rounded-2xl  bg-white/50 text-slate-200 placeholder:text-slate-600 focus:outline-none"
              placeholder="example@example.com"
              id="email"
              name="email"
              type="email"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-300"
          >
            Mensaje
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="text-sm w-full px-3 py-1.5 border-1 block rounded-2xl  bg-white/50 text-slate-200 placeholder:text-slate-600 focus:outline-none"
              placeholder="Cuéntame un poco más..."
            />
          </div>
        </div>
        <Field className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={`group flex w-8 flex-none cursor-pointer rounded-full p-px
              ${agreed ? 'bg-orange-500' : 'bg-gray-200'} 
               ring-1 ring-gray-900/5 transition-colors`}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={`size-4 transform rounded-full bg-white ring-1 shadow-xs
                ring-gray-900/5 transition duration-200 ease-in-out
                ${agreed ? 'translate-x-3.5' : 'translate-x-0'}`}
              />
            </Switch>
          </div>
          <Label className="text-sm/6 text-gray-300">
            Acepto la{' '}
            <a href="#" className="font-semibold text-orange-500">
              política de privacidad
            </a>
            .
          </Label>
        </Field>
      </div>
      <div className="mt-10">
        <button className="inline-flex h-16 w-full items-center justify-center rounded-2xl  bg-black-100 text-slate-400 hover:text-slate-100 transition-colors hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Enviar ahora
        </button>
      </div>
    </form>
  )
}
