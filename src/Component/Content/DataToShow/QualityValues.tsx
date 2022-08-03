import {FC} from "react";
import {FaceDetail} from "aws-sdk/clients/rekognition";
import {className1} from "./TwoValues";
import {Percentages} from "../../Animations/CanvasPercentages/Percentages";

export const QualityValues: FC<{ values: FaceDetail }> = ({values}) => {
    const label: string[] = Object.keys(values.Quality || {"this": "is"});
    const value: number[] = Object.values(values.Quality || {"this": "is"});
    const className2: string = "margin-0 padding-0";
    return (
        <div className={className1 + " neutral"}>
            <div className={className2}>
                <p  className={className2}>{label[0]}</p>
                <Percentages color="rgba(255,255,255,0.5)" percentages={Math.round(value[0])} size={35}/>
            </div>
            <div className={className2}>
                <p  className={className2}>{label[1]}</p>
                <Percentages color="rgba(255,255,255,0.5)" percentages={Math.round(value[1])} size={35}/>
            </div>
        </div>
    );
}