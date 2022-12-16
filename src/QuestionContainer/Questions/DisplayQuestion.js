import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { startShowQuestion } from "../../redux/action/questionAction";
import { startUpdateQuestion } from "../../redux/action/questionAction";


const ShowQuestion = (props) =>{
    const {userId} = props

    const question = useSelector((state)=>{
        return state.question
    })
    
    question.sort((a,b)=>{
        return b.likes - a.likes
    })
    
    const userQuestion=question.filter((ele)=>{
        return ele.userId._id === userId && ele
    })

    const allQuestion = question.filter((ele)=>{
        return ele.userId._id !== userId && ele
    })
   
    
    
   
    const dispatch = useDispatch()

     useEffect(()=>{
        dispatch(startShowQuestion())
     },[dispatch])
    
    
     const handleLike = (id) =>{
        
        dispatch(startUpdateQuestion(id,userId))

     }
    return (
        <div style={{position:'relative'}}>
            <div className="question_left">
                <h5>My Questions</h5>
                {userQuestion.map((ele,i)=>{
                    return (
                        <div key={ele._id} className='user_questions'>
                        <p> {i+1} : {ele.data}</p>
                        <button onClick={()=>{handleLike(ele._id)}}
                         disabled >Likes-{ele.likes.length}</button>
                        <span>~{ele.userId.name}</span>
                        </div>
                    )
                })}
                
            </div>
            <div className="question_right">
                  <h5>Others Questions</h5>
                {allQuestion.map((ele,i)=>{ 
                    return (
                        <div key={ele._id} className='user_questions'> 
                        <p> {i+1} : {ele.data}</p>
                        <button onClick={()=>{handleLike(ele._id)}} >
                        Likes-{ele.likes.length}</button>
                        <span>~{ele.userId.name}</span>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export default ShowQuestion