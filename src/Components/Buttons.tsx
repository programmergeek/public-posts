import React from "react";

export const PrimaryButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ ...props }) => {
  return (
    <button
      className={`rounded-full bg-black text-white px-9 py-2 text-lg font-unna active:bg-neutral-700`}
      {...props}
      style={{
        transition: "50ms",
      }}
    >
      {props.children}
    </button>
  );
};
