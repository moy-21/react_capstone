import React, {useContext, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
// import { AppContext } from '../context/AppContext';
import Error from '../components/Error';
import useImage from '../hooks/useImage';
import useVinDecoder from '../hooks/useVinDecoder';
import CarCard from '../components/CarCard';



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
    
    const [vin, setVin] = useState()

    const {img, imgError} = useImage(vin)
    const {car, carError} = useVinDecoder(vin)

    const handleSubmit=(values)=>{
        console.log(values)
        setVin(values.vin)
        console.log(car)
        console.log(vin)
        

    
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

            <Button type="submit" sx={{width:"100%"}}>Search</Button>
            <Error>{imgError}</Error>
            <Error>{carError}</Error>
        </form>
        {car?
            <CarCard car= {car} img= {img}/>
            :
            <></>
        }
        </>
    )

}