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
  },
  {
    component: <TariffTable />,
  },
  {
    component: <Prices />,
  },
  {
    component: <Timeline />,
  },
];

export default function Home() {
  return (
    <div>
      {sections.map((section, index) => (
        <section
          key={index}
          className={classNames(
            "flex items-center justify-center",
            section.overrideClass
          )}
        >
          {section.component}
        </section>
      ))}
    </div>
  );
}
