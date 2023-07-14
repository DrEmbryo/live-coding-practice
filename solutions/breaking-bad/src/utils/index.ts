import { elements } from "../constants";

export const highlightElement = (text: string) => {
  const capitalized = text.replace(text[0], text[0].toUpperCase());
  const highlight = { highlighted: "", text: capitalized };
  for (let char = capitalized.length; char > 0; char--) {
    const subString = capitalized.substring(0, char);
    if (elements.has(subString)) {
      highlight.highlighted = subString;
      highlight.text = capitalized.substring(char);
      break;
    }
  }
  console.log(highlight);
  return highlight;
};
