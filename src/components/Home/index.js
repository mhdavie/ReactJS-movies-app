import React from 'react';
import { Container, MovieList, Movie } from "./style"
import { API_KEY } from '../../config/key'
import { UseState } from 'react'




function Home() {

    const [movies, setMovies] = UseState([])

    return (
        <Container>
            <h1> Pop-Movie</h1>
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key= {movie.id}>
                    
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