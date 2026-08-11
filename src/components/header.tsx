
import { Button } from "./button"

type HeaderProps = {
    
}


export function Header({ setScene }: HeaderProps) {

    return (
        <header className="bg-zinc-600 min-inline-[100vw] flex items-center justify-between px-5 fixed top-0 right-0 left-0 z-1000 rounded-lg">
            <div className="flex flex gap-2 items-center py-2 hover:cursor-pointer leading-none text-base leading-none capsize">
                <h1 className="text-2xl">BBLANK</h1>
                <div className="flex gap-2 text-2xl items-center">
                    <h1 className="text-2xl">[</h1>
                    <h1 className="text-2xl">]</h1>
                </div>
            </div>
            <div className="flex gap-4">
                <Button variant="ghost-destructive">Shop</Button>
                <Button variant="ghost-destructive">Contact us</Button>
                <Button variant="ghost-destructive">About us</Button>
            </div>
        </header>
    )
}