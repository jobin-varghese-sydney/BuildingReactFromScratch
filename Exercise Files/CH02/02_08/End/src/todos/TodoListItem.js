import React from "react";

const TodoListItem=({todo})=>(

    <div classnme="todo-item-container">
        <h3>{todo.text}</h3>
        <div classname="buttons-container">
        <button className="completed-button">Mark as completed</button>
        <button >Remove</button>
        </div>
    </div>

)

export default TodoListItem;