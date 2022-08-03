import {ChangeEvent, FC, useContext, useRef} from "react";
import {PrincipalData} from "../../App";
import {DS} from "../Interfaces and Types/Types";
import {BoundingBoxContent, dataContext, principalData} from "../Interfaces and Types/Interfaces";
import {LoadingRounded} from "../Animations/Loading/LoadingRounded";
import {DetectFaces} from "../AWS/DetectFaces";
import {BoundingBox} from "./BoundingBox";

export const GetImage: FC = () => {
    const {data, setData} = useContext<dataContext>(PrincipalData);
    let boundingBoxContent: (BoundingBoxContent | null) = data.data?.FaceDetails !== undefined
    && data.data.FaceDetails.length !== 0
        ? (data.data?.FaceDetails[data.index].BoundingBox as BoundingBoxContent) : null;

    const input = useRef<HTMLImageElement>(null);
    return (
        <div className="image-container d-flex justify-content-center ">
            <label htmlFor="input" className="image d-flex align-items-center justify-content-center rounded-3">
                {
                    data.data === null ?
                        data.isInput ?
                            <p className="display-6 bi bi-camera"></p> :
                            <LoadingRounded className=""/> :
                    data.data.FaceDetails?.length === 0 ?<p className="display-6 bi bi-camera"></p> :
                        <div className="position-relative">
                            <img ref={input} className="img rounded-3" src={data.url as string}/>
                            {
                                (boundingBoxContent != null && input.current != null) &&
                                <BoundingBox bInfo={boundingBoxContent} iInfo={input.current}/>
                            }
                        </div>
                }
            </label>
            <input onChange={e => handleChange(e, setData)}
                   type="file" hidden id="input"
                   accept="image/png,image/jpeg"/>
        </div>
    );
}

function handleChange(e: ChangeEvent<HTMLInputElement>, setData: DS<principalData> | null) {
    if (e.target != null && e.target.files != null && setData != null) {
        setData(e => ({...e, data: null, isInput: false}))
        const file: File = e.target.files[0];
        DetectFaces(setData, file);
    }
}