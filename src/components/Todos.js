import React from "react"
import {connect} from "react-redux"
import Todo from "./Todo"

class Todos extends React.Component {
    
    render() {
        console.log(this.props)
        let todoList = this.props.todos.length ? (
        this.props.todos.map(todo => {return (
                <div className="collection-item" key={todo.id}>
                    <Todo todo={todo} />
                 </div>
    
        )})
        )
        : (
            <div className="center">You have no more todos left. yay!</div>
        )
    
    return (
        <div className="todos collection">
            <h1 className="center blue-text">Todos</h1>
            {todoList}
        </div>
    )

}
} 
const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(Todos);
