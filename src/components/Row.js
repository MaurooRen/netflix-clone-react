import React, { useState, useEffect } from 'react'
import axios from '../consts/axios'

const Row = ({ title, fetchUrl }) => {

    const [movies, setMovies] = useState([])


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
            setMovies(request.data)
        }
        fetchData()
    }, [fetchUrl])
    //Whenever useEffect its depending of an external variable
    //(in this case fetchUrl) WE HAVE TO!!! use it use in []
    //because we are depending of that variable

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
