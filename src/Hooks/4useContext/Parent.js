import React, { createContext, useContext, useState } from 'react'
import Child from './Child'

export const ThemeContext = createContext()

export function useTheme() {
    return useContext(ThemeContext);
}

export default function Parent() {
    const [theme, setTheme] = useState('dark')
    return (
        <div>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <b>Parent</b>
                <Child/>
            </ThemeContext.Provider>
        </div>
    )
}
