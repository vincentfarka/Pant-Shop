import type { sceneState } from "../App"

type contentProps = {
    scene: sceneState
}

type shopItem = {
    src: string,
    name: string,
    price: string
}

export function Content({ scene }: contentProps) {
    const sorces = [
        { src: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiClDMFMdObttV25PkoDA4dyRVaykPffpfuRhrX1MJ1mLe16EGTe_EDHGI-x_J3leY-QThV7IjnSxRhZF4296fe0MK0r4U5JsDMlRRLbMYsXat30OCG4FgGWhFQwrMzBOGzEi45gg&usqp=CAc", name: "cool pants", price: "$50" },
    ] satisfies shopItem[]
    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] justify-center gap-10">
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
            <ShopItem price={sorces[0].price} name={sorces[0].name} src={sorces[0].src} />
        </div>
    )
}

type ShopItemProps = {

} & shopItem


function ShopItem({ src, price, name }: ShopItemProps) {
    return (
        <div className="p-0 m-0 flex flex-col gap-1">
            <div className="group grid justify-items-center items-end">
                <img className="col-start-1 col-end-2 row-start-1 row-end-2 p-0 m-0 rounded-3xl w-full" src={src} />
                <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 text-black font-medium text-3xl bg-white/30 backdrop-hue-rotate-270 backdrop-blur-lg w-full p-0 m-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-full group-hover:cursor-pointer rounded-3xl ">{name}</h1>
            </div>
            <div className="p-0 m-0 flex justify-center">
                <h1 className="font-medium text-2xl">{price}</h1>
            </div>
        </div>
    )
}