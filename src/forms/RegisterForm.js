import {React, useContext, useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import { FormControl, FormHelperText, InputLabel, Select, MenuItem } from '@mui/material';
import { AppContext } from '../context/AppContext' 
import useDeleteUser from '../hooks/useDeleteUser';
import useEditUser from '../hooks/useEditUser';
import useCreateUser from '../hooks/useCreateUser';

//Defining our yup validation
const FormSchema=Yup.object(
    {
        firstName:Yup.string().required(),
        lastName:Yup.string().required(),
        email:Yup.string().email("Must be a valid e-mail format").required(),
        password:Yup.string().required(),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    }
)




export default function RegisterForm(){

    const {user} = useContext(AppContext)

    const [editUser, setEditUser]=useState({})
    const [deleteUser, setDeleteUser]=useState()
    const [createUser, setCreateUser]=useState({})
    

    useEditUser(editUser)
    useDeleteUser(deleteUser)
    useCreateUser(createUser)

    const initialValues={
        firstName:user?.firstName?? '',
        lastName:user?.lastName?? '',
        email:user?.email?? '',
        password:user?.password?? '',
        confirmPassword:user?.confirmPassword?? ''
    }

    const handleSubmit=(values, resetForm)=>{
        if(user.token){
            setEditUser(values)
            
        }else{
            setCreateUser(values)
        }
        console.log(values)
        console.log(createUser)
        resetForm(initialValues)
    }

    const handleDelete=()=>{
        console.log("test")
        setDeleteUser()
        
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

    return(
        <form onSubmit={formik.handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                fullWidth
                sx={{mb:2, mt:2}}
                label="First Name"
                placeholder="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}            
            />

            <TextField
                id="lastName"
                name="lastName"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Last Name"
                placeholder="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}            
            />

            <TextField
                id="email"
                name="email"
                fullWidth
                sx={{mb:2, mt:2}}
                label="Email"
                placeholder="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}            
            />

            <TextField
                id="password"
                name="password"
                type = 'password'
                fullWidth
                sx={{mb:2}}
                label="Password"
                placeholder="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}            
            />

            <TextField
                id="confirmPassword"
                name="confirmPassword"
                type= 'password'
                fullWidth
                sx={{mb:2}}
                label="Confirm Password"
                placeholder="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}            
            />

            <Button type="submit" sx={{width:"100%"}}>{user.token?"Edit Profile":"Register"}</Button>
            {user.token ?
                <Button onClick={()=>{handleDelete()}} sx={{width:"100%",my:1}}>Delete</Button>
            :
                <></>
            }
            
             
        </form>
    )

}