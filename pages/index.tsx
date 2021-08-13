import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="pl-32 pr-28 mb-3">
      <div className="flex justify-between">
        <div className="mt-16">
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
          <button className="mt-8 bg-red-600 hover:bg-red-700 text-white py-4 px-10 rounded-md">
            I&apos;m hungry
          </button>
          <div className="mt-24">
            <div className="text-xl leading-7 font-semibold text-gray-600">
              Featured Clients
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 w-32 mt-4">
              {Array(4).fill(
                <div className="w-12 h-12 bg-red-700 rounded-lg"></div>
              )}
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://static.remove.bg/remove-bg-web/bf554ca6716508caedc52f1ac289b1eec29b6734/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
            alt=""
            width="340"
            height="480"
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-14">
        <div className="text-3xl leading-9 font-bold">Popular Restaurant</div>
        <div className="mt-9 grid gap-x-4 grid-flow-col w-6/12">
          <Image
            src="https://static.remove.bg/remove-bg-web/bf554ca6716508caedc52f1ac289b1eec29b6734/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
            alt="popular item"
            width="256"
            height="320"
            className="object-cover col-span-2"
          ></Image>
          <div className="col-span-1">
            <div className="text-xl leading-8 font-semibold">
              Canada Breakfast Style
            </div>
            <div className="text-sm leading-5 font-semibold">STIL</div>
            <div className="mt-2 text-lg text-gray-700 leading-6">
              Bacon ipsum dolor amet tongue tail landjaeger, turkey filet mignon
              pork loin pancetta. Swine chicken biltong beef ribs. Drumstick
              pork chop boudin landjaeger frankfurter picanha chuck fatback ham
              hamburger chicken tenderloin salami doner rump.
            </div>
            <button className="mt-5 px-3 py-2 bg-red-600 text-white rounded-md">
              Choose here
            </button>
          </div>
        </div>
        <div className="mt-32">
          <div className="text-3xl leading-9 font-bold">
            Let’s see what you love
          </div>
          <div className="flex space-x-2 mt-5">
            {Array(4).fill(
              <div className="border-[1px] border-red-600 rounded-lg py-2 px-4">
                test
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
