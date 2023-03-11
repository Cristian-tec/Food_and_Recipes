import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalDetail from './ModalDetail'

import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import axios from 'axios';
import { deleteRecipe } from '../redux/actions'



export default function Recipe2(props) {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [show, setShow] = useState(false)
    const [detail, setDetail] = useState({})


    const handleDetail = async (e) => {
        e.preventDefault();
        //console.log(props.id)
        //meter la action que me trae esos datos

        setShow(true)
        let detail1 = await axios((`/recipes/${props.id}`));
        setDetail(detail1.data)
        // console.log(detail1);        
        /* navigate(`/recipedetail/${props.id}`) */
    }
    const change = () => {
        setShow(false)
    }

    const buttonDelete = () => {
        if (props.id.length > 10) {
            // La receta esta en nuestra BBDD
            return (
                <Button
                    variant="outlined"
                    size="small"
                    endIcon={<DeleteIcon sx={{ color: 'red' }} />}
                    onClick={handleDeleteRecipe}
                >
                    Delete
                </Button>
            )
        }
    }

    const handleDeleteRecipe = () => {

        if (props.id) {
            //dispatch(deleteRecipe(props.id))
            //alert('recipe ID: ' + props.id)
            setOpen(true)
            alertDelete();
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        handleClose()
    }

    const handleDelete = () => {
        dispatch(deleteRecipe(props.id))
        handleClose()
    }

    const alertDelete = () => {

        return (
            <div>
                <Dialog
                    open={true}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    sx={{ width: 'auto', height: 'auto', margin: 'auto' }}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Are you sure you want to delete the recipe Name: " + props.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Click delete button, for eliminate recipe.
                            Or click cancel, for anulate operation.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions >
                        <Button
                            onClick={handleCancel}

                        >Cancel
                        </Button>

                        <Button
                            onClick={handleDelete}
                            autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        )
    }


    return (
        /* borderColor: '#021E39', borderStyle:'solid', borderWidth: 1 */
        <Card
            sx={{
                minWidth: 345,
                maxWidth: 345,
                minHeight: 405,
                display: 'flex',
                flexDirection: 'column',
                zIndex: 0,
                backgroundColor: '#ffffff',
            }}>
            <CardMedia
                component="img"
                alt={props.title}
                height="140"
                image={props.image}
            />

            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.title}

                </Typography>

                <Typography gutterBottom variant="subtitle1" component="div" sx={{ mb: -0.5 }}>
                    Diets:
                </Typography>

                <Typography variant="subtitle1" color="text.secondary" >
                    {props.diets?.join(' | ')}
                </Typography>

                <Box sx={{ display: 'flex', alignContent: 'center' }}>

                    <Typography gutterBottom variant="subtitle1" component="div">
                        Health:
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 0.5 }}>
                        {props.healthScore}
                    </Typography>

                </Box>
            </CardContent>

            <CardActions
                sx={{
                    position: 'absolute',
                    marginTop: 43,
                    marginLeft: 1,
                    zIndex: 0,
                }}
            >
                {/*   <Button size="small">Detail</Button> */}

                <Button
                    size="small"
                    variant='outlined'
                    onClick={handleDetail}
                    endIcon={<InfoIcon />}
                >Details</Button>
                {buttonDelete()}
                {(open) ? alertDelete() : <></>}
            </CardActions>
            {(show) ? <ModalDetail
                change={change}
                title={detail.title}
                summary={detail.summary}
                image={detail.image}
                stepToStep={detail.stepToStep}
                healthScore={detail.healthScore}
                diets={detail.diets}
            /> : <></>}
        </Card >
    );
}

