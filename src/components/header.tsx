
import { useState, type ReactNode } from "react"
import type { sceneState } from "../App"
import { Button } from "./button"


type HeaderProps = {
    setScene: (value: sceneState) => void,
    scene: sceneState
}



export function Header({ setScene, scene }: HeaderProps) {
    const [activeTab, setActiveTab] = useState<string | null>(null)
    return (
        <header className="bg-zinc-600 min-inline-screen flex items-center justify-between px-5 fixed top-0 right-0 left-0 z-1000 rounded-lg">
            <div className="flex gap-2 items-center py-2 hover:cursor-pointer text-base leading-none capsize" onClick={() => setScene("shop")}>
                <h1 className="text-2xl">BBLANK</h1>
                <div className="flex gap-2 text-2xl items-center">
                    <h1 className="text-2xl">[</h1>
                    <h1 className="text-2xl">]</h1>
                </div>
            </div>
            <div className="space-x-4 absolute left-1/2 -translate-x-1/2 flex flex-row">
                <Button variant="ghost-destructive" onClick={() => setScene("shop")}>Shop</Button>
                <ChevronTab activeTab={activeTab} setActiveTab={setActiveTab} tabId="contact">Contact Us</ChevronTab>
                <ChevronTab activeTab={activeTab} setActiveTab={setActiveTab} tabId="about">About Us</ChevronTab>
            </div>
        </header>
    )
}

type ChevronTabProps = {
    activeTab: string | null;
    setActiveTab: (value: (string | null)) => void;
    children: ReactNode;
    tabId: "contact" | "about";
}

function ChevronTab({ activeTab, setActiveTab, children, tabId}: ChevronTabProps) {
    const isOpen = activeTab === tabId
    return (
        <Button variant="ghost-destructive" className="flex flex-row items-center" onClick={() => isOpen ? setActiveTab(null) : setActiveTab(tabId)}>
            {children}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-0' : 'rotate-180'}`}>
                <path d="m6 9 6 6 6-6" />
            </svg>
        </Button>
    )
}
