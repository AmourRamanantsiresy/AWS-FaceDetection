import {FC} from "react";
import {FaceDetail} from "aws-sdk/clients/rekognition";
import {Percentages} from "../../Animations/CanvasPercentages/Percentages";
import {FaceDetailsKey} from "../../Interfaces and Types/Types";
import {TwoValuesIn} from "../../Interfaces and Types/Interfaces";
import "../ItemsResponsives.css";

export const className1: string = "items-width d-flex justify-content-between" +
    " align-items-center dataShower p-3 sideRightRounded mb-2 ";


export const TwoValues: FC<{ values: FaceDetail }> = ({values}) => {
    const keys: FaceDetailsKey[] = Object.keys(values) as FaceDetailsKey[];
    return (
        <>
            {
                keys.map((e, k) => {
                    const haveOrNot: boolean = ((values[e] as TwoValuesIn).Value);
                    const percentage:number = Math.floor((values[e] as TwoValuesIn).Confidence);
                    if (condition(e)) {
                        return;
                    } else {
                        const icon: string = "m-2 bi bi-" + (haveOrNot ? "check2-circle text-success" : "x-circle text-danger");
                        return (
                            <div key={k+"twovalues"} className={className1 + (haveOrNot ? "sideGreen" : "sideRed")}>
                                <div className="d-flex col-6">
                                    <p className={icon}></p>
                                    <p className="m-2">{e}</p>
                                </div>
                                <Percentages color={haveOrNot? "rgba(0,255,0,0.5)": "rgba(255,0,0,0.5)"} percentages={percentage} size={50}/>
                            </div>
                        )
                    }
                })
            }
        </>
    );
};

function condition(e: FaceDetailsKey): boolean {
    return (e === "BoundingBox"
        || e === "AgeRange"
        || e === "Emotions"
        || e === "Landmarks"
        || e === "Confidence"
        || e === "Gender"
        || e === "Quality"
        || e === "Pose");
}