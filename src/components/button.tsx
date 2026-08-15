import type { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type variant = "primary" | "ghost-destructive"  | "centered"

const variantStyles = {
    "primary": "bg-teal-600",
    "ghost-destructive" : "",
    "centered" : "absolute left-1/2 -translate-x-1/2"
}

type ButtonProps = {
    variant: variant
    className?: string
} & HTMLAttributes<HTMLButtonElement>

export function Button({ variant, className, ...props }: ButtonProps) {
    return <button {...props} className={twMerge("transition hover:bg-teal-700 hover:cursor-pointer rounded py-1 px-2.5", findStyles(variant), className)} />
}

function findStyles(variant: variant) {
    return variantStyles[variant]
}