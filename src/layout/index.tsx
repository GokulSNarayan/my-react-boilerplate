import React from "react"

interface LayoutProps extends React.ComponentPropsWithoutRef<'div'> {
    theme?: 'light' | 'dark'
} 

export function Layout(props:LayoutProps){
    return(
        <div className={`h-screen origin-top-left transition-all ${props.theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            {props.children}
        </div>
    )
}