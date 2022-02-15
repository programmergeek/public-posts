import React from "react";
import { MiniNavBar, PostCard } from "../Components";

export const Home = () => {
  return (
    <div className="flex">
      <section className="hidden sm:flex sm:w-44 sm:h-screen ml-1">
        <MiniNavBar />
      </section>
      <div className="w-[87vw] mt-7 h-11/12">
        <div className="grid lg:grid-cols-3 2xl:grid-cols-4 gap-10 content-start h-fit place-items-center">
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
