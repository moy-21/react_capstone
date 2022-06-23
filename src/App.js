import './App.css';
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
import ThemeSwitch from './components/ThemeSwitch'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import CarLookupForm from './forms/CarLookupForm'
import Box from '@mui/material/Box'
import SnackBar from './components/SnackBar'
import {Route, Routes} from 'react-router-dom'
import Login from './views/Login';
import Logout from './views/Logout';
import CarDecoder from './views/CarDecoder'
import CarListView from './views/CarListView'
import Home from './views/Home';
import {Paper, Typography} from '@mui/material'
import Register from './views/Register';
import Diagnostics from './views/Diagnostics';
import Warranty from './views/Warranty';

function App() {
  return (
  <>
    <SnackBar/>
    <ResponsiveAppBar/>
    <Box sx={{minHeight:'90vh', p:5}}>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path="/decode" element={<CarDecoder/>}/>
        <Route path="/carlist" element={<CarListView/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/diagnostics" element={<Diagnostics/>}/>
        <Route path="/warranty" element={<Warranty/>}/>



      </Routes>
      
    </Box>
    <Typography align="center"> Terms&Conditions About Contact </Typography>

  </>
  
  );
}

export default App;
