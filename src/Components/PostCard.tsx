import React from "react";
import { PrimaryButton } from "./Buttons";

type PostCardProps = {
  title: string;
  publishDate: string;
  author: string;
  postSnippet: string;
};

export const PostCard: React.FC<PostCardProps> = ({ ...props }) => {
  return (
    <div className="border-b-2 border-neutral-400 px-2 py-4 sm:border-0 sm:p-5 sm:w-[47vw] sm:h-80 sm:rounded-lg bg-white 2xl:w-[20vw] md:h-72 lg:w-[28vw] md:w-[45vw] xl:w-[28vw]">
      <section className="mb-1">
        <Title>{props.title}</Title>
      </section>
      <section className="mb-4">
        <AuthorAndPublishDate author={props.author} date={props.publishDate} />
      </section>
      <section className="mb-8 sm:mb-4">
        <p className="font-openSans text-sm">{props.postSnippet}</p>
      </section>
      <div className="flex justify-end">
        <PrimaryButton>Read</PrimaryButton>
      </div>
    </div>
  );
};

const Title: React.FC = ({ ...props }) => {
  return <h1 className="font-unna text-5xl"> {props.children} </h1>;
};

const AuthorAndPublishDate: React.FC<{ author: string; date: string }> = ({
  ...props
}) => {
  return (
    <p className="font-openSans text-neutral-500 text-sm">
      {props.author} • {props.date}
    </p>
  );
};
