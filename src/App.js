import './App.css';
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
import ThemeSwitch from './components/ThemeSwitch'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import CarLookupForm from './forms/CarLookupForm'
import Box from '@mui/material/Box'
import SnackBar from './components/SnackBar'

function App() {
  return (
  <>
    <SnackBar/>
    <ResponsiveAppBar/>
    <Box sx={{minHeight:'90vh', p:5}}>
      <LoginForm/>
    </Box>

  </>
  
  );
}

export default App;
