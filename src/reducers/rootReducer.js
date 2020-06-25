let initState = {
    todos: [
        {
            id: 1,
            todo: "Create Todo app"
        }
    ]
}
const rootReducer = (state = initState, action) => {
    switch(action) {
        case "ADD_TODO":
            // add todo
    }
    return state;
}

export default rootReducer;