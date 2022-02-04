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
    <div className="flex flex-col bg-black rounded-full w-14 min-h-[200px]">
      {props.iconsAndLabels.map((item) => {
        return (
          <IconButton key={item.label} label={item.label}>
            {item.icon}
          </IconButton>
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
