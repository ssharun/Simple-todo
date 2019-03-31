import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = ({ data }) => {
    const elements = data.map((item) => {
        return (
            <li>
                <TodoListItem
                    label={item.label}
                    important={item.important}
                />
            </li>
        )
    })
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default TodoList;
