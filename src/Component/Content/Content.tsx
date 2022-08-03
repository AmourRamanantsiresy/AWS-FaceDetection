import {FC, useContext} from "react";
import "./Content.css";
import {dataContext} from "../Interfaces and Types/Interfaces";
import {PrincipalData} from "../../App";
import {LoadingRounded} from "../Animations/Loading/LoadingRounded";
import {DataShower} from "./DataShower";

export const Content: FC = () => {
    const {data, setData} = useContext<dataContext>(PrincipalData);
    const classname: string = (data.data === null && !data.isInput) ?
        "d-flex align-items-center justify-content-center" :
        "";
    return (
        <div className={"container p-3 m-3 content " + classname}>
            {
                (data !== null) ?
                    (data.data !== null) ?
                        (
                            (data.data.FaceDetails?.length === 0)?
                            <div className="message-container">
                                <p><i className="bi bi-image-fill"></i>Please use an image containing a face or an image of higher quality</p>
                            </div> :
                            (<DataShower data={data}/>)
                        ) :
                        (!data.isInput) ? <LoadingRounded className=""/> :
                            "" : ""
            }
        </div>
    );
}