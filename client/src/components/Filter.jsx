import React from 'react'
import { useState } from 'react';
import { Grid, Typography } from '@mui/material'
import { makeStyles, Button } from '@mui/material';
import { useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux'
import { searchRecipesDiet, orderAlph, orderScore } from '../redux/actions'
import { filterReset } from '../redux/actions'
import ModalCreate from './ModalCreate'

export default function Filter({ current, update }) {

    const dispatch = useDispatch();
    const filterFlag = useSelector((state) => state.filterReset)

    const [input, setInput] = useState(
        {
            title: '',
            diets: '',
            orderS: '',
            orderA: '',
            test: ''
        }
    );

   // console.log(input)
    const changeHandler = (e) => {

        const property = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [property]: value })
        // console.log(property, value);

        if (property === 'diets') {
            dispatch(searchRecipesDiet(value))
        }

        if (property === 'orderA') {
            if (value === 'asc') {
                dispatch(orderAlph('asc'))
            } else {
                dispatch(orderAlph('desc'))
            }
            update(); // No entiendo porque no me toma el cambio y actualiza
        }             // sino no deberia usar este update

        if (property === 'orderS') {
            if (value === 'asc') {
                dispatch(orderScore('asc'))
            } else {
                dispatch(orderScore('desc'))
            }
            update(); // No entiendo porque no me toma el cambio y actualiza
        }

        current(); // Para setear siempre en la pagina uno
    }

    if (filterFlag) {
        //console.log('Filtro resetiado');
        setInput({
            title: '',
            diets: '',
            orderS: '',
            orderA: '',
            test: ''
        })
        dispatch(filterReset(false));
    }

    useEffect(() => {

    }, [])

    const [showCreate, setShowCreate] = useState(false)
    const handleCreate = () => {
       // console.log('sapeeee');
        setShowCreate(true)
    }

    const closeModalCreate = (state) => {
        setShowCreate(state)
    }

    return (
        <Grid container
            /* mt={7.5} *//* 7.5 */
            /*mb={50} -5.6 */
            sx={{
                /* width: '98.9vw', */
                /* height: 'auto', */
                backgroundColor: '#021E39',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                /* position: 'fixed', */
                zIndex: 1,
            }}
        >

            <Grid item >
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#ffffff'
                            },
                        }}
                    >Diet</InputLabel>
                    <Select
                        variant='outlined'
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        name='diets'
                        value={input.diets}
                        onChange={changeHandler}
                        sx={{
                            width: 150,
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white'
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(255, 255, 255)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(17, 255, 0)',
                            },

                        }}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value='vegan'>Vegan</MenuItem>
                        <MenuItem value='vegetarian'>Vegetarian</MenuItem>
                        <MenuItem value='pescetarian'>Pescetarian</MenuItem>
                        <MenuItem value='lacto ovo vegetarian'>Lacto-Vegetarian</MenuItem>
                        <MenuItem value='ketogenic'>Ketogenic</MenuItem>
                        <MenuItem value='paleo'>Paleo</MenuItem>
                        <MenuItem value='primal'>Primal</MenuItem>
                        <MenuItem value='low FODMAP'>Low FODMAP</MenuItem>
                        <MenuItem value='whole 30'>Whole 30</MenuItem>
                        <MenuItem value='paleolithic'>Paleolithic</MenuItem>
                        <MenuItem value='dairy free'>Dairy Free</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item >
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                        id="demo-simple-select-label"
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#ffffff'
                            },
                        }}
                    >Alph. Order</InputLabel>
                    <Select
                        variant='outlined'
                        label="Alph. Order"
                        name="orderA"
                        value={input.orderA}
                        onChange={changeHandler}
                        sx={{
                            width: 150,
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white'
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(255, 255, 255)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(17, 255, 0)',
                            },

                        }}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value='asc'>Upward</MenuItem>
                        <MenuItem value='desc'>Falling</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item >
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel
                        sx={{
                            color: 'white',
                            '&.Mui-focused': {
                                color: '#ffffff'
                            },
                        }}
                    >Score Order</InputLabel>
                    <Select
                        variant='outlined'
                        label="Score Order"
                        name="orderS"
                        value={input.orderS}
                        onChange={changeHandler}
                        sx={{
                            width: 150,
                            color: 'white',
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'white'
                            },
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(255, 255, 255)',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgb(17, 255, 0)',
                            },

                        }}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value='asc'>Upward</MenuItem>
                        <MenuItem value='desc'>Falling</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item >
                <Button
                    variant="outlined"
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        fontSize: 16,
                        height: 40,
                        width: 150,
                        textTransform: 'none',
                        '&.MuiButton-root:hover': {
                            borderColor: 'rgb(17, 255, 0)',
                        }
                    }}
                    onClick={handleCreate}
                >
                    Create Recipe
                </Button>
            </Grid>
            <Grid item>
                {(showCreate) ? <ModalCreate closeModalCreate={closeModalCreate} update={update}/> : <></>}
            </Grid>
        </Grid>
    )
}

