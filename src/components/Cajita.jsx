import { Box, Grid } from '@mui/material'
import React from 'react'


const Cajita = () => {
  return (
    <div>
       <Grid container>

        <Grid item xs={12} sm={6} md={4}>
               <Box border={2}>
                  xs12
                </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
               <Box border={2}>
                  xs12
                </Box>
        </Grid>

       </Grid>
    </div>
  )
}

export default Cajita