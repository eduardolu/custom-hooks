
export const todoReducer = (initialState=[], action) => {
    
    switch (action.type) {
        case '[TODO] add Todo':
            return [ ...initialState, action.payload ];

         case '[TODO] delete item':
            return initialState.filter(todo =>todo.id !== action.payload );

        case '[TODO] toggle todo':
            return initialState.map(todo =>{
                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;

            })
            // throw new Error('action type === add no esta añadida')
    
        default:
            return initialState;
    }

    
}