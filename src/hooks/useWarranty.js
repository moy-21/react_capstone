import {useEffect, useState} from 'react';
import apiCarMD from '../api/apiCarMD';
import { CancelToken } from 'apisauce';


export default function useWarranty(info){
    const [warranty, setWarranty]=useState({});

    useEffect(
        ()=>{ 
            let response
            const source= CancelToken.source();
            if(info.vin){
                const getWarranty=async()=>{
                    response = await apiCarMD.getWarranty(info.vin, source.token)
                    console.log(response.warranty, "in effect")
                    setWarranty(response.warranty)
                    
                }
                getWarranty()
            }
            return ()=>{source.cancel();}
        },
        [info]
    )

    return warranty
}