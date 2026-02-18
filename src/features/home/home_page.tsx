import { renderTable } from "@/src/components/sidebar/render_table";
import {
  characters,
  lettersUppercase,
  numbers,
} from "./data/data_table_binary";

export function HomePage() {
  return (
    <section className="w-full h-screen">
      <div className="flex flex-col max-w-6xl p-6 w-full h-full mx-auto">
        <div className="mb-6">
          <div>
            <h1 className="text-4xl font-bold">Traductor de código binario</h1>
            <h3 className="text-gray-400">Escribe binario y mira el texto al instante</h3>
          </div>
          <div></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {renderTable("🔤 Letras", lettersUppercase)}
          {renderTable("🔢 Números y Espacio", numbers)}
          {renderTable("✨ Símbolos", characters)}
        </div>
      </div>
    </section>
  );
}
