import React from "react";
import { PrimaryButton } from "./Buttons";

export const PostCard: React.FC = () => {
  return (
    <div>
      <Title>Title</Title>
      <AuthorAndPublishDate author="Will Joseph" date="22 January 2022" />
      <p className="font-openSans">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        reiciendis obcaecati ut esse odit. Deserunt beatae libero laudantium
        incidunt iure facilis provident, voluptatem tempore perspiciatis
        debitis...
      </p>
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
    <p className="font-openSans text-neutral-500">
      {props.author} • {props.date}
    </p>
  );
};
