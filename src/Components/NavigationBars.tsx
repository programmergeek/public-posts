import React from "react";
import { IconButton, LabeledIconButton } from ".";
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
    <div className="flex flex-col justify-center bg-black rounded-full w-16 min-h-[200px] py-8 fixed top-1/2 -translate-y-1/2">
      {props.iconsAndLabels.map((item) => {
        return (
          <div key={item.label} className="mb-3 ml-2 mt-3">
            <IconButton label={item.label}>{item.icon}</IconButton>
          </div>
        );
      })}
    </div>
  );
};

const NavBarMobile: React.FC<navBarProps> = ({ ...props }) => {
  return (
    <div className="flex justify-center h-16 min-w-[200px] rounded-full px-8 bg-black w-fit fixed bottom-4 left-1/2 -translate-x-1/2">
      {props.iconsAndLabels.map((item) => (
        <div key={item.label} className="mx-4 mt-1.5">
          <LabeledIconButton label={item.label}>{item.icon}</LabeledIconButton>
        </div>
      ))}
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

export const MiniNavBarMobile: React.FC = () => {
  return (
    <div>
      <NavBarMobile iconsAndLabels={miniNavBarIconsAndLabels} />
    </div>
  );
};

export const FullNavBarMobile: React.FC = () => {
  return (
    <div>
      <NavBarMobile iconsAndLabels={fullNavBarIconsAndLabels} />
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
