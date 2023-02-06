import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import { mainNavbarItems } from './const/NavbarListItems';
;

const Navbar = () => {

  return (
    <div>
    <Toolbar />
    <Divider />
    <List>
      {mainNavbarItems.map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {text.icon}
            </ListItemIcon>
            <ListItemText primary={text.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
  </div>
  );
};

export default Navbar;