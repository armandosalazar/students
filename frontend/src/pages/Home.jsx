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
import { Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const drawerWidth = 240;
const navItems = ['Inicio', 'Acerca de', 'Contactáctanos'];
const socket = io();

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useEffect(() => {
    socket.on('connection', () => {
      console.log('first');
    });
  }, []);

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
            style={{
              fontFamily: 'Feather',
              fontSize: '1.5rem',
              color: '#fff',
            }}
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
        <Card style={{ color: '#213547', width: 600, height: 'fit-content' }}>
          <CardContent>
            <Typography
              variant="h1"
              style={{
                fontFamily: 'Feather',
                fontSize: '2rem',
              }}
            >
              Students
            </Typography>
            <Typography style={{ paddingBottom: 20, paddingTop: 20 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              illum sunt tempora architecto laborum, enim sapiente dolores animi
              nostrum praesentium rerum cumque reiciendis nesciunt dolorum
              voluptatem hic deleniti velit autem?
            </Typography>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Button
                style={{
                  fontFamily: 'Feather',
                  backgroundColor: '#7ac70c',
                  color: '#fff',
                  borderRadius: 10,
                }}
                variant="contained"
              >
                Empezar
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

Home.propTypes = {
  window: PropTypes.func,
};

export default Home;
