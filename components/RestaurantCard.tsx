import { FunctionComponent } from "react";

export type RestaurantProps = {
  restaurant: {
    title: string;
    stars: number;
    reviewers: number;
    tags: string[];
    averageCost: number;
  };
};

const RestaurantCard: FunctionComponent<RestaurantProps> = ({ restaurant }) => {
  return (
    <div>
      <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
        <img className="bg-gray-200" alt="image" />
      </div>
      <div>
        <div>{restaurant.title}</div>
        <div>Star</div>
        <div>{restaurant.reviewers} reviewed</div>
        <div>{restaurant.tags.join()}</div>
        <div>{Array(restaurant.averageCost).fill("$").join("")}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
