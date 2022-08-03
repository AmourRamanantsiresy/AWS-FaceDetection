import {CSSProperties, FC, useState} from "react";
import {FaceDetail} from "aws-sdk/clients/rekognition";
import {Percentages} from "../../Animations/CanvasPercentages/Percentages";

const style: CSSProperties = {
    width: "96%",
    background: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    paddingTop: "2%",
    paddingBottom: "2%",
    marginTop: "2%",
}

export const EmotionsValues: FC<{ values: FaceDetail }> = ({values}) => {

    const [state, toggle] = useState<boolean>(false);
    return (
        <div style={style} onClick={() => toggle(!state)}>
            <div className="d-flex align-items-center justify-content-between">
                <i>Emotions information</i>
                <i className={"bi " + (state ? "bi-caret-down" : "bi-caret-left")}></i>
            </div>
            {
                state &&
                <div className="w-100 row">
                    {
                        values.Emotions?.map(e => {
                            const percentages: number = parseFloat(e.Confidence?.toFixed(2) || "0");
                            const color: string = (percentages < 1) ?
                                "rgb(255,0,0)" : (percentages < 5) ?
                                    "rgb(255,255,0)" : (percentages === 10) ?
                                        "rgb(101, 250, 2)" : "rgb(5, 255, 30)";

                            return (
                                <div className="col-6 d-flex w-50 justify-content-between">
                                    <p className="m-2">{e.Type}</p>
                                    <Percentages percentages={percentages}
                                                 size={35}
                                                 color={color}/>
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}