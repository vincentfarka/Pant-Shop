export function Content() {
    const sorces = [
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQiClDMFMdObttV25PkoDA4dyRVaykPffpfuRhrX1MJ1mLe16EGTe_EDHGI-x_J3leY-QThV7IjnSxRhZF4296fe0MK0r4U5JsDMlRRLbMYsXat30OCG4FgGWhFQwrMzBOGzEi45gg&usqp=CAc",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv32q_magAqjzUYOrm-rLiFH-f8kqpUMDNnMafYLFtn1kyi0kgcLIZDzWZSVpZprOL7fpPu7zUu8x8ZSo_S-wmgX7aYsZ7XoDxmN_2Qwg4aqYTMoX6yiPR&usqp=CAc",
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZhQ66tnPp-x8XGIA4SnYDI1LmKRQJLK6gZbKiMErOIXpMTLCx8P3W9we3EHF5Ltvxax8t-NAS7xzcioWyM3_htrtnD22Thqz36MZnd5w5_JGupUEl67cpJMCyNmA4KOHwDRj7sQ&usqp=CAc",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTCm52r4dCX3EN9wHinZoF9W6nJPN0BvrhX85rabH_-kxhb2pTwfuyo8GiMReKt4IMFb_bQ1_BeMereLVN_mfTrYLJDRf8n4ma0ZWjXg3fzP6ZEyEYZMUPfr-nI"
    ] satisfies string[]
    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,_300px)] justify-center gap-30">
            <ShopItem price="$30" name="1" src={sorces[0]} />
            <ShopItem price="$20" name="2" src={sorces[1]} />
            <ShopItem price="$1000" name="3" src={sorces[2]} />
            <ShopItem price="$30" name="4" src={sorces[3]} />
            <ShopItem price="$20" name="5" src={sorces[1]} />
            <ShopItem price="$1000" name="6" src={sorces[2]} />
            <ShopItem price="$30" name="7" src={sorces[0]} />
            <ShopItem price="$20" name="cool pants" src={sorces[1]} />
            <ShopItem price="$1000" name="coolest pants" src={sorces[2]} />
            <ShopItem price="$30" name="cooler pants" src={sorces[0]} />
            <ShopItem price="$20" name="cool pants" src={sorces[1]} />
            <ShopItem price="$1000" name="coolest pants" src={sorces[2]} />

        </div>
    )
}

type ShopItemProps = {
    src: string,
    price: string,
    name: string
}

function ShopItem({ src, price, name }: ShopItemProps) {
    return (
        <div className="w-[300px] p-0 m-0 flex flex-col gap-1">
            <div className="group grid justify-items-center items-end">
                <img className="col-start-1 col-end-2 row-start-1 row-end-2 w-[300px] p-0 m-0 rounde-lg aspect-3/5" src={src} />
                <h1 className="col-start-1 col-end-2 row-start-1 row-end-2 text-black font-medium text-3xl bg-white/30 backdrop-hue-rotate-270 backdrop-blur-lg w-full p-0 m-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 h-0 group-hover:h-full group-hover:cursor-pointer">{name}</h1>
            </div>
            <div className="w-[300px] p-0 m-0 flex justify-center">
                <h1 className="font-medium text-2xl">{price}</h1>
            </div>
        </div>
    )
}