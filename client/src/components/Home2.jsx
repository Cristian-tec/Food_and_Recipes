import React, { useEffect } from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux'
import { searchRecipes, searchRecipesDiet, orderScore, orderAlph } from '../redux/actions'
import Recipe2 from './Recipe2'
import Navbar from './Navbar'
import Paginado from './Paginado2'
import loading4 from '../img/cargando4.gif'

import {
    Card,
    ImageListItem,
} from '@mui/material';

export default function Home2() {

    //const allRecipes = useSelector((state) => state.recipes); 
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);
    const [recipes, setRecipes] = useState([]);

    const { display } = useSelector((state) => state.loaderReducer);

    // ---------  PAGINADO -----------------------

    const allRecipes = useSelector((state) => state.rootReducer.recipes);  // 100 de la API + las de la BBDD
    //console.log(allRecipes + 'antes');
    const [currentPage, setCurrentPage] = useState(1);        //
    const recipesPerPage = 9;
    const last = currentPage * recipesPerPage; //   1 * 9  -----> Last  9
    const first = last - recipesPerPage;       //   9 - 9  -----> First 0
    const currentRecipes = allRecipes?.slice(first, last);

    const paginado = (pageNumber) => {  // esto me ayuda al renderizado
        /* console.log(pageNumber, first, last); */
        setCurrentPage(pageNumber)
    }

    // --------- FIN PAGINADO -------------------

    const current = () => {
        setCurrentPage(1)
    }

    const [upd, setUpd] = useState(false)
    const update = () => { //lo use para actualizar cuando filtro y actualice pantalla
        setUpd(!upd)
    }
    //console.log(allRecipes);

    useEffect(() => {
        setChecked(true)
        dispatch(searchRecipes(''))
    }, [dispatch])  // puse upd para que me actualice cada vez que creo una receta no funciono

    const aumentar = () => {
        setCurrentPage(currentPage + 1)
    }
    let maxPages = Math.ceil(allRecipes.length / recipesPerPage);
    //console.log(maxPages);
    const max = () => {
        if (currentPage < maxPages) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(currentPage)
        }
    }

    const min = () => {
        if (currentPage == 1) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

    const dataDisplay = () => {
        if (display) {
            return (
                <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                    < Card >
                        <ImageListItem sx={{ height: '100% !important' }}>
                            <img src={loading4} alt='1'></img>
                        </ImageListItem>
                    </Card >
                </Grid >
            )
        } else {
            return (
                <>
                    <Grid container
                        mt={3}
                        mb={1}
                        sx={{ backgroundColor: 'none', }}>
                        <Paginado
                            recipesPerPage={recipesPerPage}
                            allRecipes={allRecipes?.length}
                            paginado={paginado}
                            currentPage={currentPage}
                        />
                    </Grid>

                    <Grid
                        container
                        mt={0}

                        sx={{
                            /* backgroundColor: '#5c61ef', */

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                        {currentRecipes?.map(elem => {
                            return (
                                <Grid item m={2} key={elem.id}>
                                    <Recipe2
                                        key={elem.id}
                                        id={elem.id}
                                        title={elem.title}
                                        image={elem.image}
                                        healthScore={elem.healthScore}
                                        diets={elem.diets}
                                    />
                                </Grid>
                            )
                        }
                        )}
                    </Grid>
                    {/*    {(display) ? <img src={loading4} alt='1' width={826} height={620}></img> : <></>} */}

                    <Grid item sx={{ backgroundColor: 'none', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant='outlined'
                            onClick={min}
                            sx={{ margin: 3 }}
                        >
                            PREV
                        </Button>
                        <Button
                            variant='outlined'
                            // onClick={() => setCurrentPage(currentPage + 1)}
                            onClick={max}
                            sx={{ margin: 3 }}
                        >
                            NEXT
                        </Button>

                    </Grid>
                </>
            )
        }
    }

    return (

        <Grid container
            sx={{
                /* backgroundImage: `url(${Image})`, */
                backgroundColor: '#ffffff',
                backgroundAttachment: 'fixed',
                display: 'flex',
                flexDirection: 'column',
            }}>

            <Grid item
                sx={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1
                }}>
                <Navbar
                    current={current}
                    update={update}
                />
                {/*  <Typography variant="h5" color="initial">WWW</Typography> */}
            </Grid>
            {dataDisplay()}
        </Grid>
    )
}
