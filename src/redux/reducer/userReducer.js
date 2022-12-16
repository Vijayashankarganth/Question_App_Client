const initialValue = []

const userReducer=(state = initialValue,action)=>{
    switch(action.type){
        case "ADD_USER":{
            return [...state,{...action.payload}]
        }
        case "LIST_USER":{
            return [...action.payload]
        }
        case "USER_DETAIL":{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

export default userReducer