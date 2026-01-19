import type { GiphyRandomResponse } from "../data/giphy.data";

const API_KEY = "exrsOQQa1xyhT1IPelpmI2OS8Crp5LqL";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`,
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageURL = data.images.original.url;
    createImageInsideDOM(imageURL);
  })
  .catch((error) => {
    console.error(error);
  });
