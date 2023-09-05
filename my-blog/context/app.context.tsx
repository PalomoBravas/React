'use client';

import {createContext, JSX} from "react";

interface AppContext {
    url: string
}

export const AppContext = createContext<AppContext>({url: ''})


export const AppContextProvider = ({url, children}): JSX.Element => {

    return (
        <AppContext.Provider value={{url}}>
            {children}
        </AppContext.Provider>
    )
}
