import React, { useEffect, useState } from "react";

import {Box, Typography} from '@mui/material'
import './ListMovies.css'
import CardMovie from '../components/CardMovie'
import tmdbInstance from "../apis/tmdb";
// import jsonMovies from '../data/movies.json'
// import axios from 'axios'

const ListMovies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchDataMovies = async () => {
            try {
                const response = await tmdbInstance
                    .get("/movie/popular")
                setMovies(response.data.results)    
                // console.log(response)        
            } catch (error) {
                console.log('error :', error)
            }
        }
        fetchDataMovies()
    }, [])
    return(
        // <div>
            <Box className='boxy'>
                <Typography variant='h5'>List Movies</Typography>
                {movies.map((movie) => {
                    return <CardMovie key={movie.id} propsMovie={movie}/>
                })}
            </Box>
        // </div>
    )
}

export default ListMovies