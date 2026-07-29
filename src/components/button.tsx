import type { ReactNode } from "react"

type variant = "primary" | "ghost-destructive"

type ButtonProps = {
    children: ReactNode
    variant:  variant
}

export function Button({ children, variant }: ButtonProps) {
    return <button className={findStyles(variant)}>{ children }</button>
}

function findStyles(variant: variant) {
    switch (variant) {
        case "primary" : return "bg-teal-600 hover:bg-teal-700 hover:cursor-pointer rounded py-[4px] px-[10px]"
        case "ghost-destructive" : return "hover:bg-teal-700 hover:cursor-pointer rounded py-[4px] px-[10px]"
    }
}