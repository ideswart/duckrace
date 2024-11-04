export default function LinkButton({ label, href }) {
  return (
    <a
      href={href}
      className="bg-yellow-300 px-3.5 py-2.5 md:px-7 md:py-5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-black/80 hover:text-yellow-300"
    >
      {label}
    </a>
  );
}
