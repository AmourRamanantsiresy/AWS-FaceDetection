import "./Side.css";
import {FC} from "react";
import {ItemsProps} from "../Interfaces and Types/Interfaces";

export const Items: FC<ItemsProps> = (props) => {
    const {title, icon, isActive, onclick} = props;
    const classname: string = "items d-flex " +
        (isActive ? " selected" : "text-light");

    return (
        <div onClick={()=> onclick()} className={classname}>
            <p><i className={"mr-2 bi bi-" + icon}></i> <span>{title}</span></p>
        </div>
    );
}