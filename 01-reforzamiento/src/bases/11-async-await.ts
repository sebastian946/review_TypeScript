import type { GiphyRandomResponse } from "../data/giphy.data";

const API_KEY = "exrsOQQa1xyhT1IPelpmI2OS8Crp5LqL";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
  );
  const { data } = (await response.json()) as GiphyRandomResponse;
  return data.images.original.url;
};

getRandomGifUrl()
  .then((url) => createImageInsideDOM(url))
  .catch((error) => {
    console.error(error);
  });
