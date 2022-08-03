import {DetectFacesResponse} from "aws-sdk/clients/rekognition";
import {DS, FaceDetailsKey} from "./Types";

export const a = 0;

export interface principalData {
    url: string | null;
    data: DetectFacesResponse | null;
    isInput: boolean;
    index: number;
    change?: boolean;
}

export interface dataContext{
    data: principalData;
    setData: DS<principalData> | null;
}

export interface TwoValuesIn{
    Value: boolean;
    Confidence: number;
}

export interface ItemsProps{
    title: string,
    icon: string,
    isActive: boolean,
    onclick: ()=> void
}

export interface BoundingBoxContent{
    Width: number;
    Height: number;
    Left: number;
    Top: number;
}