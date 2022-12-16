import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startUserList } from '../../redux/action/userAction'
import ShowQuestion from '../Questions/DisplayQuestion'
import { startAddQuestion } from '../../redux/action/questionAction'
import validator from 'validator'
import '../css/user.css'
const UserDashboard = (props) =>{

    const [question,setQuestion] = useState('')
    const [userId,setUserId]=useState('')
    const [error,setError]=useState('')
    const errors={}
    

    const user = useSelector((state)=>{
        return state.user
    })
    const dataFinder = user.length  - 1
   
    
    const data = user.filter((ele,i)=>{
        return i === dataFinder && ele
    })

    const userData = Object.assign({},data[0])
    const id = userData._id

    const dispatch = useDispatch()


    useEffect(()=>{
        setUserId(id)
        dispatch(startUserList())
        
    },[dispatch,id])

   
    
    const handleQuestion = (e) =>{
        setQuestion(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        if(validator.isEmpty(question)){
            errors.question=`Qusetion Fiels can't be Empty`
        }
        setError(errors)

        if(Object.keys(errors).length === 0){
            const formData = {
                 data:question
            }
            
            const resetForm=()=>{
                setQuestion('')
            }
            dispatch(startAddQuestion(formData,userId,resetForm))
        }
    }

    const handleFinish = () =>{
        localStorage.removeItem('token')
        props.history.push('/user')
    }
    
    return (
        <div className='question_form' >
                {data.map((ele,i)=>{
                    return   <h4 key={i}>Welcome-{ele.name}!!!</h4>  
                })}<hr/>

                 <form  onSubmit={handleSubmit} >
                    <textarea  placeholder='Ask Your Question' value={question} onChange={handleQuestion}/><br/>
                    {error.question && <span>{error.question}</span>}
                    <input type='submit' value='sumbit'/>
                 </form>

                 <button className='userLogout' onClick={handleFinish} >Logout</button>
                 <hr/>
                 <ShowQuestion userId={userId}/>
        </div>
    )
}

export default UserDashboard