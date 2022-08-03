import {CSSProperties, FC, useState} from "react";
import {FaceDetail} from "aws-sdk/clients/rekognition";
import "./DataToShow.css";

const style: CSSProperties = {
    width: "96%",
    background: "rgba(255,255,255,0.3)",
    borderRadius: "15px",
    paddingTop: "2%",
    paddingBottom: "2%",
}


export const LandmarksValues: FC<{ values: FaceDetail }> = ({values}) => {
    const [state, toggle] = useState<boolean>(false);
    return (
        <div style={style} className="mt-3" onClick={() => toggle(!state)}>
            <div className="d-flex align-items-center justify-content-between">
                <i>Landmarks information</i>
                <i className={"bi " + (state ? "bi-caret-down" : "bi-caret-left")}></i>
            </div>
            {
                state &&
                <div className="w-100 mt-5">
                    <hr/>
                    <div className="landmarks-table">
                        <div className="landmarks-table-content">Type</div>
                        <div className="landmarks-table-content">X</div>
                        <div className="landmarks-table-content">Y</div>
                    </div>
                    <hr/>
                    {
                        values.Landmarks?.map((e, k) => {
                            return (
                                <div className="landmarks-table">
                                    <div className="landmarks-table-content1">{e.Type}</div>
                                    <div className="landmarks-table-content">{e.X?.toFixed(2)}</div>
                                    <div className="landmarks-table-content">{e.Y?.toFixed(2)}</div>
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}