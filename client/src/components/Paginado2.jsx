import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import ForwardIcon from '@mui/icons-material/Forward';
import Button from '@mui/material/Button';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Paginado2 = ({ recipesPerPage, allRecipes, paginado, currentPage }) => {
    // All = 100, recipperpage = 9 => 100/9=11.11 redondeado 11 paginas
    // paginado es una funcion, la misma se ejecuta en el home y me cambia un estado que me actualiza las cards
    //console.log(currentPage);
    
    const pageNumbers = [];
    for (let i = 0; i < Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i + 1);
    }
    /*  console.log(recipesPerPage + '<- recipesperpage');
        console.log(pageNumbers + ' <- pagenumbers');
        console.log(allRecipes + ' <- allrecipes');
    */
    let z = 1;
    return (
        <Grid
            container
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <Button
                variant="text"
                endIcon={<NavigateBeforeIcon sx={{ color: 'black' }} />}
                onClick={() => paginado((currentPage==1) ? 1 : currentPage-1)}
            >
            </Button>

            {pageNumbers?.map(number =>
                <Grid item key={number}>
                    <Avatar
                        onClick={() => paginado(number)}
                        sx={{
                            bgcolor: '#021E39',
                            marginLeft: 1,
                            marginRight: 1,
                            width: 30,
                            height: 30,
                            borderRadius: 2,
                            cursor: 'pointer',
                            opacity: currentPage === number ? .9 : .5
                        }} variant="square">
                        {number}
                    </Avatar>
                </Grid>
            )
            }
            <Button
                variant="text"
                startIcon={<NavigateNextIcon sx={{ color: 'black' }} />}
                onClick={() => paginado((currentPage==Math.ceil(allRecipes / recipesPerPage)) ? Math.ceil(allRecipes / recipesPerPage) : currentPage+1)}
            >
            </Button>
        </Grid >
    )
}

export default Paginado2;