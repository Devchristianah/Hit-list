import React from "react";


const Body = (props) => {
  return (
    <div className={ props.todo.completed ? "rowCompleted": "textBar"}>
        {props.todo.text} 
        <div className="icons">
        <span onClick={()=> props.deleteTodo(props.todo.id)} >&times;</span>
        <span onClick={()=> props.markTodo(props.todo.id)}>✔</span>
        </div>
    </div>
  );
}

export default Body;