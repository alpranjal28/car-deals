"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "@/components";

const SearchBar = () => {
  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  // 	e.preventDefault();
  // };

	const [manufacturer,setManufacturer]=useState("")
  const handleSearch = () => {};

  return (
    <form action="" className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer 
				manufacturer={manufacturer}
				setManufacturer={setManufacturer}
				/>
      </div>
    </form>
  );
};

export default SearchBar;
