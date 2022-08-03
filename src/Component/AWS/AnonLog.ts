import AWS from "aws-sdk";
//Provides anonymous log on to AWS services
export const AnonLog = ():void => {
    // Configure the credentials' provider to use your identity pool
    AWS.config.region = process.env.REACT_APP_REGION as string; // Region
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: process.env.REACT_APP_POOL_ID as string,
    });
}