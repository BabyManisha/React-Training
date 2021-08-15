import React from 'react'
import { ThemeContext , useTheme} from './Parent'

export default function GChild() {
    const themeVal = useTheme();
    return (
        <div>
            <b>Grand Child</b>
            <br />
            Theme Value using useTheme => <b>{themeVal.theme}</b>
            <button onClick={() => themeVal.setTheme(themeVal.theme === 'dark' ?  'light' : 'dark')}>Change Theme</button>
        </div>
    )
}
