import { NextPage } from "next";
import { FunctionComponent } from "react";
import NoHeader from "../layouts/no-header";

type Props = {};

type Page = NextPage<Props> & { layout?: FunctionComponent };

const Login: Page = (props) => {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="bg-white rounded-lg w-full md:w-7/12">xx</div>
      </div>
    </div>
  );
};

Login.layout = NoHeader;

export default Login;
