import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Home.module.css';
import { Card, CardContent, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Inicio', 'Acerca de', 'Contactáctanos'];

function Login(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className={styles.home}
      style={{ minHeight: '100vh' }}
      sx={{ display: 'flex' }}
    >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            style={{ fontFamily: 'Feather', fontSize: '1.5rem', color: '#fff' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Students
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Link style={{ textDecoration: 'none' }} to="/login">
              <Button
                sx={{ color: '#fff', fontFamily: 'Feather', fontSize: '1em' }}
              >
                Iniciar sesión
              </Button>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/register">
              <Button
                sx={{ color: '#fff', fontFamily: 'Feather', fontSize: '1em' }}
              >
                Registrarse
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ p: 3 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          marginTop: 100,
        }}
      >
        <Toolbar />
        <Card style={{ color: '#213547', width: 400, height: 'fit-content' }}>
          <CardContent>
            <Typography
              variant="h1"
              style={{
                fontFamily: 'Feather',
                fontSize: '2rem',
              }}
            >
              Iniciar sesión
            </Typography>
            <Box style={{ marginTop: 20 }}>
              <form>
                <TextField
                  id="email"
                  label="Correo"
                  type="email"
                  variant="outlined"
                  style={{ width: '100%', marginBottom: '20px' }}
                  required
                />
                <TextField
                  id="password"
                  label="Contraseña"
                  type="password"
                  variant="outlined"
                  style={{ width: '100%', marginBottom: '20px' }}
                  required
                />
                <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      fontFamily: 'Feather',
                      backgroundColor: '#7ac70c',
                      color: '#fff',
                      borderRadius: 10,
                      width: '100%',
                      padding: '10px',
                    }}
                    variant="contained"
                  >
                    Iniciar sesión
                  </Button>
                </Link>
              </form>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

Login.propTypes = {
  window: PropTypes.func,
};

export default Login;
