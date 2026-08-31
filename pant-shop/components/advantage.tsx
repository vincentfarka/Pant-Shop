import { Camera } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import React from "react";


type AdvantageProps = {
    svg: React.JSX.Element;
    header: string
    pharagrah: React.JSX.Element | string
}

// <Camera className="text-primary mr-2" />
// <h1>Lorem Ipsum</h1>
// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

export default function Advantage({ svg, header, pharagrah }: AdvantageProps) {
    return (
    <Card className="w-full min-w-sm max-w-sm">
        <CardHeader>
            <CardTitle className="mx-auto"><div className="flex">{svg}<h1>{header}</h1></div></CardTitle>
            <CardDescription className="text-base/6">{pharagrah}</CardDescription>
        </CardHeader>
    </Card>

    )
}