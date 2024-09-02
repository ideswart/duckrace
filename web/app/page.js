import Charity from "@/components/sections/Charity";
import Hero from "@/components/sections/Hero";
import Info from "@/components/sections/Info";
import Prices from "@/components/sections/Prices";
import TariffTable from "@/components/sections/TariffTable";
import Timeline from "@/components/sections/Timeline";
import { classNames } from "@/helpers/classNames";

const sections = [
  { component: <Hero /> },
  { component: <Info /> },
  {
    component: <Charity />,
    overrideClass: "h-auto sm:h-screen overflow-y-auto",
  },
  {
    component: <TariffTable />,
    overrideClass: "h-auto sm:h-screen overflow-y-auto",
  },
  {
    component: <Prices />,
    overrideClass: "h-auto sm:h-screen overflow-y-auto",
  },
  {
    component: <Timeline />,
  },
];

export default function Home() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {sections.map((section, index) => (
          <section
            key={index}
            className={classNames(
              "h-screen snap-start flex items-center justify-center",
              section.overrideClass
            )}
          >
            {section.component}
          </section>
        ))}
      </div>
    </>
  );
}
