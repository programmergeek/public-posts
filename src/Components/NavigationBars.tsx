import React from "react";
import { IconButton } from ".";

type navBarProps = {
  iconsAndLabels: {
    icon: JSX.Element;
    label: string;
  }[];
};

const NavBar: React.FC<navBarProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col justify-center bg-black rounded-full w-14 min-h-[200px]">
      {props.iconsAndLabels.map((item) => {
        return (
          <div key={item.label} className="mb-2 ml-0.5 mt-2">
            <IconButton label={item.label}>{item.icon}</IconButton>
          </div>
        );
      })}
    </div>
  );
};

export const MiniNavBar: React.FC<navBarProps> = ({ ...props }) => {
  return (
    <div>
      <NavBar iconsAndLabels={props.iconsAndLabels} />
    </div>
  );
};
