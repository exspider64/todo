import React from "react"
import {connect} from "react-redux"

const Todos = function({props}) {
    let todoList = props.todos.length ? (
        props.todos.map(todo => {return (

            <div className="collection-item" key={todo.id}>
                <input type="checkbox" value={todo.id}></input>
                <span>{todo.content}</span>
                <button>Delete</button>
            </div>
        )})
        )
        : (
            <div className="center">You have no more todos left. yay!</div>
        )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = () => {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
