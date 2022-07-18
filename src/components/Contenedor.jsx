import { Hidden, makeStyles } from '@mui/material'
import React from 'react'
import Cajita from './Cajita'
import Cajon from './Cajon'
import NavBar from './NavBar'


const estilos = makeStyles(theme => ({
    root:{
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },

}))

const Contenedor = () => {
    const classes = estilos()
    const [abrir, setAbrir] = React.useState(false)

const accionAbrir = () => {
    setAbrir(!abrir)
}

  return (
    <div className={classes.root}>
        <NavBar accionAbrir={accionAbrir} />
        <Hidden xsDown>
            <Cajon 
                variant='permanent'
                open={true}
            />
        </Hidden>   
        <Hidden xsUp>
            <Cajon 
                variant='temporary'
                open={abrir}
                onClose={accionAbrir}
            />
        </Hidden>  
        <div className={classes.content}>
            <div className={classes.toolbar}> </div>
            <Cajita />            
        </div>
    </div>
  )
}

export default Contenedor