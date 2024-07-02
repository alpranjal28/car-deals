"use client";

import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ isNext, pageNumber, setLimit }: ShowMoreProps) => {
  
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  
  return (
    <div className="w-full flex justify-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyles="bg-primary-blue rounded-full text-white"
					handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
