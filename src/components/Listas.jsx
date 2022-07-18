import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import Divider from '@mui/material/Divider';

import CloudIcon from '@mui/icons-material/Cloud';
import DeckIcon from '@mui/icons-material/Deck';
import { Divider } from '@mui/material';




const Listas = () => {
  return (
    <div>
        <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                    <CloudIcon />
                </ListItemIcon>
                <ListItemText primary='mi primer elemento' />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <DeckIcon />
                </ListItemIcon>
                <ListItemText primary='mi segundo element' />
            </ListItem>
            <Divider />

        </List>
    </div>
  )
}

export default Listas