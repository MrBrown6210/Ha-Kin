import { NextPage } from "next";
import React, { FormEvent, FunctionComponent, useEffect } from "react";
import NoHeader from "../layouts/no-header";
import login from "./login";
import Link from "next/link";
import { axios } from "../lib/fetcher";
import { IUser } from "../lib/api.interface";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";

type Props = {};

type Page = NextPage<Props> & { layout?: FunctionComponent };

const SignupPage: Page = (props) => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/");
    }
  });

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const form = Object.fromEntries(formData);
    const { name, email, password } = form;
    await axios.post<IUser>("auth/signup", {
      name,
      email,
      password,
    });
    await auth.login(email.toString(), password.toString());
  };
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="border-2 border-red-500 rounded-none md:rounded-lg w-full md:w-7/12">
          <div className="flex">
            <div className="flex-1 p-7">
              <div className="text-2xl leading-8 font-bold">
                Get start with Ha Kin
              </div>
              <form onSubmit={(e) => signup(e)} className="mt-8">
                <div>
                  <div className="text-sm leading-5 font-medium text-gray-700">
                    Name
                  </div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Jone Smith"
                    required={true}
                    className="mt-1 px-3 py-2 w-11/12 rounded-lg border-[1px] border-gray-300"
                  />
                </div>
                <div className="mt-7">
                  <div className="text-sm leading-5 font-medium text-gray-700">
                    Email
                  </div>
                  <input
                    name="email"
                    type="text"
                    placeholder="you@example.com"
                    required={true}
                    className="mt-1 px-3 py-2 w-11/12 rounded-lg border-[1px] border-gray-300"
                  />
                </div>
                <div className="mt-7">
                  <div className="text-sm leading-5 font-medium text-gray-700">
                    Password
                  </div>
                  <input
                    name="password"
                    type="password"
                    placeholder="********"
                    required={true}
                    className="mt-1 px-3 py-2 w-11/12 rounded-lg border-[1px] border-gray-300"
                  />
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-11/12 bg-indigo-500 py-2 text-center text-white rounded-lg"
                  >
                    Get started!
                  </button>
                </div>
              </form>
              <div className="text-gray-500 text-xs mt-2">
                <p>
                  Already signed up?{" "}
                  <Link href="/login">
                    <a className="text-indigo-500">Login</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex-1 hidden sm:block relative">
              <img
                className="absolute w-full h-full bg-gray-100 object-cover"
                src="https://biznes.radomsko.pl/wp-content/uploads/2020/08/84-scaled.jpg"
                alt="computer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignupPage.layout = NoHeader;

export default SignupPage;
