import React from 'react'
import ImageList from '../components/ImageList'
import {Paper, Typography, Box} from '@mui/material'
import Divider from '@mui/material/Divider';




export default function Home() {
  return (
    <>
    <Box >
    <Typography variant="h4" align="center" sx={{ mb:4, color:'inherit'}}>Overview</Typography>

    </Box>
    <Typography variant="h1"></Typography>
    <ImageList/>
   
    <Typography align="center" variant="h4" sx={{mt:3}}>CDA</Typography>
    <Divider variant="middle"/> 
    <Typography align="center" variant="h5"><li>This application is designed for normal car owners, private sellers, or small dealers.</li><br/><li>The main concept of this app is to have the ability to get provided information quickly without going to mechanic or shop or having to use expensive equipment/services.</li>  <br/> <li>CDA makes it hassle free without all the fees and struggles that a shop will put you through.</li>  <br/><li>This app is constructed for any device meaning very mobile friendly. CDA is a subscription based app but includes variety of free products.</li>  <br/><li>For now this app is designed for simple features like VIN Decoder, Car Diagnostics, Vehicle History Report, and Warranty Info. Many upcoming features are Premium and optional components in addition to this.</li>  <br/><li>Again this is just a prototype and in development many features could be added or removed.</li>  </Typography>
    <br/>
    <br/>
    <Box></Box>
    <br/>
    <br/>
    <br/>
    </>
    
  )
}
