import React, {useState, useEffect, useCallback} from 'react';
import Todos from "../component/Todos";
import {connect, useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {increase} from "../modules/counter";
import useActions from "../lib/useAction";

const TodosContainer =()=>{

    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }));


    const dispatch = useDispatch( );

/*    const onChangeInput = useCallback(input => dispatch( changeInput(input) ),[dispatch]);
    const onInsert = useCallback(text => dispatch( insert(text) ),[dispatch]);
    const onToggle = useCallback(id => dispatch( toggle(id) ),[dispatch]);
    const onRemove = useCallback(id => dispatch( remove(id) ),[dispatch]);*/

    const [onChangeInput,onInsert, onToggle,onRemove  ] = useActions(
        [changeInput,insert, toggle,remove ], []
    )


    return(
        <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove}/>
    )

}

/*
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
)(TodosContainer) //target이 되는 컴포넌트*/

export default React.memo(TodosContainer);