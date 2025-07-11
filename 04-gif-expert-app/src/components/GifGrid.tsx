import type { GifResponse } from "../interfaces/gif-response";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

interface Props {
  category: string;
}

export const GifGrid = ({ category }: Props) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ isLoading });

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <div>
        <h3>{category}</h3>
        <div className="card-grid">
          {images.map((image: GifResponse) => (
            <GifItem key={image.id} {...image} />
          ))}
        </div>
      </div>
    </>
  );
};
