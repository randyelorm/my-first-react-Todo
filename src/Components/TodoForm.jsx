import React, { Component } from 'react';
import "./styles.css"

class TodoForm extends Component {

    constructor (props) {
        super (props)

        this.state = {
           activity: "",
        }
    }

  handleChange = (event)=> {
     this.setState({
         [event.target.name]: event.target.value
     })
  }

  handleAdd = (event)=> {
      event.preventDefault()
      this.props.AddTodo(this.state)
      this.setState({
          activity: ""
      })
      this.setState({
          taskCount: this.state.taskCount + 1
      })
    
  }

    render() {
        return (
            <>
            <br/>
            <h3>Randy's ToDo</h3>
            <form onSubmit = {this.handleAdd} className = "form_box">
               
              <label htmlFor = "activity"> 
                 
               <input 
               type="text" 
               name = "activity" 
               value = {this.state.activity}
               onChange = {this.handleChange}
               required 
               placeholder = "Enter A Todo"
               />
              </label>
               <input type="submit" />
            </form>

            
      
         </>
        );
    }
}

export default TodoForm;
