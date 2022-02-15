import React from "react";
import { MiniNavBar } from "../Components";

export const Home = () => {
  return (
    <div className="flex">
      <section className="hidden sm:flex sm:w-44 sm:h-screen ml-1">
        <MiniNavBar />
      </section>
      <section></section>
    </div>
  );
};
