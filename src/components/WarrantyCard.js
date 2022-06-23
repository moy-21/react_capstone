import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function MediaCard({info}) {
   
    

  return (
    <Card sx={{ maxWidth: 800 }}>
        
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          <>{info.type}</>
        </Typography>
        <Typography variant="h5" color="text.primary">
          <>MILES: {info.max_miles}</>
        </Typography>
        <Typography variant="h5" color="text.primary">
          <>YEARS: {info.max_year}</>
        </Typography>
        <Typography variant="h5" color="text.primary">
          <>NOTE: {info.note}</>
        </Typography>
        <Typography variant="h5" color="text.primary">
          <>TRANSFERABLE: {info.transferable.toString()}</>
        </Typography>
      </CardContent>
      
    </Card>
  );
}