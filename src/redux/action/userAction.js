import axios from 'axios'
import swal from 'sweetalert'

export const startUserRegister=(data,redirect)=>{
    return (dispatch)=>{
        axios.post(`http://localhost:3210/api/user`,data)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty('error')){
                swal({
                    title:result.error,
                    icon:'error'
                })
            }
            else{
                dispatch(addUser(result))
                localStorage.setItem('token',result.token)
                redirect()
            }
            
        })
        .catch((error)=>{
            alert(error)
        })
    }
}

export const addUser=(data)=>{
    return {
        type:'ADD_USER',
        payload:data
    }
}

export const startUserList=()=>{
    return (dispatch)=>{
        axios.get('http://localhost:3210/api/user/list')
             .then((response)=>{
                const result=response.data

                dispatch(userList(result))
             })
             .catch((error)=>{
                alert(error)
             })
    }
}

export const userList = (data)=>{
    return {
        type:"LIST_USER",
        payload:data
    }
}

export const startUserDetail=(id)=>{
    return (dispatch) =>{
        axios.get(`http://localhost:3210/api/user/detail/${id}`)
             .then((response)=>{
                const result = response.data
                dispatch(userDetail(result))
             })
             .catch((error)=>{
                alert(error)
             })
    }
}

export const userDetail = (data) =>{
    return {
        type:'USER_DETAIL',
        payload:data
    }
}