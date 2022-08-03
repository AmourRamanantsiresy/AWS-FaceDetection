import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {TwoValuesIn} from "./Interfaces";

export type DS<T> = Dispatch<SetStateAction<T>>;
export type inputEvent = ChangeEvent<HTMLInputElement>;

export enum FaceDetailsKey {
    Smile = "Smile",
    Eyeglasses = "Eyeglasses",
    Sunglasses = "Sunglasses",
    Gender = "Gender",
    Beard = "Beard",
    Mustache = "Mustache",
    EyesOpen = "EyesOpen",
    MouthOpen = "MouthOpen",
    BoundingBox = "BoundingBox",
    AgeRange = "AgeRange",
    Emotions = "Emotions",
    Landmarks = "Landmarks",
    Confidence = "Confidence",
    Pose = "Pose",
    Quality = "Quality"
}