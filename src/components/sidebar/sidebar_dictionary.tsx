"use client";

import { useEffect } from "react";
import { renderTable } from "./render_table";
import {
  characters,
  lettersUppercase,
  lettersLowercase,
  numbers,
} from "@/src/features/home/data/data_table_binary";
import { SideBarProps } from "@/src/types/props";
import { Iconletters, IconNumbers, IconSymbols } from "@/src/shared/icons";

export function SideBarDictionary({ isOpen, onClose }: SideBarProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 text-black transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-125 bg-white z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header fijo */}
        <div className="h-20 flex items-center px-6 border-b bg-white sticky top-0 z-10">
          <h2 className="text-xl font-bold">Diccionario binario</h2>
        </div>

        {/* Contenido scrolleable */}
        <div className="h-[calc(100vh-80px)] overflow-y-auto p-6 space-y-10">
          {/* Letras (dos columnas) */}
          <div>
            <div className="flex space-x-2">
              <Iconletters className="mt-0.5" />
              <h3 className="text-lg font-semibold mb-4">Letras</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="border rounded-xl p-4 shadow-sm">
                <h4 className="font-medium mb-2 text-gray-600 text-center">
                  Mayúsculas
                </h4>
                {renderTable("", lettersUppercase)}
              </div>

              <div className="border rounded-xl p-4 shadow-sm">
                <h4 className="font-medium mb-2 text-gray-600 text-center">
                  Minúsculas
                </h4>
                {renderTable("", lettersLowercase)}
              </div>
            </div>
          </div>

          {/* Números */}
          <div className="border rounded-xl p-4 shadow-sm">
            <div className="flex space-x-2">
              <IconNumbers className="mt-0.5" />
              <h3 className="text-lg font-semibold mb-4">Números</h3>
            </div>
            {renderTable("", numbers)}
          </div>

          {/* Símbolos */}
          <div className="border rounded-xl p-4 shadow-sm">
            <div className="flex space-x-2">
              <IconSymbols className="mt-0.5" />
              <h3 className="text-lg font-semibold mb-4">Simbolos</h3>
            </div>
            {renderTable("", characters)}
          </div>
        </div>
      </div>
    </>
  );
}
