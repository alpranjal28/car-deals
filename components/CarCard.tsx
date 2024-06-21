import { CarCardProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

const CarCard = ({ vehicle }: CarCardProps) => {
  const {
    city_mpg,
    make,
    model,
    year,
    class: vehicleClass,
    drive,
    transmission,
  } = vehicle;

  const carRent = calculateCarRent(city_mpg, year);
	console.log(carRent);
	

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;
