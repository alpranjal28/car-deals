"use client";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { SearchManufacturerProps } from "@/types";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  selected,
  setSelected,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-Manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              alt="car-logo"
              className="ml-4"
            />
          </ComboboxButton>
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volokswagon"
            displayValue={(selected: string) => selected}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions>
              {filteredManufacturers.map((item) => (
                <ComboboxOption
                  key={item}
                  value={item}
                  className={({
                    active,
                  }) => `relative search-manufacturer__option
                    ${active ? `bg-primary-blue text-white` : `text-gray-900`}`}
                  onClick={() => setSelected(item)}
                >
                  {item}
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
