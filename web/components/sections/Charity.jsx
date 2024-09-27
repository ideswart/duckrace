const charity = {
  title: "Hier doen we het voor",
  par1: "125 nieuwe kinderfietsen voor KDC De Walnoot",
  par2: "Kinderdagcentrum De Walnoot in Leiden Zuid West is er voor kinderen van 0 tot 18 jaar die (nog) niet toe zijn aan een vorm van	onderwijs. De kinderen die er komen hebben een ontwikkelachterstand of een verstandelijke en/of meervoudige beperking.",
  par3: "De kinderen die bij De Walnoot komen, kunnen door hun beperking (nog) niet naar school. Bij De Walnoot krijgen ze spelenderwijs van hun begeleiders, in samenwerking met bijvoorbeeld logopedie of fysiotherapie, de prikkels om te leren en te groeien. De kinderen ontwikkelen zich op hun eigen manier en in hun eigen tempo. En worden, afhankelijk van hun ontwikkeling, voorbereid op een eventuele overstap naar (speciaal) onderwijs.",
  par4: "De kinderfietsen van KDC De Walnoot zijn nodig toe aan vervanging. Alle opbrengsten van de EENDENRACE LEIDEN worden gebruikt om 125 nieuwe kinderfietsen aan te schaffen.",
};

export default function Charity() {
  return (
    <div className="bg-orange-100 w-full h-full flex items-center">
      <div className="container max-w-7xl mx-auto my-20 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-4 md:p-8 lg:p-12">
          <div className="w-full md:w-1/2 place-items-center justify-center">
            <img
              className="content-fit rounded-md"
              src="/charity.webp"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 md:w-1/2">
            <h2 className="uppercase text-2xl md:text-3xl font-bold text-center md:text-left">
              {charity.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-950 font-bold tracking-wide">
              {charity.par1}
            </p>
            <p className="text-sm md:text-md text-gray-950">{charity.par2}</p>
            <p className="text-sm md:text-md text-gray-950">{charity.par3}</p>
            <p className="text-sm md:text-md text-gray-950">{charity.par4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
