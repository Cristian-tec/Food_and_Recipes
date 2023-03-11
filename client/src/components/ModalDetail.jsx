import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import loading from '../img/cargando2.gif'

import {
    Card,
    ImageListItem,
} from '@mui/material';

export default function ModalDetail({ change, title, image, summary, stepToStep, healthScore, diets }) {

    const [open, setOpen] = React.useState(true);
    const [scroll, setScroll] = React.useState('paper');
    //console.log('MODAL EJECUTANDOSE');


    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
        change();
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

    if (title) {
        return (
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                key={25}
            >
                <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <Card>
                        <ImageListItem sx={{ height: '100% !important' }}>
                            <img src={image} alt="1" />
                        </ImageListItem>
                    </Card>

                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        mt={2}
                    >
                        <b>Healt: </b>{healthScore}<br />
                        <b>Diets: </b>{diets?.map(elem => ((elem[0].toUpperCase() + elem.substr(1))) + ' - ')}<br />
                        <b>Summary: </b>{summary?.replace(/<[^>]*>?/g, "")}<br />
                        <b>Step to step: </b><br />{stepToStep?.map(elem => {
                            return (
                                <>
                                    {elem}
                                    <br />
                                </>
                            )
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    {/* <Button onClick={handleClose}>Subscribe</Button> */}
                </DialogActions>
            </Dialog>
        );
    } else {
        return (

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Loading...</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>

                    <Box item sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={loading} alt="loading..." />
                    </Box>

                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                        mt={1}
                    >
                        <b>Healt: </b>Loading...<br />
                        <b>Diets: </b>Loading...<br />
                        <b>Summary: </b>Loading...<br />
                        <b>Step to step: </b><br />Loading...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>

        );
    }
}