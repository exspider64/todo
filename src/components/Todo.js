import React, {Component} from "react"
import {connect} from "react-redux"

class Todo extends Component {
    handleClick(id) {
        console.log("handleClick");
        this.props.completeTodo(id)
    }
    render() {
        console.log("render");
        return (
            <React.Fragment>
                <input type="checkbox" value={this.props.todo.id}></input>
                <span>{this.props.todo.todo}</span>
                <button onClick={() => this.handleClick(this.props.todo.id)}>Complete</button>
            </React.Fragment>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        completeTodo: (id) => dispatch({type: "COMPLETE_TODO", id: id})
    }
}

export default connect(null, mapDispatchToProps)(Todo);