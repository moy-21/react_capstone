import { useContext } from 'react';
import CarList from '../components/CarList'
import { AppContext } from '../context/AppContext'
import {Paper, Typography} from '@mui/material'


export default function CarListView() {
    const {carList, setAlert, user} = useContext(AppContext)

    if (!user.token){
        return(
            <Typography variant="h3" sx={{m:5, p:5, justifyContent:"center"}}> Login To View List </Typography>
        )
    }

    if (carList.length<=0){
        return(
            <Typography variant="h3" sx={{m:5, p:5, justifyContent:"center"}}>Your List Is Empty</Typography>
        )
    }

  return (
    <Paper sx={{m:5, p:5, justifyContent:"center"}}>
    <Typography variant="h4">My Vehicles</Typography>
    <CarList/>
    </Paper>
  )
}
