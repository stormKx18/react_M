import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  useEffect(() => {
    getGifs(category);
  });

  return (
    <>
      <div>
        <h3>{category}</h3>
        <p>{category}</p>
      </div>
    </>
  );
};
