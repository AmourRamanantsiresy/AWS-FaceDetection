import {CSSProperties, FC} from "react";
import {FaceDetail} from "aws-sdk/clients/rekognition";


export const AboutHuman: FC<{values: FaceDetail}> = (props) => {
    const {values} = props;
    let gender:string;
    const low = values.AgeRange?.Low || 0;
    const high = values.AgeRange?.High || 0;
    if(low < 18) {
        gender = values.Gender?.Value === "Male" ? "Boy" : "Girl"
    }else {
        gender = values.Gender?.Value === "Male" ? "Man" : "Woman"
    }

    return (
        <div className="mt-5 w-100 d-flex justify-content-center text-light">
            {
                `A ${gender} between ${low} and ${high} years old`
            }
        </div>
    );
}