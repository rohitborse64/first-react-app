import React from 'react'
import classes from './MovieList.module.css'
import Movie from './Movie'

const MovieList = (props)=> {
    return (
        <div>
            <ul className={classes['movies-list']}>
            { props.movies.map((movie)=>(
                <Movie
                key={movie.id}
                title={movie.title}
                releaseDate={movie.releaseDate}
                openingText = {movie.openingText}
                />
            ))}
            </ul>            
        </div>
    )
}

export default MovieList;
