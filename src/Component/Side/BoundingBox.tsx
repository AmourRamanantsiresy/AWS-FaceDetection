import {CSSProperties, FC} from "react";
import {BoundingBoxContent} from "../Interfaces and Types/Interfaces";

export const BoundingBox:FC<{bInfo: BoundingBoxContent, iInfo: HTMLImageElement}> = (props) => {
    const {bInfo, iInfo} = props;
    const style: CSSProperties = {
        position: "absolute",
        zIndex: "20000",
        height: (bInfo.Height * iInfo.height) + "px",
        top: (bInfo.Top * iInfo.height) + "px",
        width: (bInfo.Width * iInfo.width) + "px",
        left: (bInfo.Left * iInfo.width) + "px",
        border: "2px solid yellow"
    };


    return (
        <div style={style}></div>
    );
}