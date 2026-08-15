import { useState } from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";



export type sceneState = "shop" 

export default function App() {


  const [scene, setScene] = useState<sceneState>("shop")
  return (
    <div>
      <div className="min-inline-screen flex items-center justify-between px-5 static mt-30">
        <Header setScene={setScene} scene={scene} />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Content scene={scene} />
      </div>
    </div>
  )
}