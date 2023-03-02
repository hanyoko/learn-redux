import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    //useSelector로 상태에서 필요한 속성 값 반환
    const todos = useSelector(state=>state.todos)
    const dispatch = useDispatch();

    const onCreate = text => dispatch(addTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    return (
        <div>
            <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />
        </div>
    );
};

export default TodosContainer;