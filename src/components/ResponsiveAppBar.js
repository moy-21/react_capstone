import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { AppContext } from '../context/AppContext';
import ThemeSwitch from './ThemeSwitch'
import {Link} from 'react-router-dom';


const pages = [{label:'Vehicle Search',path:'/decode', key:'1'},
{label:'History Report',path:'/login', key:'2'}, {label:'Warranty',path:'/warranty', key:'3'}, {label:'Diagnostics',path:'/diagnostics', key:'4'}];
const settings = [{label:'My List',path:'/carlist', key:'3'},
{label:'Account',path:'/register', key:'4'}];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user} = React.useContext(AppContext)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' style={{display:"flex", color:'inherit', textDecoration:'none'}}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} ><img src='../carlogo2.png' width="300" height="150"></img></Box>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'dosis',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Link to={page.path} style={{display:"flex", color:'inherit', textDecoration:'none'}}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Box justifyContent="flex-center" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} ><img src='../android-chrome-192x192.png' width="100" height="100"></img></Box>

          </Typography>
        
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.key} to={page.path} style={{display:"flex", color:'inherit', textDecoration:'none'}}>
                <Button
                  key={page.key}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.label}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              
                  <Avatar alt={user.first_name} src="/static/images/avatar/2.jpg" />
                
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              {settings.map((setting) => (
                <MenuItem key={setting.key} onClick={handleCloseUserMenu}>
                  <Link to={setting.path} style={{display:"flex", color:'inherit', textDecoration:'none'}}>
                    <Typography textAlign="center">{setting.label}</Typography>
                  </Link>
                </MenuItem>
                
                
              ))}
              {user.token?
                <MenuItem key={'logout'}><Link to="/logout" style={{ display:"flex", color:"inherit", underline:"none", textDecoration:'none'}} >Logout</Link></MenuItem>
              :
                <MenuItem key={'login'}><Link to="/login" style={{ display:"flex", color:"inherit", underline:"none", textDecoration:'none'}} >Login</Link></MenuItem>
              }
            </Menu>
          </Box>
          <Box sx= {{p:2}}>
          <ThemeSwitch/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;