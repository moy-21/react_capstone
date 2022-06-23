import React, {useContext, useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
// import { AppContext } from '../context/AppContext';
import Error from '../components/Error';
import useDiagnostics from '../hooks/useDiagnostics';
import DiagnosticsCard from '../components/DiagnosticsCard';



//Defining our yup validation
const FormSchema=Yup.object(
    {
        vin:Yup.string().required(),
        mileage:Yup.string().required(),
        dtc:Yup.string().required(),
        
    }
)

const initialValues={
    vin:'',
    mileage: '',
    dtc:''
}


export default function DiagnosticsForm(){
    
    const [info, setInfo] = useState({})

    
    const diag1= useDiagnostics(info)

    const handleSubmit=(values)=>{
        console.log(values)
        setInfo(values)
       
    
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
            <TextField
                id="mileage"
                name="mileage"
                fullWidth
                sx={{mb:2, mt:2}}
                label="MILEAGE"
                placeholder="Mileage"
                value={formik.values.mileage}
                onChange={formik.handleChange}
                error={formik.touched.mileage && Boolean(formik.errors.mileage)}
                helperText={formik.touched.mileage && formik.errors.mileage}            
            />
            <TextField
                id="dtc"
                name="dtc"
                fullWidth
                sx={{mb:2, mt:2}}
                label="DTC"
                placeholder="DTC"
                value={formik.values.dtc}
                onChange={formik.handleChange}
                error={formik.touched.dtc && Boolean(formik.errors.dtc)}
                helperText={formik.touched.dtc && formik.errors.dtc}            
            />

            <Button variant="outlined" color="warning" type="submit" sx={{width:"100%"}}>Search</Button>
            <Error></Error>
        
        </form>
        {Object.keys(diag1).length > 0?
            <DiagnosticsCard diag={diag1}/>
            :
            <></>
        }
        </>
    )

}