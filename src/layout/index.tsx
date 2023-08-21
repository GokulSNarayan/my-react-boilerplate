import React from "react"

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {
    theme?: 'light' | 'dark'
} 

export function Layout(props:LayoutProps){
    return(
        <div className={`h-screen text-black dark:text-white ${props.theme === 'dark' ? 'bg-gray-800' : 'bg-slate-200'}`}>
            {props.children}
        </div>
    )
}