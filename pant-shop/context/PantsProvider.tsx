'use client'

import { createContext, ReactNode } from "react";

export const PantsContext = createContext<null | pantsContextType>(null)

type pantsContextType = Record<"image" | "name" | "price" | "description" | "material", string>[]

type pantsProviderProps = {
    children?: ReactNode
}

export default function PantsProvider({ children }: pantsProviderProps) {
    const pants: pantsContextType = [{name: "snow-pants", price: "$100", image: "testurl", description: "cool pants that look cool", material: "canvas"}]
    return <PantsContext value={pants}>{children}</PantsContext>
}