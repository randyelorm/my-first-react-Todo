import React, { Component } from 'react';
import "./styles.css"

class TodoForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
           activity: props.each_todo.activity,
           id: props.each_todo.id
        
        }
    }

  handleChange = (event)=> {
     this.setState({
         [event.target.name]: event.target.value
     })
  }

  handleEdit = (event)=> {
     event.preventDefault()
     this.props.editTodo(this.state.id, this.state)
     this.props.closeModal()
      
    
  }

    render() {
        return (
            <>
            <br/>
          
            <form  className = "form_box">
               
              <label htmlFor = "activity"> 
                 
               <input 
               type="text" 
               name = "activity" 
               value = {this.state.activity}
               onChange = {this.handleChange}
               required 
               placeholder = "Edit your Todo"
               />
              </label>
            <button onClick = {this.handleEdit} className = "update-btn" type="submit">Update Changes</button>
            </form>

            
      
         </>
        );
    }
}

export default TodoForm;
