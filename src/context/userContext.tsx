import React from 'react';

const init = {
    name: '',
    setName: (name: string) => {}
}

export const UserContext = React.createContext(init)