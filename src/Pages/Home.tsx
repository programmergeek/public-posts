import React from "react";
import { MiniNavBar, PostCard } from "../Components";

export const Home = () => {
  return (
    <div className="flex">
      <section className="hidden lg:flex sm:w-24 sm:h-screen ml-1">
        <MiniNavBar />
      </section>
      <div className="w-screen lg:w-[87vw] sm:mt-7 h-11/12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-5 md:p-6 lg:gap-10 content-start h-fit place-items-center">
          {data.map((data, key) => (
            <div key={key} className="">
              <PostCard
                author={data.author}
                postSnippet={data.postSnippet}
                publishDate={data.publishDate}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
  {
    title: "Test Title",
    publishDate: "15 February 2022",
    author: "Dwane Johnson",
    postSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed semper rutrum vestibulum. Morbi maximus leo vitae augue pulvinar, 
        placerat vestibulum`,
  },
];
