import React, { Component } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import "./App.css"

class App extends Component {
  
  constructor (props) {
      super (props)

      this.state = {
        todo: []
      }

  }
  
  handleAddNewTodo = (newTodo) => {
    newTodo.id = Math.random().toString()
   
    this.setState({
      todo: [...this.state.todo, newTodo]
    })
  }

  handleDelete = (todoId) => {
  let notDeletedTodos = this.state.todo.filter(
      (each_todo)=> {
       return each_todo.id !== todoId 
      }
   )
   this.setState({
     todo: notDeletedTodos
   })

  }

  editTodo = (selected_todo_id, editedTodo)=> {
    this.setState({
      todo: this.state.todo.map(
        (each_todo)=>{
         return each_todo.id === selected_todo_id ? editedTodo : each_todo
        }
      )
    })
      
  }

 

  render() {
    return (
      <div className = "text-center">
        <TodoForm AddTodo = {this.handleAddNewTodo}/>
         <TodoList state_in_App_js = {this.state.todo} deletetodo = {this.handleDelete} editTodo = {this.editTodo} />
      </div>
    );
  }
}

export default App;


