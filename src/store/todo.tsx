import React from 'react';

const init = {
    todo: '',
    setTodo: (todo: string) => {},
};

export const todoContext = React.createContext(init);