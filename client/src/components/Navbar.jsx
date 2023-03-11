import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import '../styles/navbarmedia.css'
import { Link } from 'react-router-dom';
import { Reorder } from '@mui/icons-material'
import { Search } from '@mui/icons-material'
import logo from '../img/logoFood.png'
import Filter from './Filter'
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';

import {
    searchRecipes,
    searchRecipesDiet,
    orderScore,
    orderAlph,
    filterReset,
    cleanRecipe
} from '../redux/actions'



export default function Navbar({ current, update }) {

    const [showLinks, setShowLinks] = useState(false)
    const [filter, setFilter] = useState(false);

    const dispatch = useDispatch();

    const handleMenu = () => {
        setShowLinks(!showLinks)
        setFilter(false)
    }

    // -------- ANIMACION ------------
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        setChecked(true)
    }, [])
    //---------------------------------

    let a = '';
    const [input, setInput] = useState(
        {
            texto: ''
        })

    const handleSearch = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        setInput({ ...input, [property]: value })
        //console.log(input.texto);
    }

    const search = () => {
        //console.log(input);
        if (input.texto !== '') dispatch(cleanRecipe())
        dispatch(searchRecipes(input.texto));
        setInput({ texto: '' })
        if (filter) {
            dispatch(filterReset(true));
        }
        current(); // Para que la busqueda siempre quede en la pagina uno

    }

    const handleFilter = () => {
        setFilter(!filter)
        setShowLinks(false); // Hace desaparecer el menu
    }

    window.addEventListener("resize", function () {
        // tu código aquí

        if (window.screen.width > 720) {
            setShowLinks(false);// Hace desaparecer el menu si la pantalla es mayor a 720px
        }
        //console.log('La resolucion es: ' + window.screen.width);
    });

    return (
        <>
            <Grow
                in={checked}
                style={{ transformOrigin: '0 0 0 0' }}
                {...(checked ? { timeout: 800 } : {})}
            >
                <div className='navbar'>
                    <div className='leftSide'>
                        <div className='logo'>
                            <img src={logo} alt="1" />
                        </div>
                        <div className='links' id={showLinks ? "hidden" : ""}>
                            <Link to='/'>Home</Link>
                            <button onClick={handleFilter}>Filter</button>
                            <a href="https://portfolio-two-plum-34.vercel.app/" target="_blank">About</a>
                        </div>
                        <button onClick={handleMenu} className='buttonLinks'>{" "}<Reorder /></button>
                    </div>

                    <div className='rightSide'>
                        <input name='texto' type="text" onChange={handleSearch} value={input.texto} placeholder='Search...' />
                        <button className='buttonSearch' onClick={search}><Search /></button>
                    </div>
                </div>
            </Grow>
            <Grow
                in={filter}
                style={{ transformOrigin: '0 0 0 0' }}
                {...(filter ? { timeout: 500 } : {})}
            >

                <Box>
                    {(filter) ? <Filter current={current} update={update} /> : <></>}
                </Box>

            </Grow>
        </>
    )
}
