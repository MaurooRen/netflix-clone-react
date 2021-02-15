import React, { useState, useEffect } from 'react'
import axios from '../consts/axios'
import requests from '../consts/requests'


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

    console.log(movie)

    return (
        <header className="banner">
            <div className="banner_contents">

            </div>
        </header>
    )
}

export default Banner
