import { useState } from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";

export default function App() {

  type sceneState = "shop" | "contact" | "about"
  const [scene, setScene] = useState<sceneState>("shop")
  return (
    <div>
      <div className="min-inline-[100vw] flex items-center justify-between px-5 static mt-30">
        <Header />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Content />
      </div>
    </div>
  )
}