import Image from "next/image";
import LinkButton from "../elements/LinkButton";

const data = {
  title: "Eendenrace Leiden",
  description:
    "Op zaterdag 19 april 2025 vindt de eerste editie van de RT150 EENDENRACE plaats op het Rapenburg in Leiden.",
  date: "19 april 2025",
};

export default function Hero() {
  return (
    <div className="bg-gray-900 w-full h-full">
      <div className="relative isolate overflow-hidden pt-14 h-full">
        <Image
          src="/header.jpg"
          fill={true}
          alt="Header Image"
          className="absolute inset-0 -z-10 h-full w-full object-cover blur-sm opacity-80"
        />
        <div className="mx-auto container max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="font-bold uppercase text-yellow-400">
              {data.date}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl uppercase">
              {data.title}
            </h1>
            <p className="mt-6 text:lg md:text-xl px-2 leading-8 text-gray-100">
              {data.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkButton href="#tariffTable" label="Adopteer je eenden" />
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Het programma <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
