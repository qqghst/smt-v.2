import React, { createContext, useState, Dispatch, SetStateAction, } from 'react';

interface ICursorManager {
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
}

export const CursorContext = createContext<ICursorManager>({
    size: 'small',
    setSize: () => {},
});
export default function CursorManager(props: any) {
    const [size, setSize] = useState('small');
    return (
        <CursorContext.Provider value={{ size, setSize }}>
            {props.children}
        </CursorContext.Provider>
    );
}