"use client";

import { classNames } from "@/helpers/classNames";
import { Tab } from "@headlessui/react";

const categories = ["Voor Leidenaren", "Voor bedrijven"];

export default function TariffTable() {
  return (
    <div
      id="tariffTable"
      className="bg-gray-950 w-full h-full overflow-y-auto pb-40 md:pb-20 lg:pb-0"
    >
      <div className="container mx-auto max-w-7xl mt-8 md:mt-0 py-8 px-4 sm:px-4 md:px-8 lg:px-0 md:py-24">
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
                        "border-b-[3px] border-b-yellow-300 text-lg outline-none"
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
                  pricing-table-id="prctbl_1QIBJMF1mJp5bVOX6m4aCrKN"
                  publishable-key="pk_live_51PNVP3F1mJp5bVOXYp1MYkrbz9rqWoywHkCeCsCdWCB62dSmtJ10cupAtRZHQujzb84XiG7yZao3VnKQ9sxJHX0K00qh7hHyIA"
                ></stripe-pricing-table>
              </Tab.Panel>
              <Tab.Panel>
                {/* Company */}
                <stripe-pricing-table
                  pricing-table-id="prctbl_1QIBKGF1mJp5bVOXiaC6fbiR"
                  publishable-key="pk_live_51PNVP3F1mJp5bVOXYp1MYkrbz9rqWoywHkCeCsCdWCB62dSmtJ10cupAtRZHQujzb84XiG7yZao3VnKQ9sxJHX0K00qh7hHyIA"
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
