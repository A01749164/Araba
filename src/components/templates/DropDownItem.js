// Creado por Fernando Nava
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ListItem, ListItemButton, ListItemText, ListItemIcon, Typography } from '@mui/material';


export default function DropDownItem(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ListItem key = {props.text} disablePadding>
        <ListItemButton
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color='primary'
        onClick={handleClick}
        >
            <ListItemIcon>
              <img src={props.icon} alt='img'/>
            </ListItemIcon>
            <ListItemText primary= {
              <Typography textAlign="center">
                {props.text}
              </Typography>} />
        </ListItemButton>
        
      
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {props.options.map((text) => (
          <MenuItem onClick={handleClose}>{text}</MenuItem>
        ))}
      </Menu>
      </ListItem>
  );
}
