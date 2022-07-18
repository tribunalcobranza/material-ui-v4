import React from 'react'
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
//import withWidth, { Button } from '@mui/material'


const Oculto = (props) => {
  return (
    <div>
        <Typography variant='h6' color='initial'>
            Ancho: {props.width}
        </Typography>

        <Hidden xsDown>
            <Button variant='contained' color='primary'>
                xs
            </Button>
        </Hidden>

    {/* oculta boton cuando sea inferior a sm */}
        <Hidden smDown>
            <Button variant='contained' color='primary'>
                sm
            </Button>
        </Hidden>
{/* 
        oculta boton cuando sea md o superior */}
        <Hidden mdUp>
            <Button variant='contained' color='primary'>
                md
            </Button>
        </Hidden>

        <Hidden only={['lg', 'md']}>
            <Button variant='contained' color='primary'>
                lg
            </Button>
        </Hidden>
    </div>
  )
}

export default Oculto