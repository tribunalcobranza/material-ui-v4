import { Divider, Drawer, makeStyles } from '@mui/material'
import React from 'react'
import Listas from './Listas'



const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
      },
      drawerPaper: {
        width: 240,
      },
      toolbar: theme.mixins.toolbar,
}))

const Cajon = (props) => { //PROPS ENVIADO DESDE CONTENEDOR.JSX
    const classes = estilos()

  return (
    <Drawer
        className= {classes.drawer}       
        classes={{
            paper: classes.drawerPaper,
          }}
        anchor="left"
        variant={props.variant}
        open={props.open}
        onClose={props.onClose ? props.onClose : null} //SI ONCLOSE EXISTE. EN CASO CONTRARIO
    >
        {/* se va a generar el espaciado */}
        <div className={classes.toolbar}></div>
        {/* divider solo coloca una linea */}
        <Divider />
        <Listas />
    </Drawer>
  )
}

export default Cajon