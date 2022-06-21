import { createTheme } from "@mui/material/styles";


export const themeOptions = {
    palette: {
      type: 'dark',
      mode: 'dark',
      primary: {
        main: '#1a237e',
      },
      secondary: {
        main: '#fbc02d',
      },
      background: {
        default: '#121212',
        paper: '#121212',
      },
    },
    typography: {
      fontFamily: 'Dosis',
      fontSize: 15,
      fontWeightLight: 300,
    },
    props: {
      MuiTooltip: {
        arrow: true,
      },
    },
  };

  const theme=createTheme(themeOptions);
  export default theme