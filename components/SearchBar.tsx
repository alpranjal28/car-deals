"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    type="submit"
    className={`searchbar__button -ml-3 z-10 ${otherClasses}`}
  >
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({setManufacturer, setModel}:SearchBarProps) => {

  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      searchManufacturer === ""
      // || model === ""
    ) {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          alt="car model icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={searchModel}
          className="searchbar__input pl-9"
          onChange={(e) => setSearchModel(e.target.value)}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
