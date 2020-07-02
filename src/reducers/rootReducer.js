let initState = {
    todos: [
        {id: 1, todo: "Create Todo app"}
    ]
}   
const rootReducer = (state = initState, action) => {
    let newTodos = state.todos;
    console.log(action);
    switch(action.type) {
        case "ADD_TODO":
            newTodos = state.todos;
            newTodos.push(action.todo)
            return {
                ...state,
                todos: newTodos
            }
        case "COMPLETE_TODO":
            console.log(action.type)
            newTodos = state.todos.filter(todo => todo.id !== action.id)
            console.log(newTodos);
            return (
                {
                    todos: newTodos
                }
            )
            default:
                return state;
    }


}

export default rootReducer;