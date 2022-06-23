import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppContext } from '../context/AppContext'

export default function MediaCard({car, img}) {
    
    const {addFavorite, removeFavorite, removeAllFavorite, user} = React.useContext(AppContext)

  return (
    <Card sx={{width:"100%"}}>
        {img?
        <CardMedia
            component="img"
            image={img}
            alt="car image"
            sx={{width:"80%"}}
        />
        :
        <></>
        }
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {car.year}
        </Typography>
        <Typography variant="h5" color="text.primary">
          {car.make} {car.model}
        </Typography>
        <Typography variant="h5" color="text.primary">
          MANUFACTURER: {car.manufacturer}
        </Typography>
        <Typography variant="h5" color="text.primary">
          ENGINE:{car.engine}
        </Typography>
        <Typography variant="h5" color="text.primary">
          TRIM: {car.trim}
        </Typography>
        <Typography variant="h5" color="text.primary">
          TRANSMISSION: {car.transmission}
        </Typography>
      </CardContent>
      {user.token?
        <CardActions>
            <Button sx={{width:"100%"}} key="favorite" onClick={()=>{addFavorite(car)}}>Save</Button>
        </CardActions>
      :
        <></>
    }
    </Card>
  );
}