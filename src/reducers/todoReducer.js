import  * as actions from  '../actions/todoActions'

export const initialState ={
    // posts:[],
    // loading: false,
    // hasErrors:false
}

export default function todoReducer(state=initialState, action){
    switch(action.type){
        case actions.UPDATE_TODO_LIST:
            return {savedTodoItems: [...initialState.savedTodoItems,action.payload]};
        default: return state;
    }
}
       
       
       
       
       
       
    