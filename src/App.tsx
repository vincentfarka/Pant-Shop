import { Header } from "./components/header";
import { Middle } from "./components/middle";

export default function App() {
  return (
    <div>
    <Header />
    <div className="p-4 flex flex-col gap-4">
     <Middle />
    </div>
    </div>
  )
}