import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
//import makeStyles from '@mui/material/makeStyles'
import MenuIcon from '@mui/icons-material/Menu'
import { Button, IconButton, makeStyles } from '@mui/material'


 const useStyles = makeStyles(theme => ({    
        MenuButton: {
            marginRigth: theme.spacing(2),
            [theme.breakpoints.up('sm')]:{
                display: 'none',
            },
        },
        title: { //flexbox. tira el login al lado izquierdo
             flexGrow: 1
        },
        appBar: {
            [theme.breakpoints.up('sm')]:{
                 width: `calc(100% - ${240}px)`,
                 marginRight: 240,
              },
        },
    }))

const NavBar = (props) => { //props que viene de Contenedor
    const classes = useStyles()
  return (   
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton 
                color='inherit' 
                area-label='menu'
                className={classes.MenuButton}
                onClick={() => props.accionAbrir()}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} >
                BLUEWEB
            </Typography>
            <Button variant='text' color='inherit'>
                Login
            </Button>
          </Toolbar>
        </AppBar>            
  )
}

export default NavBar