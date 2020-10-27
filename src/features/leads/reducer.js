const INITIAL_STATE = {
  list: []
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case "LEADS_SET_LIST":
      return {
        ...state, 
        list: action.payload
      }

    default: 
      return {...state}
  }
}