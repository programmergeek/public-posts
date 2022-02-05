import React from "react";
import { IconButton } from ".";
import { Home } from "@styled-icons/entypo/Home";
import { AddSquareMultiple } from "@styled-icons/fluentui-system-filled/AddSquareMultiple";
import { Edit } from "@styled-icons/fluentui-system-regular/Edit";
import { Trash } from "@styled-icons/boxicons-regular/Trash";

type navBarProps = {
  iconsAndLabels: {
    icon: JSX.Element;
    label: string;
  }[];
};

const NavBar: React.FC<navBarProps> = ({ ...props }) => {
  return (
    <div className="flex flex-col justify-center bg-black rounded-full w-16 min-h-[200px] py-8">
      {props.iconsAndLabels.map((item) => {
        return (
          <div key={item.label} className="mb-3 ml-1.5 mt-3">
            <IconButton label={item.label}>{item.icon}</IconButton>
          </div>
        );
      })}
    </div>
  );
};

export const MiniNavBar: React.FC = () => {
  return (
    <div>
      <NavBar iconsAndLabels={miniNavBarIconsAndLabels} />
    </div>
  );
};

export const FullNavBar: React.FC = () => {
  return (
    <div>
      <NavBar iconsAndLabels={fullNavBarIconsAndLabels} />
    </div>
  );
};

const miniNavBarIconsAndLabels = [
  {
    icon: <Home />,
    label: "Home",
  },
  {
    icon: <AddSquareMultiple />,
    label: "Create",
  },
];

const fullNavBarIconsAndLabels = [
  {
    icon: <Home />,
    label: "Home",
  },
  {
    icon: <AddSquareMultiple />,
    label: "Create",
  },
  {
    icon: <Edit />,
    label: "Edit",
  },
  {
    icon: <Trash />,
    label: "Delete",
  },
];
