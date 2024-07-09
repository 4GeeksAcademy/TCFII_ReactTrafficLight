import React, { useState } from 'react';

export function TrafficLight({initialColor}) {
        const [color,setColor] = useState(initialColor);

        const handleClickRed = () => {
            setColor("red");
        };
    
        const handleClickYellow = () => {
            setColor("yellow");
        };

        const handleClickGreen = () => {
            setColor("green");
        };
    
    return (
        <div className="w-[300px] h-[500px] bg-gray-300 px-8 pt-16 pb-24 border-4 border-black rounded-lg overflow-hidden text-center relative space-y-10">
            <div onClick={handleClickRed}
                className={"box-border rounded-full m-auto h-28 w-28 p-4 border-4 " + (color === "red" ? "bg-red-500 shadow-2xl shadow-red-400" : "bg-red-100")}>
            </div>
            <div onClick={handleClickYellow}
                className={"box-border rounded-full m-auto h-28 w-28 p-4 border-4 " + (color === "yellow" ? "bg-yellow-500 shadow-2xl shadow-yellow-400" : "bg-yellow-100")}>
            </div>
            <div onClick={handleClickGreen}
            className={"box-border rounded-full m-auto h-28 w-28 p-4 border-4 " + (color === "green" ? "bg-green-500 shadow-2xl shadow-green-400" : "bg-green-100")}>
            </div>
        </div>

        );
    }