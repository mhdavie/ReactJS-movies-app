import React from 'react';
import {Container, MovieList, Movie} from "./style"

function Home() {
    const movies = [

        {
            title: "Spider Man",
            image_url: "https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large"
        },
        
        {
            title: "Batman",
            image_url: "https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large"
        },
        
        {
            title: "IronMan",
            image_url: "https://pbs.twimg.com/media/FR7DvJFVIAAuoH6?format=jpg&name=large"
        }
    ]

    return (
        <Container>
            <h1> Pop-Movie</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie>
                    
                            <a href="http://google.com"> <img src={movie.image_url} alt={movie.title}/></a>
                            <span>{movie.title}</span>

                        </Movie>            
                )                    

                })}


            </MovieList>

        </Container>
    );
}

export default Home;