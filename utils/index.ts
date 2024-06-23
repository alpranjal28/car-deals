export async function fetchCars() {
  const headers = {
    "x-api-key": "JY4TA1BQPy9eqz5wmbonNw==mGjReWARuL3hpBrS",
    "Content-Type": "application/json",
  };

  const resp = await fetch("https://api.api-ninjas.com/v1/cars?model=carrera", {
    method: "GET",
    headers: headers,
  });

  const data = await resp.json();

  return data;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day
  const mileageFactor = 0.1; // additional rate per mile driven
  const ageFactor = 0.05; // additional rate per year of vehicle

  // calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
