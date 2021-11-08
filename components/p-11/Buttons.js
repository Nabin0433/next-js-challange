export function ButtonOutline({ text }) {
  return (
    <button className="px-8 py-2 border rounded-lg hover:bg-[#0500FF] hover:text-white active:scale-90 border-black">
      {text}
    </button>
  );
}
export function IconFilledButton({ text, icon }) {
  return (
    <button
      className={`flex items-center space-x-1 bg-[#0500FF] text-white p-1 border rounded-lg hover:bg-[#3633e7] hover:text-white active:scale-90 border-black`}
    >
      {icon}
      <p className="text-md">{text}</p>
    </button>
  );
}
export function FilledButton({ text }) {
  return (
    <button
      className={`flex items-center space-x-1 bg-[#0500FF] text-white px-3 py-1 border rounded-lg hover:bg-[#3633e7] hover:text-white active:scale-90 border-black`}
    >
      <p className="text-lg">{text}</p>
    </button>
  );
}
