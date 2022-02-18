import React from "react";

/** Returns array of paragraph blocks.*/
export const PostContent = ({ ...props }) => {
  return [<p key={1}></p>];
};

/** Separates text into paragraphs.
 * Return an array of the paragraphs.
 */
const processText = (text: string) => {
  // array to store separated paragraphs
  const textArr = [] as string[];
  while (text.search("\n") !== -1) {
    // look for the index of the new line
    const index = text.search("\n");
    // copy everything before the new line
    const paragraph = text.substring(0, index + 1);
    // add the copy to the array
    textArr.push(paragraph);
    // delete the copied text
    text = text.substring(index + 2);
  }
  // add the final paragraph to the array
  textArr.push(text);
  return textArr;
};
