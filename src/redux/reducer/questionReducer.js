const initialValue = []

const questionReducer = (state = initialValue , action) =>{
    switch(action.type){
        case "SHOW_QUESTION":{
            return [...action.payload]
        }
        case "UPDATE_QUESTION":{
            return  state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...ele,...action.payload}
                }
                else{
                    return {...ele}
                }
             })
        }
        case "ADD_QUESTION":{
            return [...state,{...action.payload}]
        }
        default:{
            return [...state]
        }
    }
}

export default questionReducer