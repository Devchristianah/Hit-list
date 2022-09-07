import React, { useState } from "react";
import "./App.css";
import "./components/TodoList";
import Form from "./components/TodoList";
import Header from "./components/Header";
import Body from "./components/List";



function Todo(){

  
  const[todos,setTodos]=useState([]);

  const addTodo = (text) => {
    let id = Math.floor(Math.random()* 1000) + 1
    let todo = {id:id, text:text, completed:false}
    let newTodos = [todo, ...todos]
    console.log(newTodos);
    setTodos(newTodos)
  }
  const deleteTodo =(id)=>{
    let updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const markTodo =(id)=>{
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }


  return (
    <div className="App">
      <div className="App-wrapper">
        <div>
          <Header></Header>
        </div>
        <div>
          <Form
          addTodo={addTodo}>
          </Form>
        </div>
        <div>
        {
        todos.map((todo)=>{
          return(<Body todo={todo} key={todo.id} deleteTodo ={deleteTodo} markTodo={markTodo}>
          </Body>)
        })
      }
        </div>
      </div>  
    </div>
  );

  }

export default Todo;