import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodoTask } from 'src/state/todo/actions';

const TodoHeader: React.FC = () => {

    const [text, updateText] = useState("");
    const dispatch = useDispatch();

    const onClickAddTodo = () => {
        if (!text) return;
        dispatch(addTodoTask(text));
        updateText("");
    }

    return (
        <>
            <input type="text" value={text} onChange={(e) => updateText(e.target.value)} />
            <button onClick={() => onClickAddTodo()}> Add Todo</button>
        </>
    )
};
export default TodoHeader;
