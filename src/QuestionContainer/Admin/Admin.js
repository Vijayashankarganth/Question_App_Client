import React,{useState} from 'react'
import { adminLogin } from '../../redux/action/adminAction'
import validator from 'validator'
import swal from 'sweetalert'
import '../css/form.css'
const Admin = (props) =>{
    const [admin,setAdmin] = useState('')
    const [error,setError]=useState({})
    const errors={}
  

    const handleAdmin = (e) =>{
        setAdmin(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(validator.isEmpty(admin)){
            errors.admin=`password can't be Empty`
        }
        setError(errors)
        if(Object.keys(errors).length === 0){
            const formData={
                admin:admin
            }
            const resetForm = () =>{
                swal({
                    title:'Logged In',
                    icon:'success'
                })
                .then(()=>{
                    props.history.push('/adminDashboard')
                })
              
            }
            adminLogin(formData,resetForm)
        }
       
    }
    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input className='input' type='password' placeholder='Enter Secret Key' value={admin} onChange={handleAdmin} /><br/>
                {error.admin && <span>{error.admin}</span>}
                <br/>
                <input type='submit' value='submit' />
            </form>
        </div>
    )
}

export default Admin