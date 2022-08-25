import React from 'react';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Rating,
    Typography
} from '@mui/material'
import '../containers/ListMovies.css'

const urlImage = 'https://image.tmdb.org/t/p/w200'
const CardMovie = ({propsMovie}) => {
    return(
        <div>
            <Card className='boxy'>
               <Box>
                    <Typography variant='h5'>
                        Component Card Movie
                    </Typography>
               </Box>
               <Box className='box' sx={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                <CardMedia
                    sx={{
                        width : 150
                    }}
                    component="img"
                    image={`${urlImage}${propsMovie.poster_path}`}
                    alt="kucing"
                ></CardMedia>
                <CardContent> 
                    <Typography>{propsMovie.title}</Typography>
                    <Rating
                        value={propsMovie.vote_average / 2}
                        precision={0.5} readOnly
                    />
                </CardContent>
               </Box>
            </Card>
        </div>
    )
}

export default CardMovie