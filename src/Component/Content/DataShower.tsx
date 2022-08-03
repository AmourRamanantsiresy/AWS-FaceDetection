import {FC} from "react";
import {principalData} from "../Interfaces and Types/Interfaces";
import {TwoValues} from "./DataToShow/TwoValues";
import {QualityValues} from "./DataToShow/QualityValues";
import {EmotionsValues} from "./DataToShow/EmotionsValues";
import {LandmarksValues} from "./DataToShow/LandmarksValues";

export const DataShower:FC<{data:  principalData}> = ({data}) => {
    return (
        <div className="row cursor-pointer justify-content-around">
            {
                (data.data?.FaceDetails !== undefined) && (
                    <>
                        <TwoValues values={data.data.FaceDetails[data.index]}/>
                        <QualityValues values={data.data.FaceDetails[data.index]}/>
                        <EmotionsValues values={data.data.FaceDetails[data.index]} />
                        <LandmarksValues values={data.data.FaceDetails[data.index]}/>
                    </>
                )
            }
        </div>
    );
}