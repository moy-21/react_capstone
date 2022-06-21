import { createTheme } from "@mui/material/styles";
import '@fontsource/dosis/300.css';
import '@fontsource/dosis/400.css';
import '@fontsource/dosis/500.css';
import '@fontsource/dosis/700.css';


export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#1a237e',
      },
      secondary: {
        main: '#fbc02d',
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