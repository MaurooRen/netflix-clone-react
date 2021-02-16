import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from '../consts/axios'
import '../styles/Row.css'

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const img_base_url = 'https://image.tmdb.org/t/p/original'

    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')


    useEffect(() => {
        //We want this code to run once the Row component is loaded
        //Make a request to TMDM API

        //Async Call
        //We do this because we are making a call to a thirt party service,
        //so it may take 0 or 1s maybe more
        async function fetchData() {
            //When you make this 'request' WAIT for the answear to comeback
            //and the DO something
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchUrl])
    //Whenever useEffect its depending of an external variable
    //(in this case fetchUrl) WE HAVE TO!!! use it use in []
    //because we are depending of that variable


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    };


    const handleClick = (movie) => {
        if(trailerUrl) { //If there and URL in the slice of state, close it
            setTrailerUrl('')
        } else {
            //Let find out the movie base on the name
            movieTrailer(movie?.name || '')
                //This is gonna give us a full URL
                .then(url => {
                    // https://www.youtube.com/watch?v=0QmSF7WUyN0
                    // fron the URL we need '?v=0QmSF7WUyN0'
                    // here we are parsing the url to get it
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v')) // This return '0QmSF7WUyN0'
                }) .catch(error => console.log(error))
        }
    }
    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
                            src={`${img_base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    ))
                }
            </div>

            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />
            }
            
        </div>
    )
}

export default Row
