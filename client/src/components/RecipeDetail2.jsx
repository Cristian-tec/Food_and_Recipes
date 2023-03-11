import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRecipeDetail, cleanDetail } from '../redux/actions'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';


const RecipeDetail = (props) => {

    // Todo esto para no hacer mapToProps y dispatchToProps

    const dispatch = useDispatch();
    const { id } = useParams();
    //props.match.params.id
    console.log(id + '<--');

    useEffect(() => {
        dispatch(getRecipeDetail(id));

        return function () { // esto se eejcuta cuando se desmonta el componente
            dispatch(cleanDetail());
        };

    }, [dispatch, id])


    const recipeDetail = useSelector(state => state.recipeDetail)


    return (
        <Grid container spacing={0}>

            <Grid item sx={{ display: 'flex' }}>
            
                <Box height={50}>
                    <img src={recipeDetail.image} alt="1" />
                </Box>
                <Box>
                    <Box>
                        <Typography
                            variant="h6"
                            color="initial"
                            ml={1}
                        >Summary: </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            ml={1}
                        >{recipeDetail.summary?.replace(/<[^>]*>?/g, "")}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            color="initial"
                            ml={1}
                        >Diets: </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            ml={1}
                        >{recipeDetail.diets?.map(elem => ((elem[0].toUpperCase() + elem.substr(1))) + ' - ')}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            color="initial"
                            ml={1}
                        >Steps: </Typography>
                        <Typography
                            variant="body1"
                            color="initial"
                            ml={1}
                        > {recipeDetail.stepToStep?.map(elem => {
                            return (
                                <>
                                <p key={elem}>
                                    {elem}
                                </p><br/>
                                </>
                            )
                        })}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            {/* palabras[i][0].toUpperCase() + palabras[i].substr(1) */}
        </Grid>

    )
}

export default RecipeDetail;

/* 
 <div>
            <h3>Title:</h3> <h1>{recipeDetail.title}</h1>
            <img src={recipeDetail.image} alt="" />
            <h3>Diets: </h3> <p>{recipeDetail.diets?.map(elem => ' | ' + elem + ' | ')}</p>
            <h3>Summary:</h3> <p>{recipeDetail.summary?.replace(/<[^>]*>?/g, "")}</p>
            <h3>Steps:</h3>
            {recipeDetail.stepToStep?.map(elem => {
                return (
                    <p key={elem}>
                        {elem}
                    </p>
                )
            })}
            <Link to='/home'>
                <button>Back to home</button>
            </Link>

            <br /><br />
        </div>

        <Typography
                        variant="h5"
                        color="initial"
                    >{recipeDetail.title}</Typography>
*/