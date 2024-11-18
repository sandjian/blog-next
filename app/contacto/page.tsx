"use client";

import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-4">
        Contáctanos
      </h1>
      <p className="text-gray-300 mb-6">
        ¿Tienes alguna sugerencia o tema que te gustaría ver en nuestro blog? Déjanos tu mensaje aquí y nos pondremos en contacto contigo.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-1 w-full rounded-2xl py-2 px-4  shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-gray-800 border-gray-700 text-gray-200"
          />
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 w-full rounded-2xl py-2 px-4  shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-gray-800 border-gray-700 dark:text-gray-200"
          />
        </div>
        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-200">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="mt-1 w-full rounded-2xl py-2 px-4  shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-gray-800 border-gray-700 text-gray-200"
          ></textarea>
        </div>
        {/* Botón de envío */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-emerald-500 text-white py-2 px-4 rounded-2xl shadow-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
        >
          {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
        </button>
        {/* Mensajes de estado */}
        {status === "success" && <p className="text-green-500">¡Mensaje enviado con éxito!</p>}
        {status === "error" && <p className="text-red-500">Ocurrió un error. Por favor, intenta nuevamente.</p>}
      </form>
    </div>
  );
}
