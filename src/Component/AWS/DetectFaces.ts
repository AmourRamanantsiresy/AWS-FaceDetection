import AWS, {AWSError} from "aws-sdk";
import {DetectFacesRequest, DetectFacesResponse} from "aws-sdk/clients/rekognition";
import {AnonLog} from "./AnonLog";
import {DS} from "../Interfaces and Types/Types";
import {principalData} from "../Interfaces and Types/Interfaces";

export const DetectFaces = (setValues: DS<principalData>, file: Blob):void => {
    AnonLog();
    const imageUrl = URL.createObjectURL(file);
    new Response(file).arrayBuffer().then((res:ArrayBuffer)=> {
        rekognitionRequest(res, imageUrl, setValues);
    })
}

function rekognitionRequest(res:ArrayBuffer, imageUrl:string, setValues: DS<principalData>): void{
    let rekognition = new AWS.Rekognition();
    let params:DetectFacesRequest = {
        Image: {
            Bytes: res
        },
        Attributes: ['ALL']
    };
    rekognition.detectFaces(params,(err: AWSError, data: DetectFacesResponse) => {
        if (err) console.log(err);
        else {
            setValues({data, url: imageUrl, isInput: false, index:0});
        }
    });
}