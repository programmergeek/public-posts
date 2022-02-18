import React from "react";
import { PostContent } from "../Components";

export const Posts: React.FC = () => {
  return (
    <div className="">
      <div className="absolute left-1/2 -translate-x-1/2 pt-5">
        <h1 className="font-unna text-7xl mb-4"> {dummyData.title} </h1>
        <p className="text-neutral-400 font-openSans">
          {dummyData.author} • {dummyData.publishDate}
        </p>
        <PostContent>{dummyData.content}</PostContent>
      </div>
    </div>
  );
};

const dummyData = {
  title: "This is Sparta",
  author: "Johnny Sins",
  publishDate: "24 February 2022",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in nisl pellentesque, lobortis nisi ut, porta massa. Sed sit amet mauris sit amet tortor consectetur aliquet. Maecenas vulputate, diam id vehicula auctor, dolor lacus imperdiet diam, ut blandit neque est quis ex. Nullam ac sem congue, porttitor turpis non, convallis nibh. In porta gravida metus. Vivamus malesuada laoreet justo, quis rhoncus justo auctor sit amet. Maecenas dapibus ipsum et euismod laoreet. Morbi eu nibh neque. Vestibulum pharetra aliquam justo vel iaculis. Suspendisse tellus turpis, euismod in dolor eget, convallis lobortis tortor. Aliquam erat volutpat. Maecenas mollis eu nulla in sodales.

    Donec sagittis diam vehicula nibh luctus interdum. Curabitur a leo id metus facilisis aliquam. Maecenas molestie velit id ullamcorper tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id convallis felis, non venenatis urna. Ut venenatis vestibulum mauris sed lacinia. Morbi rutrum, quam vel fermentum elementum, lacus tortor consectetur quam, id venenatis felis est eu lorem. Donec arcu mi, laoreet et arcu eu, tincidunt suscipit sapien. Donec vitae ligula facilisis, scelerisque massa id, porta nulla. Quisque a arcu non odio tristique eleifend. Maecenas luctus condimentum lorem ac lobortis. Praesent pretium, risus in placerat aliquet, enim erat faucibus arcu, ac dapibus est nunc in lorem. Mauris non eros fringilla, luctus lacus eu, laoreet nisi. Nulla lobortis eros vel odio tincidunt, et congue nisi molestie.
    Cras vulputate tellus id eleifend hendrerit. Sed arcu leo, bibendum sagittis dui id, mollis pellentesque libero. Phasellus laoreet justo leo, vel interdum massa auctor et. Aliquam erat volutpat. Aliquam id scelerisque nunc. Praesent dapibus placerat pretium. Integer hendrerit justo sed nibh interdum ullamcorper. Proin quis pellentesque est. Aliquam dictum fringilla justo ut mollis. Fusce in ante maximus, hendrerit sapien vitae, viverra elit. Integer tellus urna, auctor a mauris vel, consectetur imperdiet tellus. Aliquam erat volutpat. Ut sit amet mauris aliquam, pharetra leo cursus, convallis odio. Pellentesque varius ex quam, non ullamcorper odio egestas nec. Suspendisse bibendum, nibh vitae vehicula lacinia, sem justo consectetur odio, vitae finibus augue elit id enim.`,
};
