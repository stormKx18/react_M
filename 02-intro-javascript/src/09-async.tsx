const apiKey = "E5U1uXG6SkZ72wusuK8Usn6hywcgWYS8";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

// peticion
//   .then((resp) => {
//     resp.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.error);

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     console.log(data.images.original.url);
//   })
//   .catch(console.error);

const getImagen = async () => {
  const apiKey = "E5U1uXG6SkZ72wusuK8Usn6hywcgWYS8";

  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const data = await resp.json();

  console.log(data);
};

getImagen();
