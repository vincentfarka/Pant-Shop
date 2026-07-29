import { Button } from "./button"

export function Header() {
    return (
        <header className="bg-zinc-600 inline-[100vw] flex items-center justify-between px-5">
            <div className="flex flex gap-2 items-center py-2 hover:cursor-pointer reletive">
            <h1 className="text-2xl">BBLANK</h1>
            <h1 className="text-2xl">[]</h1>
            </div>
            <div className="flex gap-4">
            <Button variant="ghost-destructive">Shop</Button>
            <Button variant="ghost-destructive">Contact us</Button>
            </div>
        </header>
    )
}