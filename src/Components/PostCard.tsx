import React from "react";

export const PostCard: React.FC = () => {
  return (
    <div>
      <Title>Title</Title>
      <AuthorAndPublishDate author="Will Joseph" date="22 January 2022" />
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
