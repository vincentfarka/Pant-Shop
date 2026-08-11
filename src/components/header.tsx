
import type { sceneState } from "../App"
import { Button } from "./button"


type HeaderProps = {
    setScene: (value: sceneState) => void,
    scene: sceneState
}


export function Header({ setScene, scene }: HeaderProps) {

    return (
        <header className="bg-zinc-600 min-inline-[100vw] flex items-center justify-between px-5 fixed top-0 right-0 left-0 z-1000 rounded-lg">
            <div className="flex flex gap-2 items-center py-2 hover:cursor-pointer leading-none text-base leading-none capsize" onClick={() => setScene("shop")}>
                <h1 className="text-2xl">BBLANK</h1>
                <div className="flex gap-2 text-2xl items-center">
                    <h1 className="text-2xl">[</h1>
                    <h1 className="text-2xl">]</h1>
                </div>
            </div>
            <h1 className="text-center text-3xl text-violet-300 font-bold tracking-wide absolute left-1/2 -translate-x-1/2">{scene}</h1>
            <div className="flex gap-4">
                <Button variant="ghost-destructive" onClick={() => setScene("shop")}>Shop</Button>
                <Button variant="ghost-destructive" onClick={() => setScene("contact us")}>Contact us</Button>
                <Button variant="ghost-destructive" onClick={() => setScene("about us")}>About us</Button>
            </div>
        </header>
    )
}