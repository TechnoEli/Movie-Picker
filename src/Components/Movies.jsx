//Where you can list your movies you like.

export default function Movies(){
    const movieList = [
    {
        name: 'Iron Man',
        releaseYear: 2008,
        availableToStream: true,
        streamingServices: "Disney+",
        liked: true
    },
    {
        name: 'Captain America: The First Avenger',
        releaseYear: 2011,
        availableToStream: true,
        streamingServices: "Disney+",
        liked: false
    },
    {
        name: 'The Incredible Hulk',
        releaseYear: 2008,
        availableToStream: true,
        streamingServices: "Disney+",
        liked: false
    },
    {
        name: 'Blade',
        releaseYear: 1998,
        availableToStream: false,
        streamingServices: "",
        liked: true
    }
]

    return(
    <div>
        <h1>Your movie list!</h1>
        <ul>
            {movieList.map(movie => 
                <li>
                    {movie.name}, {movie.releaseYear}.
                     
                </li>
            )}
            
            </ul>
    </div> 

    )
}
