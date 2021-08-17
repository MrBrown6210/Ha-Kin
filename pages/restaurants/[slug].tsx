import type { GetServerSideProps, NextPage } from "next";
import { IRestaurant } from "../../lib/api.interface";
import { fetcher } from "../../lib/fetcher";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";
import RestaurantUserRating from "../../components/RestaurantUserRating";

type Props = {
  restaurant: IRestaurant;
};

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<{ props: Props }> => {
  const slug = context.params?.slug;
  const restaurant: IRestaurant = await fetcher(`restaurants/${slug}`);
  return { props: { restaurant } };
};

const Restaurant: NextPage<Props> = (props) => {
  const router = useRouter();
  const slug = router.query.slug!;
  const { data: restaurant, error } = useSWR(`restaurants/${slug.toString()}`, {
    initialData: props.restaurant,
  });
  if (error) return <div>{error}</div>;
  if (!restaurant) return <div>Loading...</div>;
  return (
    <div className="md:pl-32 md:pr-28 mb-3">
      <div className="mt-5 space-x-2 flex text-sm leading-5 text-gray-700 px-2 md:px-0">
        <Link href="/">
          <a>Home</a>
        </Link>
        <div>/</div>
        <div>{restaurant.name}</div>
      </div>
      <div className="flex justify-between px-2 md:px-0">
        <div>
          <div className="mt-2 text-3xl leading-9 font-bold">
            {restaurant.name}
          </div>
          <div className="mt-1 text-gray-700">{restaurant.tags.join(", ")}</div>
        </div>
        <div>
          <div className="flex">
            {[...Array(restaurant.stars)].map((_, i) => {
              return (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-yellow-300"
                  viewBox="-2 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              );
            })}
          </div>
          <div className="text-sm text-gray-600 text-right">
            {restaurant.reviewers} Reviewed
          </div>
        </div>
      </div>
      <div className="mt-5 block space-y-2 md:space-y-0 md:grid md:grid-rows-2 md:grid-flow-col md:gap-3">
        <img
          className="row-span-2 col-span-2 rounded-none md:rounded-2xl"
          src={restaurant.images[0]}
          alt={restaurant.name}
        />
        <img
          className="rounded-none md:rounded-2xl"
          src={restaurant.images[1]}
          alt={restaurant.name}
        />
        <div className="relative rounded-none md:rounded-2xl overflow-hidden">
          <div className="hidden md:flex absolute w-full h-full bg-black bg-opacity-40 items-center justify-center">
            <div className="text-white">View Gallery</div>
          </div>
          <img src={restaurant.images[2]} alt={restaurant.name} />
        </div>
      </div>
      <div className="flex justify-between mt-14 px-2 md:px-0">
        <div className="text-3xl leading-9 font-bold">Overview</div>
        <div>
          <RestaurantUserRating restaurant={restaurant}></RestaurantUserRating>
          <div className="text-sm text-gray-600 text-right">Your star</div>
        </div>
      </div>
      <div className="mt-14 px-2 md:px-0">
        <div className="text-lg leading-6 font-semibold">Contact</div>
        <div className="mt-2">
          <a
            className="text-red-600 hover:underline"
            href={`tel:${restaurant.phoneNumber}`}
          >
            {restaurant.phoneNumber}
          </a>
        </div>
        <div className="mt-1 leading-6">{restaurant.address}</div>
        <div className="mt-16">
          <div className="text-lg leading-6 font-semibold">Average Cost</div>
          <div className="mt-2 leading-6">
            {restaurant.averageCost * 2} baht for two people (approx.)
          </div>
        </div>
        <div className="mt-16">
          <div className="text-lg leading-6 font-semibold">More Info</div>
          <div className="space-y-2 mt-2">
            {restaurant.facilities.map((facility) => (
              <div key={facility} className="flex space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>{facility}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
