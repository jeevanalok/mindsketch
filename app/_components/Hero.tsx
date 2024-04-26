"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

function Hero() {
  const { user, error, isLoading }: any = useUser();
  return (
    <section className="bg-slate-100 text-gray-900 h-[90vh] flex flex-col items-center justify-center bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px]">
      <div className="mx-auto max-w-screen-xl px-4 py-28 lg:items-center">
        <div className="mx-auto max-w-3xl text-center ">
          <h1 className=" bg-gradient-to-r from-rose-700 to-teal-600 bg-clip-text text-5xl font-extrabold text-transparent sm:text-6xl">
            MindSketch
          </h1>
          <p className="text-3xl font-bold bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text my-5 ">
            {" "}
            Where Ideas Take Shape{" "}
          </p>

          {/* <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Seamlessly blend the fluidity of whiteboarding with intuitive
            digital organization. <br/> From brainstorming to planning, effortlessly
            sketch out ideas and map workflows with precision.
          </p> */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-teal-500 bg-teal-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href={user ? "/dashboard" : "/api/auth/login"}
            >
              {user ? "Go to Dashboard" : "Get Started"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
