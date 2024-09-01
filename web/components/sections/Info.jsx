import LinkButton from "../elements/LinkButton";

const info = {
  title: "Adopteer je eenden",
  par1: "Kom op zaterdag 19 april 2025 naar het Rapenburg in Leiden en geniet van de eerste editie van de RT150 EENDENRACE. Er is muziek, entertainment voor de kinderen en de voldoende horeca om van te genieten tijdens de race.",
  par2: "Adopteer jouw eenden en steun ons goede doel én maak kans op	schitterende prijzen.",
  par3: "Een eend adopteren kan al vanaf € 10.",
};

export default function Info() {
  return (
    <div className="bg-slate-950 w-full h-full">
      <div className="container max-w-2xl mx-auto px-4 md:px-4 py-24 md:py-48">
        <div className="flex flex-col items-center gap-8 px-4">
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-center md:text-left text-gray-200">
            {info.title}
          </h2>
          <p className="text-gray-100 text-left">{info.par1}</p>
          <p className="text-gray-100 text-left">{info.par2}</p>
          <p className="text-gray-100 text-left font-extrabold tracking-wide mt-8">{info.par3}</p>
        </div>
        <div className="flex justify-end pb-12 md:pt-6 pr-4 mt-12">
          <LinkButton href="#tariffTable" label="Adopteer je eenden" />
        </div>
      </div>
    </div>
  );
}
