//Where you can list your movies you like.

import Movie from "./Movie";

export default function Movies() {
  const movieList = [
    {
      name: "Iron Man",
      releaseYear: 2008,
      availableToStream: true,
      streamingServices: "Disney+",
      liked: true,
    },
    {
      name: "Captain America: The First Avenger",
      releaseYear: 2011,
      availableToStream: true,
      streamingServices: "Disney+",
      liked: false,
    },
    {
      name: "The Incredible Hulk",
      releaseYear: 2008,
      availableToStream: true,
      streamingServices: "Disney+",
      liked: false,
    },
    {
      name: "Blade",
      releaseYear: 1998,
      availableToStream: false,
      streamingServices: "",
      liked: true,
    },
  ];

  return (
    <div>
      <h1>Your movie list!</h1>
      <ul>
        {movieList.map((movie) => (
          <Movie name={movie.name} release={movie.releaseYear} />
        ))}
      </ul>
    </div>
  );
}
