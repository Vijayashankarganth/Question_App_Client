import axios from 'axios'
import swal from 'sweetalert'


export const adminLogin=(data,resetForm)=>{
    
    axios.post(`http://localhost:3210/api/admin`,data)
         .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('error')){
               swal({
                  title:'Invalid Key',
                  icon:'error'
               })
            }
            else{
               localStorage.setItem('adminToken',result)
               resetForm()
              
            }
            
         })
         .catch((error)=>{
            alert(error)
         })
}

export const startQuestionKey = (id,action) =>{
      return (dispatch) =>{
         axios.put(`http://localhost:3210/api/admin/question/${id}?action=${action}`)
            .then((response)=>{
               const result = response.data
               dispatch(updateAnswer(result))
            })
            .catch((error)=>{
               swal({
                  title:error.message,
                  icon:'error'
               })
            })
      }
}

export const updateAnswer = (data) =>{
   return {
       type:"UPDATE_QUESTION",
       payload:data
   }
}