import {useEffect, useState} from 'react';
import apiCarMD from '../api/apiCarMD';
import { CancelToken } from 'apisauce';


export default function useVinDecoder(vin){
    const [car, setCar]=useState({});

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            if(vin){
                const getInfo=async()=>{
                    response = await apiCarMD.getVinDecoder(vin, source.token)
                    setCar(response)
                    console.log(response)
                    
                }
                getInfo()
            }
            return ()=>{source.cancel();}
        },
        [vin]
    )

    return car
}