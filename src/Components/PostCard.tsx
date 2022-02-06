import React from "react";

export const PostCard: React.FC = () => {
  return (
    <div>
      <Title>Title</Title>
    </div>
  );
};

const Title: React.FC = ({ ...props }) => {
  return <h1 className="font-unna text-5xl"> {props.children} </h1>;
};
