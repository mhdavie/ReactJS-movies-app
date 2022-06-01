import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, MovieList, Movie } from "./style"
// import { API_KEY } from '../../config/key'
import { useState } from 'react'





function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        //consumir o filme...
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=48057a0fa3f9c2e1cfcc9e05fcb49758&language=en-US`)
        .then(res => res.json())
        .then(data => setMovies(data.results))

    }, [])

    return (
        <Container>

            <h1> Pop-Movies</h1>
            
            <MovieList>

                {movies.map(movie => {
                    return (
                        <Movie key= {movie.id}>
                    
                                <Link to={`/details/${movie.id}`}>
                                    
                                    <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/>
                                
                                </Link> 

                                <span>{movie.title}</span>

                        </Movie>            
                    )                    

                })}


            </MovieList>

        </Container>
    );
}

export default Home;