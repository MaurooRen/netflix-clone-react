import React, { useState, useEffect } from 'react'
import axios from '../consts/axios'

const Row = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        //We want this code to run once the Row component is loaded
        //Make a request to TMDM API
    }, [])

    return (
        <div>
            <h2>{ title }</h2>

            {
                // movies.map()
            }
        </div>
    )
}

export default Row
