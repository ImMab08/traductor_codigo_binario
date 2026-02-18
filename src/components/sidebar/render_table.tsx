import React from "react";

export const renderTable = (
  title: string,
  data: { char: string; bin: string }[],
) => (
  <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
    <h4 className="text-lg font-bold mb-3">{title}</h4>
    <table className="text-sm w-full">
      <thead>
        <tr className="text-left border-b border-white/10">
          <th className="pb-1">Carácter</th>
          <th className="pb-1">Binario</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="border-b border-white/5">
            <td className="py-1 font-semibold">{item.char}</td>
            <td className="py-1 font-mono text-blue-400">{item.bin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
