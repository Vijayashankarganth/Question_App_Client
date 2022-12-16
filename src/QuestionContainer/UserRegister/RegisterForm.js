import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { startUserRegister } from '../../redux/action/userAction'
import validator from 'validator'
import swal from 'sweetalert'
import '../css/form.css'

const RegisterForm = (props) =>{
   
    const [name,setName]=useState('')
    const dispatch = useDispatch()
    const [error,setError]=useState('')
    const errors = {}
    
    const handleUserName=(e)=>{
        setName(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validator.isEmpty(name)){
            errors.name=`Name can't be Empty`
        }
        setError(errors)

        if(Object.keys(errors).length === 0){

        const formData={
            name:name
        }

        const redirect = ()=>{
            swal({
                title:"Successfully Registered",
                icon:'success'
            })
            .then(()=>{
                props.history.push('/userDashboard')
            })
            
        }
        dispatch(startUserRegister(formData,redirect))
    }
    }
    return (
        <div className='form'>
            <form  onSubmit={handleSubmit} ><br/>
                <input type='text' placeholder='Enter your Name' value={name} onChange={handleUserName}/><br/>
                {error.name && <span>{error.name}</span>}<br/>
                <input  type='submit' value='Register' />
            </form>
        </div>
    )
}

export default RegisterForm