// Creado por Fernando Nava
import { Divider, Drawer, List, ListItem, ListItemButton,
ListItemText, Stack, Toolbar, Box, Typography, ListItemIcon } from '@mui/material'
import React from 'react';
import DropDownItem from './DropDownItem';
import logoARABA from '../../images/logoARABA.png'
import carIcon from '../../images/car-02.png'
import groupIcon from '../../images/Group.png'
import ajustes from '../../images/ajustes.png'
import ayuda from '../../images/ayuda.png'
import out from '../../images/out.png'


const drawerWidth = 240

const SideBar = (props) => {
    const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <List disablePadding>
            <Toolbar>
                <Stack
                sx={{width: "100%"}}
                direction = "row"
                justifyContent = "center">
                    <img src = {logoARABA} alt='LOGO' width="200px" height="80px" style={{paddingBottom: "15px", paddingTop: "15px"}}/>
                </Stack>
            </Toolbar>
            <Divider/>
            <ListItem>
                <ListItemButton sx ={{
                    borderRadius:"30px",
                    backgroundColor: '#d9d9d9'
                }}>
                    <ListItemText primary= {
                        <Typography textAlign="center">
                            Mi espacio
                        </Typography>} />
                </ListItemButton>
            </ListItem>
            <DropDownItem text = "Pruebas de Manejo" options = {[ "Salvenme", "Me estan", "Matando"]} icon = {carIcon}/>
            <DropDownItem text = "Compra de auto" options = {[ "Porfavor", "Llamen", "a la", "Policia"]} icon = {groupIcon}/>
        </List>
  )

  const drawerU = (
    <List disablePadding>
            <Toolbar>
                <Stack
                sx={{width: "100%"}}
                direction = "row"
                justifyContent = "center">
                    <img src = {logoARABA} alt='LOGO' width="200px" height="80px" style={{paddingBottom: "15px", paddingTop: "15px"}}/>
                </Stack>
            </Toolbar>
            <Divider/>
            <ListItem>
                <ListItemButton sx ={{
                    borderRadius:"30px",
                    backgroundColor: '#d9d9d9'
                }}>
                    <ListItemText primary= {
                        <Typography textAlign="center">
                            Inicio
                        </Typography>} />
                </ListItemButton>
            </ListItem>
            <DropDownItem text = "Gestion de Solicitudes" options = {[ "Salvenme", "Me estan", "Matando"]} icon = {groupIcon}/>
            <DropDownItem text = "Enviar Notificaciones" options = {[ "Porfavor", "Llamen", "a la", "Policia"]} icon = {groupIcon}/>
            <DropDownItem text = "Agencias Registradas" options = {[ "Porfavor", "Llamen", "a la", "Policia"]} icon = {groupIcon}/>
            <DropDownItem text = "Estadisticas Agencias" options = {[ "Porfavor", "Llamen", "a la", "Policia"]} icon = {groupIcon}/>
            <DropDownItem text = "Comisiones" options = {[ "Porfavor", "Llamen", "a la", "Policia"]} icon = {groupIcon}/>
        </List>
  )

  const drawerBottom = (
    <div style={{
        width: drawerWidth,
        position: 'fixed',
        bottom: '0'
        }}>
        <Divider/>
        {['Ajustes', "Ayuda", "Cerrar Sesion"].map((text, index) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    {index === 0 ? <img src={ajustes} alt='icon'/> : 
                    index === 1 ? <img src={ayuda} alt='icon'/> : <img src={out} alt='icon'/>}
                </ListItemIcon>
                <ListItemText primary= {
                    <Typography textAlign="center">
                        {text}
                    </Typography>} />
            </ListItemButton>
            </ListItem>
        ))}
    </div>
  )


  return (
    <Box sx={{ display: 'flex' }}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
            container={container}
            variant="temporary"
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
            {drawerBottom}
        </Drawer>
  </Box>
);
}



export default SideBar;