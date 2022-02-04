import React, { useState } from "react";

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

export const IconButton: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ ...props }) => {
  const [labelIsVisible, updateLabelIsVisible] = useState(false);

  return (
    <div className="relative w-fit">
      <button
        className="w-12 rounded-full px-2 py-2 bg-white"
        {...props}
        onMouseOver={() => updateLabelIsVisible(true)}
        onMouseLeave={() => updateLabelIsVisible(false)}
      >
        {props.children}
      </button>
      <div
        className="absolute top-2 left-16 w-fit"
        style={{ display: labelIsVisible ? "block" : "none" }}
      >
        <IconButtonLabel text="Home" />
      </div>
    </div>
  );
};

export const LabeledIconButton: React.FC<{ label: string }> = ({
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <button className="w-8 h-8 rounded-full">
        <div className="w-6 ml-1 mb-1">{props.children}</div>
      </button>
      <label className="font-unna text-sm text-white w-fit">
        {props.label}
      </label>
    </div>
  );
};

const IconButtonLabel: React.FC<{ text: string }> = ({ ...props }) => {
  return (
    <div className="flex relative">
      <div className="w-3 absolute top-2 overflow-hidden inline-block">
        <div className=" h-5 bg-neutral-900 opacity-90 -rotate-45 transform origin-top-right"></div>
      </div>
      <div className="absolute left-3 bg-neutral-900 h-8 text-white rounded-md px-6 py-1 m-0 w-fit font-openSans opacity-90">
        {props.text}
      </div>
    </div>
  );
};
