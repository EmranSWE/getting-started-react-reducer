import { actionType } from "./actionType"

export const initialState = {
    firstName: "",
    lastName:"",
    email:"",
    gender:"",
    education:"",
    quantity:0,
    feedback: "",
    term:false
}


export const reducer = (state, action)=>{
  switch (action.type) {
    case actionType.INPUT:
        return {
            ...state, 
            [action.payload.name] : action.payload.value,
        }
        case actionType.INCREMENT:
            console.log(action.payload.count)
            return {
                ...state, 
                quantity: state.quantity + action.payload.count
              
            }
        case actionType.DECREMENT:
                return {
                  ...state, 
                  quantity: state.quantity - action.payload.count
                }

    case actionType.TOGGLE:
        return {
            ...state,
            term: !state.term
        }
    
  
    default:
        return state;
  }  
}
