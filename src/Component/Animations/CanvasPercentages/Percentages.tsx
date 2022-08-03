import {FC, useContext, useEffect, useRef, useState} from "react";
import "./Percentages.css";
import {dataContext} from "../../Interfaces and Types/Interfaces";
import {PrincipalData} from "../../../App";

const findAngle = (percentages: number) => (Math.PI * 2 * percentages) / 100;

export const Percentages: FC<{ percentages: number, size: number, color: string }> = ({percentages, size, color}) => {
    const {data, setData} = useContext<dataContext>(PrincipalData);
    const canvas = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        let i = 0;
        let interval:(string | number | NodeJS.Timeout | undefined) = 0;
        if (canvas.current != null) {
            let canvasElement: HTMLCanvasElement = canvas.current;
            interval = setInterval(() => {
                if (i > percentages) {
                    clearInterval(interval);
                }else if(!data.change && setData != null && i == 2) {
                    setData({...data, change: true});
                } else {
                    DrawPercentages(canvasElement, i, size, color);
                    i++;
                }
            }, 50);
        }
        return ()=>{
            if(interval!= undefined){
                clearInterval(interval);
            }
        }
    });


    return (
        <div>
            <canvas ref={canvas}></canvas>
        </div>
    )
}

function DrawPercentages(canvas: HTMLCanvasElement, percentages: number, width: number, color:string) {
    canvas.width = width;
    canvas.height = width;
    const ctx: (CanvasRenderingContext2D | null) = canvas.getContext("2d");
    if (ctx !== null) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.arc(width / 2, width / 2, width / 2 - 2, 0, findAngle(percentages), false);
        ctx.arc(width / 2, width / 2, width / 2 - 8, findAngle(percentages), 0, true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.arc(width / 2, width / 2, width / 2 - 2, 0, Math.PI * 2, true);
        ctx.stroke();
        ctx.stroke();
        ctx.beginPath();
        ctx.font = width / 2.5 + "px bold";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(percentages.toString(), width / 2, width / 2, 150);
        ctx.stroke();
    }
}