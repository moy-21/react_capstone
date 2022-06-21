import {useEffect, useState} from 'react';
import apiCarMD from '../api/apiCarMD';
import { CancelToken } from 'apisauce';


export default function useImage(vin){
    const [img, setImg]=useState('');

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            if(vin){
                const getImage=async()=>{
                    response = await apiCarMD.getVehicleImage(vin, source.token)
                    setImg(response)
                    
                }
                getImage()
            }
            return ()=>{source.cancel();}
        },
        [vin]
    )

    return img
}