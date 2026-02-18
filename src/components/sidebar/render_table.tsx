export const renderTable = (
  title: string,
  data: { char: string; bin: string }[]
) => {
  return (
    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
      <thead className="">
        <tr>
          <th className="px-3 py-2 border-b text-left">Carácter</th>
          <th className="px-3 py-2 border-b text-left">Binario</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="hover:bg-gray-50 transition"
          >
            <td className="px-3 py-2 border-b font-semibold">
              {item.char}
            </td>
            <td className="px-3 py-2 border-b font-mono text-blue-500">
              {item.bin}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
