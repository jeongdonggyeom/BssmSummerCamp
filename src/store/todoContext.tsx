import React from 'react';

export const useTodoContext = () =>{
    const [todo, setTodo] = React.useState('');

    return {
        todo,
        setTodo,
    };
};