import type { HTMLAttributes } from "react"

type variant = "primary" | "ghost-destructive"

type ButtonProps = {
    variant: variant
} & HTMLAttributes<HTMLButtonElement>

export function Button({ variant, ...props }: ButtonProps) {
    return <button {...props} className={findStyles(variant)} />
}

function findStyles(variant: variant) {
    switch (variant) {
        case "primary": return "bg-teal-600 transition delay-0 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130 hover:bg-teal-700 hover:cursor-pointer rounded py-[4px] px-[10px]"
        case "ghost-destructive": return "hover:bg-teal-700 transition delay-0 duration-200 ease-in-out hover:-translate-y-1 hover:scale-130 hover:cursor-pointer rounded py-[4px] px-[10px]"
    }
}