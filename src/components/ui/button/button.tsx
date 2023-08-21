import React from "react"

type ButtonVariants = 'primary' | 'secondary' | 'warning' | 'danger' | 'success' | 'info'| 'dark' | 'light' | (string & {});

interface ButtonProps extends React.ComponentProps<"button"> {
    variant: ButtonVariants;
}

export const Button = ({variant,...props}: ButtonProps) => {
    return (
        <button {...props} className={`p-2 m-2 rounded-sm flex items-center justify-center ${getStyle(variant)}`}>{props.children}</button>
    )
}

function getStyle(variant: ButtonVariants) {
    switch(variant){
        case 'primary':
            return 'text-white bg-blue-500 border-[1px] border-blue-500';
        case 'secondary':
            return 'text-blue-500 bg-white border-[1px] border-blue-500';
        case 'light':
            return 'text-blue-500 bg-gray-800 border-[1px] border-white-500';
        case 'dark':
            return 'text-blue-500 bg-white border-[1px] border-blue-500';
        case 'info':
            return 'text-black bg-blue-200 border-[1px] border-blue-200';
        case 'success':
            return 'text-black bg-green-500 border-[1px] border-green-500';
        case 'warning':
            return 'text-white bg-orange-500 border-[1px] border-orange-500';
        case 'danger':
            return 'text-white bg-red-500 border-[1px] border-red-500';
        default:
            return 'text-white bg-blue-500 border-[1px] border-blue-500';
    }
}