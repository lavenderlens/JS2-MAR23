// native fetch

// fetch("http://localhost:3000/albums")
//   .then((response) => response.json())
//   .then(console.log); //equivalent of System.out::println in Java streams

// FETCH-1 fetch inside a function, passed a callback
// const getAlbums1 = (successCallback) => {
//   fetch("http://localhost:3000/albums")
//     .then((response) => response.json())
//     .then(successCallback); //keep async work inside the promise chain
// };

//callback
const logAlbums = (albums) => {
  for (let { title, artist } of albums) {
    console.log(`${title} by ${artist}`);
  }
};
// getAlbums1(logAlbums);

// FETCH-2 this version returns a Promise instead of accepting a callback
const getAlbums2 = () => {
  return fetch("http://localhost:3000/albums").then((response) =>
    response.json()
  );
};

// console.log(getAlbums2());

//ASYNC-AWAIT 1 - accepts a callback

const getAlbums3 = async (successCallback) => {
  // fetch always returns a promise and so can be await
  const response = await fetch("http://localhost:3000/albums");
  const albums = await response.json();
  successCallback(albums);
};
// console.log("async-await with callback");
// getAlbums3(logAlbums);

//ASYNC-AWAIT 2 - returns a Promise
const getAlbums4 = async () => {
  // fetch always returns a promise and so can be await
  const response = await fetch("http://localhost:3000/albums");
  const albums = await response.json();
  return albums;
};

console.log(getAlbums4()); //Promise{<pending>}
