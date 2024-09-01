"use client";

import { classNames } from "@/helpers/classNames";
import { Tab } from "@headlessui/react";

const categories = ["Voor Leidenaren", "Voor bedrijven"];

export default function TariffTable() {
  return (
    <div id="tariffTable" className="bg-gray-950 w-full h-full pb-80 md:pb-20 lg:pb-0">
      <div className="mx-auto container max-w-7xl mt-8 md:md-0 py-8 px-4 sm:px-0 md:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="uppercase text-2xl md:text-3xl font-bold text-center text-gray-200 flex flex-col sm:flex-row justify-center gap-1">
            Met welke eenden<span className="ml-1">ga jij winnen?</span>
          </h2>
          <Tab.Group>
            <Tab.List className="flex justify-center gap-4 mt-4 md:mt-6 lg:mt-16">
              {categories.map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "h-[49px] w-[170px] bg-[#1d202a] font-secondary text-lg leading-5 text-gray-300",
                      !!selected &&
                        "border-b-[3px] border-b-yellow-500 text-lg outline-none"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                {/* Individual */}
                <stripe-pricing-table
                  pricing-table-id="prctbl_1PuCJdF1mJp5bVOXWpuFIuck"
                  publishable-key="pk_test_51PNVP3F1mJp5bVOXIcTp15qjlaWNFS3mquTdWGrSUkFXzqckRj0pVAiDIW5BFaGx36y60CSc0UfyTujMUI3uFNXR00bsc8EW9u"
                ></stripe-pricing-table>
              </Tab.Panel>
              <Tab.Panel>
                {/* Company */}
                <stripe-pricing-table
                  pricing-table-id="prctbl_1PuChMF1mJp5bVOX0Uxvcsdx"
                  publishable-key="pk_test_51PNVP3F1mJp5bVOXIcTp15qjlaWNFS3mquTdWGrSUkFXzqckRj0pVAiDIW5BFaGx36y60CSc0UfyTujMUI3uFNXR00bsc8EW9u"
                ></stripe-pricing-table>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
    </div>
  );
}
