import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import RestaurantCard from "../components/RestaurantCard";
import FeatureClientList from "../components/FeatureClientList";
import useSWR from "swr";
import { axios, fetcher } from "../lib/fetcher";
import { IMenu, IRestaurant } from "../lib/api.interface";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/auth";
import { useEffect } from "react";

type Props = {
  restaurants: IRestaurant[];
  popularMenu: IMenu;
};

export async function getServerSideProps(): Promise<{ props: Props }> {
  const restaurants: IRestaurant[] = await fetcher("restaurants");
  const popularMenu: IMenu = await fetcher("populars/menu");
  return { props: { restaurants, popularMenu } };
}

const Home: NextPage<Props> = (props) => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      router.push("/login");
    }
  });

  const { data: restaurants, error: errorRestaurant } = useSWR("restaurants", {
    initialData: props.restaurants,
  });

  const { data: popularMenu, error: errorMenu } = useSWR("populars/menu", {
    initialData: props.popularMenu,
  });

  const goToRandomRestaurant = async () => {
    const { data: restaurant } = await axios.get<IRestaurant>(
      "randoms/restaurant"
    );
    router.push(`/restaurants/${restaurant.slug}`);
  };

  if (errorRestaurant) return <div>{errorRestaurant}</div>;
  if (errorMenu) return <div>{errorMenu}</div>;
  return (
    <div className="md:pl-32 md:pr-28 mb-3">
      <div className="flex justify-between">
        <div className="mt-16 text-center px-2 md:text-left md:px-0">
          <div className="text-6xl leading-none font-extrabold">Ha kin</div>
          <div className="mt-4 text-sm leading-5 font-medium">
            Everything we know it good will let you know too.
            <br />
            Are you hungry? don’t know what to eat? Why not try{" "}
            <span className="font-bold">Ha Kin</span>
            <br />
            <span className="text-base font-semibold">
              Platform for food lover like you.
            </span>
          </div>
          <button
            onClick={() => goToRandomRestaurant()}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white py-4 px-10 rounded-md"
          >
            I&apos;m hungry
          </button>
          <div className="mt-24 flex justify-center md:justify-start">
            <div>
              <div className="text-xl leading-7 font-semibold text-gray-600">
                Featured Clients
              </div>
              <FeatureClientList></FeatureClientList>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
            alt=""
            width="340"
            height="480"
            className="object-cover w-[340px] h-[480px]"
          />
        </div>
      </div>
      {popularMenu ? (
        <div className="mt-14">
          <div className="text-3xl leading-9 font-bold text-center px-2 lg:px-0 lg:text-left">
            Popular Restaurant
          </div>
          <div className="mt-9 grid gap-x-4 w-full grid-flow-row lg:w-6/12 lg:grid-flow-col">
            <img
              src={popularMenu.image}
              alt="popular item"
              className="object-cover col-span-1"
            />
            <div className="col-span-1 px-2 lg:px-0">
              <div className="text-xl leading-8 font-semibold">
                {popularMenu.name}
              </div>
              <div className="text-sm leading-5 font-semibold">
                {popularMenu.restaurant.name}
              </div>
              <div className="mt-2 text-lg text-gray-700 leading-6">
                {popularMenu.description}
              </div>
              <button
                onClick={() => {
                  router.push(`/restaurants/${popularMenu.restaurant.slug}`);
                }}
                className="mt-5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md w-full lg:w-auto"
              >
                Choose here
              </button>
            </div>
          </div>
          <div className="mt-32">
            <div className="text-3xl leading-9 font-bold px-2 lg:px-0">
              Let’s see what you love
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-9 gap-y-6 mt-5">
              {restaurants === undefined ? (
                <div>Loading</div>
              ) : (
                restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                  ></RestaurantCard>
                ))
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Home;
