import React from "react";
import { todoContext } from "../store/todo";

const TodoInput = () =>{

    let todo: string;
    const context = React.useContext(todoContext);

    const setTodo = () =>{
        context.setTodo(todo);
    }

    return(
        <div className="input-root">
            <h1 className="input-h1">TODO</h1>
            <input className="input-in" type="text" onChange={(e)=> { todo = e.target.value }} placeholder="할일을 입력해주세요..." />
            <button onClick={setTodo} className="input-button">추가하기</button>
        </div>
    )
}
export default TodoInput