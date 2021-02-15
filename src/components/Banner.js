import React, { useState, useEffect } from 'react'
import axios from '../consts/axios'
import requests from '../consts/requests'
import truncate from '../utils/truncate'
import '../styles/Banner.css'


const Banner = () => {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            // Here we are chosing one rantom element from the array
            // from 0 to the array.length - 1
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
        }
        fetchData()
    }, [])

    const img_base_url = 'https://image.tmdb.org/t/p/original'


    return (
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                // The ? inside the path it's here to some how (no idea) handle
                // if the return its undefined
                backgroundImage: `url("${img_base_url}${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">          
                <h1 className="banner_title">
                    {
                        //The '?' it's called Optional Chaining
                        //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Encadenamiento_opcional
                        movie?.title || movie?.name || movie?.original_title
                    }
                </h1>

                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                
                <h2 className="banner_description">
                    { truncate(movie?.overview, 150) }
                </h2>

                {/* div > 2 buttons */}
                {/* description */}
            </div>


        </header>
    )
}

export default Banner
