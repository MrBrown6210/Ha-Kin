import { FunctionComponent } from "react";
import { IRestaurant } from "../lib/api.interface";
import Link from "next/link";

export type RestaurantProps = {
  restaurant: IRestaurant;
};

const RestaurantCard: FunctionComponent<RestaurantProps> = ({ restaurant }) => {
  return (
    <div>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-none md:rounded-lg">
        <Link href={`/restaurants/${restaurant.slug}`}>
          <a>
            <img
              className="bg-gray-200 object-cover"
              alt="image"
              src={restaurant.coverImageURL}
            />
          </a>
        </Link>
      </div>
      <div className="mt-2 px-2 md:px-0">
        <Link href={`/restaurants/${restaurant.slug}`}>
          <a className="text-lg leading-6 font-semibold hover:underline">
            {restaurant.name}
          </a>
        </Link>
        <div className="flex mt-1">
          {[...Array(restaurant.stars)].map((_, i) => {
            return (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-yellow-300"
                viewBox="2 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          })}
        </div>
        <div className="mt-1 text-sm leading-none text-gray-600">
          {restaurant.reviewers} reviewed
        </div>
        <div className="mt-1 text-gray-700">{restaurant.tags.join(", ")}</div>
        <div className="flex space-x-1">
          {[...Array(getAverageCostRange(restaurant.averageCost))].map(
            (_, i) => {
              return <div key={i}>$</div>;
            }
          )}
        </div>
      </div>
    </div>
  );
};

const getAverageCostRange = (averageCost: number) => {
  if (averageCost < 150) return 1;
  if (averageCost < 250) return 2;
  if (averageCost < 350) return 3;
  if (averageCost < 450) return 4;
  return 5;
};

export default RestaurantCard;
