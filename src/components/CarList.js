import React, {useContext, useEffect, useState} from 'react';
import { AppContext } from '../context/AppContext';
import CarCard from './CarCard'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function CarList() {
    const {carList} = useContext(AppContext)

    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid rowSpacing={1} container spacing ={2}>
                {carList?.map((car)=> (
                    <Grid item sm={3} key={car.make}>
                        <CarCard car = {car}/>

                    </Grid>
                    )
                )}  
                {/* {error} */}

            </Grid>
        </Box> 
    )
}