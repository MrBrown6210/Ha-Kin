import { FunctionComponent } from "react";
import useSWR from "swr";
import { IClient } from "../lib/api.interface";
import { fetcher } from "../lib/fetcher";

type Props = {};

// export async function getServerSideProps(): Promise<{ props: Props }> {
//   const clients: IClient[] = await fetcher("restaurants");
//   return { props: { clients } };
// }

const CustomComponent: FunctionComponent<Props> = (props) => {
  const { data: clients, error } = useSWR<IClient[]>("feature-clients");

  if (error) return <div>{error}</div>;
  if (!clients)
    return (
      <div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:w-32 mt-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:w-32 mt-4">
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.image}
            alt="client"
            className="w-12 h-12 bg-gray-50 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomComponent;
