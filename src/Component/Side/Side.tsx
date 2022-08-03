import "./Side.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import {FC, useContext} from "react";
import {Items} from "./Items";
import {GetImage} from "./GetImage";
import {dataContext, TwoValuesIn} from "../Interfaces and Types/Interfaces";
import {PrincipalData} from "../../App";
import {principalData} from "../Interfaces and Types/Interfaces";
import {DS} from "../Interfaces and Types/Types";
import {AboutHuman} from "../Content/DataToShow/AboutHuman";

export const Side: FC = () => {
    const {data, setData} = useContext<dataContext>(PrincipalData);

    return (
        <div className="side">
            <div className="header d-flex align-items-center justify-content-center">
                <p className="fs-2 text-light">Face Detector</p>
            </div>
                <GetImage/>
            {
                data.data != null && data.data.FaceDetails?.length !== 0 && data.data?.FaceDetails !== undefined &&
                <AboutHuman values={data.data?.FaceDetails[data.index]}/>
            }
            <div className="mt-5 menu-container">
                {
                    data.data != null && data.data.FaceDetails?.length !== 0 &&
                    data.data?.FaceDetails?.map((e, k) => {
                        return (
                            <Items key={k} title={"Face " + (k + 1)}
                                   icon="emoji-smile"
                                   onclick={() => setData !== null ? handleClick(k, data.index, setData) : () => {
                                   }}
                                   isActive={k === data.index ? true : false}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

function handleClick(e: number, index: number, setState: DS<principalData>): void {
    if (e !== index) {
        setState(lastValues => ({...lastValues, index: e}))
    }
}
