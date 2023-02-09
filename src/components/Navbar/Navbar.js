import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './const/NavbarListItems';
import { NavbarStyle } from './navStyle';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
          <Drawer
              sx={NavbarStyle.drawer}
              variant="permanent"
              anchor="left"
          >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item, index) => (
            <ListItem 
            button
            key={item.id}
            onClick={() => navigate(item.route)}
            >
                <ListItemIcon
                  sx={NavbarStyle.icons}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                sx={NavbarStyle.item} 
                primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        </Drawer>
      );
    };
    
    export default Navbar;