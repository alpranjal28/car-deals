import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  vehicle: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  };
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
