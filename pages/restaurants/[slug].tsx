import type { GetServerSideProps, NextPage } from "next";
import { IRestaurant } from "../../lib/api.interface";
import { fetcher } from "../../lib/fetcher";
import { useRouter } from "next/router";

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
  return (
    <div>
      <div>{props.restaurant.title}</div>
    </div>
  );
};

export default Restaurant;
