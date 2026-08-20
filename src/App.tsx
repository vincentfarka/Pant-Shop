import { useState } from "react";
import { Header } from "./components/header";
import { Content } from "./components/content";

export type sceneState = "shop" | "home";

export default function App() {
  const [scene, setScene] = useState<sceneState>("home");
  return (
    <div>
      <div className="min-inline-screen flex items-center justify-between px-5 static mt-30">
        <Header setScene={setScene} />
      </div>
        <Content scene={scene} />
    </div>
  );
}
