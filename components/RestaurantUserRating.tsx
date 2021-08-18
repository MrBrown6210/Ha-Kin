import { FunctionComponent, useState } from "react";
import { IRestaurant } from "../lib/api.interface";
import { fetcher } from "../lib/fetcher";
type Props = {
  restaurant: IRestaurant;
};

const RestaurantUserRating: FunctionComponent<Props> = (props) => {
  const [currentStars, setCurrentStars] = useState(props.restaurant.stars);

  const [hoverStars, setHoverStars] = useState<number | null>(0);

  const updateStars = (stars: number) => {};

  return (
    <div>
      <div className="flex flex-row-reverse">
        {[...Array(5)].map((_, i) => {
          return (
            <svg
              key={`${i}`}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-7 w-7 ${
                i < (hoverStars ? hoverStars : currentStars)
                  ? "text-yellow-300"
                  : "text-gray-500"
              }`}
              viewBox="-2 0 20 20"
              fill="currentColor"
              onMouseEnter={() => setHoverStars(i + 1)}
              onMouseLeave={() => setHoverStars(null)}
              onClick={() => updateStars(i + i)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantUserRating;