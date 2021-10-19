import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDummyTodoList, updateTodoTask } from 'src/state/todo/actions';
import 'src/components/TodoList/TodoList.scss';

const TodoList: React.FC = () => {

    const { data } = useSelector((state: ReduxStore) => ({
        data: state.todo.data,
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDummyTodoList());
        /* tslint:disable-next-line */
    }, []);

    const onClickTodoTask = (id: number, userId: number) => {
        dispatch(updateTodoTask(id, userId));
    }


    return (
        <div className="todo-text-container">

            {
                data.map((value, index) => {
                    return (
                        <p 
                            className={value.completed ? "text-complete" : "text-incomplete"}
                            onClick={() => onClickTodoTask(value.id, value.userId)}
                            key={index}>
                            {value.title}
                        </p>
                    )
                })
            }
        </div>

    )
};
export default TodoList;
