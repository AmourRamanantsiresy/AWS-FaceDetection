import {FC} from "react";
import "./LoadingRounded.css";
export const LoadingRounded:FC<{className:string}> = ({className}) => {
    const classname:string = className + " loading-container d-flex align-items-center justify-content-center";
    return (
        <div className={classname}>
            <div className="loading-form d-flex align-items-center justify-content-center">
                <div></div>
            </div>
        </div>
    );
}