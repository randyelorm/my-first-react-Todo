import React from 'react';
import A_Single_Todo from "./A_Single_Todo"

const TodoList = ({state_in_App_js, deletetodo, editTodo  }) => {
    const TodoList = state_in_App_js.map(
        (each_todo)=> {
            return <A_Single_Todo each_todo = {each_todo} deletetodo = {deletetodo} editTodo ={editTodo }/>
        }
    )
    return (
        <div>
           {TodoList} 
        </div>
    );
}

export default TodoList;
