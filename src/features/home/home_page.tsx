"use client";
import { useState } from "react";

import { IconMenu } from "@/src/shared/icons";
import { SideBarDictionary } from "@/src/components/sidebar/sidebar_dictionary";

export function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full h-screen bg-linear-to-br from-gray-50 to-white">
      <div className="flex flex-col max-w-6xl p-6 w-full h-full mx-auto">
        {/* Header */}
        <div className="flex w-full items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Traductor de código binario</h1>
            <h3 className="text-gray-500">
              Escribe binario y mira el texto al instante
            </h3>
          </div>

          <IconMenu
            width={40}
            height={40}
            className="cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* Contenedor central */}
        <div className="flex-1 flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-10 w-full h-full">
            {/* Cuadro izquierdo */}
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Código Binario
              </h2>

              <textarea
                placeholder="Escribe aquí el código binario..."
                className="flex-1 resize-none outline-none bg-gray-50 rounded-xl p-4 font-mono text-sm border border-gray-200 focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>

            {/* Cuadro derecho */}
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Traducción
              </h2>

              <div className="flex-1 bg-gray-50 rounded-xl p-4 border border-gray-200 text-lg">
                Aquí aparecerá el texto traducido...
              </div>
            </div>
          </div>
        </div>
      </div>
      <SideBarDictionary isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
