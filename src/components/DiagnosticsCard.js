import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


export default function MediaCard({diag}) {
    
    

  return (
    <Card sx={{ maxWidth: 800 }}>
        
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {diag.code}
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>URGENCY: </><Typography variant="h6" color="text.primary">{diag.urgency}</Typography>
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>DESCRIPTION:</> <Typography variant="h6" color="text.primary">{diag.urgency_desc}</Typography>
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>EFFECT ON VEHICLE:</> <Typography variant="h6" color="text.primary">{diag.effect_on_vehicle}</Typography>
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>RESPONSIBLE SYSTEM:</> <Typography variant="h6" color="text.primary">{diag.responsible_system}</Typography>
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>LAYMAN DEFINITON:</> <Typography variant="h6" color="text.primary">{diag.layman_definition}</Typography>
        </Typography>
        <Typography variant="h5" color="#2a387e">
          <>TECH DEFINITON:</> <Typography variant="h6" color="text.primary">{diag.tech_definition}</Typography>
        </Typography>
      </CardContent>
      
    </Card>
  );
}