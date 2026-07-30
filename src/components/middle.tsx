export function Middle() {
    return (
        <div className="grid w-full grid-cols-[repeat(auto-fit,_300px)] justify-center gap-30">
          <Image />     
          <Image />
          <Image />     
          <Image />     
          <Image />     
          <Image />     
          <Image />          
          <Image />          
          <Image />          
          <Image />          
          <Image />          
          <Image />          
        </div>
    )
}

function Image() {
    return <img className="w-[300px] p-0 m-0"  src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRv32q_magAqjzUYOrm-rLiFH-f8kqpUMDNnMafYLFtn1kyi0kgcLIZDzWZSVpZprOL7fpPu7zUu8x8ZSo_S-wmgX7aYsZ7XoDxmN_2Qwg4aqYTMoX6yiPR&usqp=CAc" />
}