import { faDuck } from "@fortawesome/pro-duotone-svg-icons"; // Adjust this line based on the actual icon pack
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <header className="bg-slate-950 fixed top-0 w-full z-10">
      <div className="max-w-7xl container mx-auto">
        <div className="flex flex-row justify-between py-4 md:py-6 lg:py-8 px-4 text-gray-100 items-center">
          <div className="flex flex-row gap-4 items-center">
            <FontAwesomeIcon
              icon={faDuck}
              size="2xl"
              style={{
                "--fa-primary-color": "#ffcb11",
                "--fa-secondary-color": "#f63600",
                "--fa-secondary-opacity": "1",
              }}
            />
            <div className="uppercase flex flex-col text-xl font-bold tracking-tight leading-4 text-white/90">
              Eendenrace<span>Leiden 2025</span>
            </div>
          </div>
          <div className="flex flex-row gap-4">{/* Optional links here */}</div>
        </div>
      </div>
    </header>
  );
}
