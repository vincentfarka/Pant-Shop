import { Button } from "./button"


export function Header() {
    return (
        <header className="bg-zinc-600 min-inline-[100vw] flex items-center justify-between px-5 sticky top-0 right-0 left-0">
            <div className="flex flex gap-2 items-center py-2 hover:cursor-pointer">
            <h1 className="text-2xl">BBLANK</h1>
            <div className="flex gap-2">
            <h1 className="text-2xl">[</h1>
            <h1 className="text-2xl">]</h1>
            </div>
            </div>
            <div className="flex gap-4">
            <Button variant="ghost-destructive">Shop</Button>
            <Button variant="ghost-destructive">Contact us</Button>
            </div>
        </header>
    )
}