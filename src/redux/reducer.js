import posts from '../date/posts'

const postReducer = function posts(state = posts,action){
    console.log(action.index)
     //removePhoto action
     
     switch(action.type){
         case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
         default: return state
     }

     return state
}

export default postReducer