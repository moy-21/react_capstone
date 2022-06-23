import {useEffect, useState} from 'react';
import apiCarMD from '../api/apiCarMD';
import { CancelToken } from 'apisauce';


export default function useDiagnostics(info){
    const [diag, setDiag]=useState({});

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            if(info.vin){
                const getInfo=async()=>{
                    response = await apiCarMD.getDiagnostics(info.vin, info.mileage, info.dtc, source.token)
                    console.log(response)
                    setDiag(response.diag)
                    
                }
                getInfo()
            }
            return ()=>{source.cancel();}
        },
        [info]
    )

    return diag
}