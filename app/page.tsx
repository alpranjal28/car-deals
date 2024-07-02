"use client";
import { useEffect, useState } from "react";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // searchStates
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filterStates
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2024);

  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    // fetch cars
    try {
      const data = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        fuel: fuel || "",
        year: year || 2024,
        limit: limit || 10,
      });
      setAllCars(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className=" overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} 
            setFilter={setFuel}
            />
            <CustomFilter title="year" options={yearsOfProduction} 
            setFilter={setYear}
            
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} vehicle={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                src={"/loader.svg"}
                width={50}
                height={50}
                alt="loader"
                className="object-contain"
                />
              </div>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops! no results</h2>
            <p>{allCars}</p>
          </div>
        )}
      </div>
    </main>
  );
}
