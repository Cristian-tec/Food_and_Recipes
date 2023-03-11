import * as React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { checkErrors } from '../control/control';
import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { searchRecipes } from "../redux/actions"
import { useDispatch } from 'react-redux'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'vegan',
    'vegetarian',
    'gluten free',
    'pescetarian',
    'lacto ovo vegetarian',
    'ovo vegetarian',
    'ketogenic',
    'paleo',
    'primal',
    'low FODMAP',
    'whole 30',
    'paleolithic',
    'dairy free'
];
function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function ModalCreate({ closeModalCreate, update }) {

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(true);
    const [scroll, setScroll] = React.useState('paper');
    //console.log('MODAL EJECUTANDOSE');

    const [input, setInput] = useState({
        title: '',
        summary: '',
        healthScore: '',
        stepToStep: ['', ''],
        image: '',
        diets: [],
    })

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        closeModalCreate(false);
    };

    const [open2, setOpen2] = React.useState(true);
    const handleClose2 = () => {
        setOpen2(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    // ----------------------SELECT ---------------
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {

        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        setInput({ ...input, diets: event.target.value })

    };
    //console.log(input);

    const changeHandler = (e) => {

        const property = e.target.name; //aca capturo el name del input en el que escriba
        const id = e.target.id; // Este lo uso para poder identificar en que lugar del arreglo debo guardar 
        const value = e.target.value;

        if (property === 'stepToStep' && id === 'StepOne') {
            // console.log('entrando 1');
            setInput({ ...input, stepToStep: [value] });
        } else if (property === 'stepToStep' && id === 'StepTwo') {
            // console.log('entrando 2');
            //setInput({ ...input, stepToStep: [...input.stepToStep, ('2)' + value)] })
            setInput({ ...input, stepToStep: [input.stepToStep[0], value] })
        } else {
            setInput({
                ...input,
                [property]: value
            })
        }
    }

    let a = checkErrors(input);
    let createButton = true;
    // console.log(a);

    const check = (input) => {
        if (input === 'title' && a.title === 'ok') {
            return (
                <>
                    <CheckCircleIcon fontSize="medium" sx={{ color: 'green', marginTop: 2.5, marginRight: 1 }} />
                </>
            )
        }

        if (input === 'healthScore' && a.healthScore === 'ok') {
            return (
                <>
                    <CheckCircleIcon fontSize="medium" sx={{ color: 'green', marginTop: 2.5, marginRight: 1 }} />
                </>
            )
        }

        if (input === 'summary' && a.summary === 'ok') {
            return (
                <>
                    <CheckCircleIcon fontSize="medium" sx={{ color: 'green', marginTop: 2.5, marginRight: 1 }} />
                </>
            )
        }

        if (input === 'diets' && a.diets === 'ok') {
            return (
                <>
                    <CheckCircleIcon fontSize="medium" sx={{ color: 'green', marginTop: 2.5, marginRight: 1 }} />
                </>
            )
        }

        if (a.title === 'ok' && a.healthScore === 'ok' && a.summary === 'ok' && a.diets === 'ok' && a.stepToStep === 'ok') {
            createButton = false;
        }

        if (input === 'stepOne' && a.stepToStep === 'ok') {
            return (
                <>
                    <CheckCircleIcon fontSize="medium" sx={{ color: 'green', marginTop: 2.5, marginRight: 1 }} />
                </>
            )
        }

    }

    const loadImage = () => {
        if ((/(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/g).test(input.image)) {
            return (
                <Grid item mb={2}>
                    <CardMedia
                        sx={{ height: 120 }}
                        image={input.image}
                        title="green iguana"
                    />
                </Grid>
            )
        } else {
            return <></>
        }
    }

    const [enable, setEnable] = useState(true);

    const test = () => { //para mostrar el segundo step
        if (input.stepToStep[0] === '') {
            setEnable(true)
        } else {
            setEnable(false)
        }
    }

    const [flag, setFlag] = useState(false)

    const handleCreate = async () => {
        //console.log(input);
        //dispatch(createRecipe(input))  //bver como acceder a los datos de crete recipe

        const created = await axios.post('/recipes', input)
        if (created.data.title) {
            dispatch(searchRecipes(''));
          
            setFlag(true)
            setInput({
                title: '',
                summary: '',
                healthScore: '',
                stepToStep: ['', ''],
                image: '',
                diets: [],
            })
            setPersonName([])
        }
    }

    useEffect(() => {  //este para habilitar o deshabilitar el step2
        test();
    }, [input])

    const alertCreate = () => {

        if (flag) {

            return (
                <div>
                    <Dialog
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Food Api - Recipes"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Your recipe has been created successfully.
                                Do you want to create a new recipe?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose2}>New Recipe</Button>
                            <Button onClick={handleClose} autoFocus>
                                No, thanks!
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>)
        } else {
            return (<></>)
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">CREATE RECIPE</DialogTitle>
                <DialogContent dividers={scroll === 'paper'} sx={{}}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        mt={1}
                    >
                        <Grid container sx={{ display: 'flex', flexDirection: 'column' }}>
                            {loadImage()}
                            <Grid item sx={{ display: 'flex' }}>
                                <TextField
                                    id="standard-basic"
                                    label="Recipe Title"
                                    variant="standard"
                                    name='title'
                                    value={input.title}
                                    onChange={changeHandler}
                                    sx={{ marginRight: 1 }}
                                    placeholder='Min four characters'
                                />
                                <Box sx={{ width: 30 }}>
                                    {check('title')}
                                </Box>
                                <TextField
                                    id="standard-basic"
                                    label="Health Score"
                                    type='number'
                                    variant="standard"
                                    placeholder='0 - 100'
                                    name='healthScore'
                                    onChange={changeHandler}
                                    sx={{ marginRight: 1 }}
                                    value={input.healthScore}
                                />
                                <Box sx={{ width: 30 }}>
                                    {check('healthScore')}
                                </Box>
                            </Grid>
                            <Grid item mt={1} sx={{ display: 'flex' }}>
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Summary"
                                    multiline
                                    name='summary'
                                    value={input.summary}
                                    onChange={changeHandler}
                                    maxRows={4}
                                    placeholder='Min. twenty characters'
                                    variant="standard"
                                    fullWidth
                                    sx={{ marginRight: 1 }}
                                />
                                <Box sx={{ width: 30 }}>
                                    {check('summary')}
                                </Box>
                            </Grid>
                            <Grid item mt={2} sx={{ display: 'flex' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-multiple-name-label">Diets</InputLabel>
                                    <Select
                                        labelId="demo-multiple-name-label"
                                        id="demo-multiple-name"
                                        multiple
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput label="Diets" />}
                                        placeholder='Max 3 diets'
                                        MenuProps={MenuProps}
                                        sx={{ marginRight: 1 }}
                                    //sx={{height:50}}
                                    >
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <Box sx={{ width: 30 }}>
                                    {check('diets')}
                                </Box>
                            </Grid>

                            <Grid item mt={1} sx={{ display: 'flex' }}>
                                <TextField
                                    id="standard-basic"
                                    label="Image"
                                    name='image'
                                    variant="standard"
                                    value={input.image}
                                    onChange={changeHandler}
                                    placeholder='http://w...'
                                    fullWidth
                                />
                                <Box sx={{ width: 30 }}>

                                </Box>
                            </Grid>
                            <Grid item mt={1} sx={{ display: 'flex' }}>
                                <TextField
                                    id="StepOne"
                                    label="StepOne"
                                    variant="standard"
                                    name='stepToStep'
                                    onChange={changeHandler}
                                    placeholder='Step number one'
                                    sx={{ marginRight: 1 }}
                                    value={input.stepToStep[0]}
                                />
                                <Box sx={{ width: 30 }}>
                                    {check('stepOne')}
                                </Box>
                                <TextField
                                    id="StepTwo"
                                    label="StepTwo"
                                    variant="standard"
                                    name='stepToStep'
                                    onChange={changeHandler}
                                    placeholder='Step number two'
                                    disabled={enable}
                                    value={input.stepToStep[1]}
                                />
                            </Grid>
                        </Grid>


                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleCreate}
                        disabled={createButton}
                    >Create Recipe</Button>
                    {alertCreate()}
                    <Button
                        onClick={handleClose}
                    >Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
