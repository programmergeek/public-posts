import React from "react";
import { IconButton } from ".";

type navBarProps = {
  iconsAndLabels: {
    icon: JSX.Element;
    label: string;
  }[];
};

const navBar: React.FC<navBarProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col bg-black rounded-full w-14 min-h-[200px]">
      {props.iconsAndLabels.map((item) => {
        <IconButton label={item.label}>{item.icon}</IconButton>;
      })}
    </div>
  );
};
