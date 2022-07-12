import React from 'react';

export const useUserContext = () =>{
    const [name, setName] = React.useState('');

    return {
        name, 
        setName,
    };
};