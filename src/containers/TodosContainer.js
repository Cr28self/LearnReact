import React, {useState, useEffect} from 'react';
import Todos from "../component/Todos";
import {connect} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";

const TodosContainer =({input, todos, changeInput,insert,toggle,remove})=>{
    return(
        <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove}/>
    )

}

export default connect(
    //mapStateToProps
    //state.todos
    //비구조화할당
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    {
        changeInput,
        insert,
        toggle,
        remove

        //action함수 불러와...
    },
)(TodosContainer) //target이 되는 컴포넌트