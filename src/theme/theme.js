import { createTheme } from "@mui/material/styles";
import {blue, green} from '@mui/material/colors'

const theme = createTheme({
    palette : { 
    primary : {
        main : green[900],
    },
    secondary : {
        main : blue[500]
    }
    }
})

export default theme