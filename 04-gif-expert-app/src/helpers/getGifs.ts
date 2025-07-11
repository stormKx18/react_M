import type { GifResponse } from "../interfaces/gif-response";
import type { Datum } from "../interfaces/search-api-response";

export const getGifs = async (category: string) => {
  const api_key = "E5U1uXG6SkZ72wusuK8Usn6hywcgWYS8";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    (img: Datum): GifResponse => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    })
  );

  return gifs;
};
