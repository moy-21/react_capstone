import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({car, img}) {
    

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="car image"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {car.year}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {car.make} {car.model}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Manufacturer: {car.manufacturer}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {car.engine}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {car.trim}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {car.transmission}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Save</Button>
      </CardActions>
    </Card>
  );
}