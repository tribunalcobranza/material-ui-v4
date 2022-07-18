import { createTheme } from "@mui/material/styles";
import purple from "@mui/material/colors/purple";
import lightGreen from "@mui/material/colors/lightGreen";


const theme = createTheme({
    palette: {
        primary: {
            main: lightGreen[900]
        },
        secondary: {
            main: purple[500]
        }
    }

})

export default theme;