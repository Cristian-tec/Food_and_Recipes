import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: {
            /* main: purple[500] */
            main:'#1976d2',
        },
        secondary:{
            main:'#ffffff'
        }
    },
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
})

export default theme;