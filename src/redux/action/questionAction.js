import axios  from "axios";


export const startAddQuestion = (data,id,resetForm) =>{
    return (dispatch) =>{
        axios.post(`http://localhost:3210/api/question/${id}`,data)
            .then((response)=>{
                const result = response.data
                dispatch(addQuestion(result))
                resetForm()
            })
            .catch((error)=>{
                alert(error)
            })
    }
}

export const addQuestion = (data) =>{
    return {
        type:'ADD_QUESTION',
        payload: data
    }
}

export const startShowQuestion = () =>{
    return (dispatch) =>{
        axios.get(`http://localhost:3210/api/question`)
             .then((response)=>{
                const result = response.data
                dispatch(showQuestion(result))
             })
             .catch((error)=>{
                alert(error)
             })
    }
}

export const showQuestion = (data) =>{
    return {
        type:'SHOW_QUESTION',
        payload:data
    }
}

export const startUpdateQuestion = (id,userId) =>{
  
    return (dispatch) =>{
        axios.put(`http://localhost:3210/api/question/${id}/${userId}`)
            .then((response)=>{
                const result = response.data
                dispatch(updateQuestion(result))
            })
            .catch((error)=>{
                alert(error)
            })
    }
}

export const updateQuestion = (data) =>{
    return {
        type:"UPDATE_QUESTION",
        payload:data
    }
}