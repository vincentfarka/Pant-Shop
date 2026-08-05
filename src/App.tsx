import { Header } from "./components/header";
import { Middle } from "./components/middle";
import { SceneProvider } from "./context/SceneProvider";

export default function App() {
  return (
    <div>
      <SceneProvider>
      <div className="min-inline-[100vw] flex items-center justify-between px-5 static mt-30">
        <Header />
      </div>
      <div className="p-4 flex flex-col gap-4">
        <Middle />
      </div>
      </SceneProvider>
    </div>
  )
}