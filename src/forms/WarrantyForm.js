import React, {useContext, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
// import { AppContext } from '../context/AppContext';
import Error from '../components/Error';
import useImage from '../hooks/useImage';
import useWarranty from '../hooks/useWarranty';
import WarrantyCard from '../components/WarrantyCard'




//Defining our yup validation
const FormSchema=Yup.object(
    {
        vin:Yup.string().required(),
        
    }
)

const initialValues={
    vin:''
}


export default function VinDecodeForm(){
    
    const [vin, setVin] = useState({})

    const warranty = useWarranty(vin)

    const handleSubmit=(values)=>{
        
        console.log(values)
        setVin(values)
    
    }




    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)}
    })

    return(
        <>
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="vin"
                name="vin"
                fullWidth
                sx={{mb:2, mt:2}}
                label="VIN NUMBER"
                placeholder="VIN"
                value={formik.values.vin}
                onChange={formik.handleChange}
                error={formik.touched.vin && Boolean(formik.errors.vin)}
                helperText={formik.touched.vin && formik.errors.vin}            
            />

            <Button variant="outlined" color="warning" type="submit" sx={{width:"100%"}}>Search Warranty Info</Button>
            <Error></Error>
            
        </form>
        {warranty.length>0?
            
            warranty.map((info, index) => (
               <WarrantyCard key={index} info= {info}/>
                
                
               
              ))
            
            :
            <></>
        }
        </>
    )

}