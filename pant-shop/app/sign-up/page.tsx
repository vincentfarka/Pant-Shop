import Advantage from "@/components/advantage";
import { Camera } from "lucide-react";

export default function signUp() {
  return (
    <div className="min-w-screen flex flex-col items-center justify-center min-h-screen">
      <Advantage
        svg={<Camera className="text-primary mr-2" />}
        header="Lorem Ipsum"
        pharagrah="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
    </div>
  );
}
