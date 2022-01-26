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

export const SecondaryButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ ...props }) => {
  return (
    <button
      className="bg-white rounded-full border-4 border-black font-unna px-9 py-1 text-lg"
      {...props}
    >
      {props.children}
    </button>
  );
};
